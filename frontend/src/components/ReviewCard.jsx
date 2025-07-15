import { motion } from "framer-motion";
import {FiBookOpen,FiUser,FiCalendar,FiStar,FiThumbsUp} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext, useState,useEffect, useMemo, useCallback } from "react";
import { userContext } from "../context/userContext";
import axios from "axios";

const ReviewCard = ({
  postId,
  bookTitle,
  bookAuthor,
  userReview,
  rating,
  date,
  reviewedBy ,
  initialLikes ,
  initialIsLiked 
}) => {
  const { token, backendUrl } = useContext(userContext);
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(initialIsLiked);

  const renderStars = useMemo(() => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  }, [rating]);

  const formattedDate = useMemo(() => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  }, [date]);

useEffect(() => {
  const fetchLikeStatus = async () => {
    try {
      const response = await axios.get(
        // `http://localhost:3000/api/user/${postId}/like-status`,
        `${backendUrl}/api/user/${postId}/like-status`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { isLiked, likesCount } = response.data;
      setIsLiked(isLiked);
      setLikes(likesCount);
    } catch (error) {
      console.error("Failed to fetch like status", error);
    }
  };

  fetchLikeStatus();
}, [postId, token]);


 const handleLike = async () => {
  const optimisticIsLiked = !isLiked;
  const optimisticLikes = optimisticIsLiked ? likes + 1 : likes - 1;

  setIsLiked(optimisticIsLiked);
  setLikes(optimisticLikes);

  try {
    const response = await axios.put(
      `http://localhost:3000/api/user/${postId}/like`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { isLiked, likesCount } = response.data;
    setLikes(likesCount);
    setIsLiked(isLiked);
  } catch (error) {
    console.error("Error updating like:", error);
     
    setIsLiked(!optimisticIsLiked);
    setLikes(optimisticIsLiked ? likes - 1 : likes + 1);
  }
};

  const reviewerInitial = reviewedBy?.name?.charAt(0)?.toUpperCase() || "U";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="border border-gray-700 bg-gray-900/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      {/* Book Info */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white font-merriweather">
          {bookTitle}
        </h3>
        <p className="text-gray-400 flex items-center gap-1 mt-1">
          <FiUser className="text-sm" />
          <span className="font-medium">{bookAuthor}</span>
        </p>
      </div>

      {/* Rating & Date */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1 text-yellow-400">
          <FiStar />
          <span>{renderStars}</span>
          <span className="text-sm ml-1">({rating}.0)</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-sm">
          <FiCalendar />
          <span>{formattedDate}</span>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-300 line-clamp-2 mb-4">{userReview}</p>

      {/* Actions */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-700">
        <div className="flex items-center gap-4">
          {/* Like Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleLike}
            className={`flex items-center gap-1 text-sm focus:outline-none ${
              isLiked ? "text-blue-400" : "text-gray-400"
            } hover:text-blue-300 transition-colors`}
            aria-label={isLiked ? "Unlike" : "Like"}
          >
            <FiThumbsUp className={isLiked ? "fill-current" : ""} />
            <span>
              {likes} {likes === 1 ? "Like" : "Likes"}
            </span>
          </motion.button>

          {/* Reviewer Info */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-xs font-medium text-gray-300">
                {reviewerInitial}
              </span>
            </div>
            <span className="text-sm text-gray-400">{reviewedBy.name || "Unknown"}</span>
          </div>
        </div>

        {/* Full Review Link */}
        <Link
          to={`/post/${postId}`}
          className="flex items-center gap-1 text-sm text-yellow-500 hover:text-yellow-400 transition"
        >
          <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <FiBookOpen className="mr-1" />
            Full Review
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
