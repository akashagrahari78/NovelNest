import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiUser,
  FiCalendar,
  FiStar,
  FiThumbsUp,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

const ReviewCard = ({
  postId,
  bookTitle,
  bookAuthor,
  userReview,
  rating,
  date,
  reviewedBy,
  initialLikes = 0,
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const renderStars = () => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="border border-gray-700 bg-gray-900/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      {/* Book Info Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white font-merriweather">
          {bookTitle}
        </h3>
        <p className="text-gray-400 flex items-center gap-1 mt-1">
          <FiUser className="text-sm" />
          <span className="font-medium">{bookAuthor}</span>
        </p>
      </div>

      {/* Rating and Date */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1 text-yellow-400">
          <FiStar />
          <span>{renderStars()}</span>
          <span className="text-sm ml-1">({rating}.0)</span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-sm">
          <FiCalendar />
          <span>{formatDate(date)}</span>
        </div>
      </div>

      {/* Review Content (Truncated to 2 lines) */}
      <div className="mb-4">
        <p className="text-gray-300 line-clamp-2">{userReview}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-700">
        <div className="flex items-center gap-4">
          {/* Like Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleLike}
            className={`flex items-center gap-1 text-sm ${
              isLiked ? "text-blue-400" : "text-gray-400"
            } hover:text-blue-300 transition-colors`}
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
                {reviewedBy?.name?.charAt(0).toUpperCase() || "U"}
              </span>
            </div>
            <span className="text-sm text-gray-400">{reviewedBy.name}</span>
          </div>
        </div>

        {/* Full Review Button */}
        <Link
          to={`/book/${postId}`}
          className="flex items-center gap-1 text-sm text-yellow-500 hover:text-yellow-400 transition"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <FiBookOpen className="mr-1" />
            Full Review
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
