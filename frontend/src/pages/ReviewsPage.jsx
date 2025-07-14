import { motion } from "framer-motion";
import ReviewCard from "../components/ReviewCard.jsx";
import { useContext, useMemo, useState } from "react";
import { userContext } from "../context/userContext.jsx";
import { jwtDecode } from "jwt-decode";

const ReviewsPage = () => {
  const { token, allPost } = useContext(userContext);
  const [sortType, setSortType] = useState("recent"); // recent, rating, helpful

  let userId = null;
  if (token) {
    try {
      const decoded = jwtDecode(token);
      userId = decoded.userId;
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }

  // Sort the posts based on selected sortType
  const sortedPosts = useMemo(() => {
    const postsCopy = [...allPost];

    switch (sortType) {
      case "recent":
        return postsCopy.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
      case "rating":
        return postsCopy.sort((a, b) => b.rating - a.rating);
      case "helpful":
        return postsCopy.sort((a, b) => b.likes.length - a.likes.length);
      default:
        return postsCopy;
    }
  }, [allPost, sortType]);

  return (
    <div className="max-w-2xl mx-auto p-4 mt-28">
      {/* Heading and Filters */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900/50 rounded-lg shadow-sm p-6 mb-6 border border-gray-800"
      >
        <h1 className="text-4xl font-merriweather ml-6 font-bold text-white mb-2">
          Reviews
        </h1>

        <hr className="border-t border-gray-700 my-4" />

        {/* Filter Buttons */}
        <div className="flex justify-around gap-4">
          <button
            onClick={() => setSortType("recent")}
            className={`${
              sortType === "recent" ? "bg-yellow-400" : "bg-white"
            } text-black font-semibold font-bricolage px-4 py-1.5 rounded-xl shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:bg-yellow-400 transition`}
          >
            Most Recent
          </button>
          <button
            onClick={() => setSortType("rating")}
            className={`${
              sortType === "rating" ? "bg-yellow-400" : "bg-white"
            } text-black font-semibold font-bricolage px-4 py-1.5 rounded-xl shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:bg-yellow-400 transition`}
          >
            Highest Rated
          </button>
          <button
            onClick={() => setSortType("helpful")}
            className={`${
              sortType === "helpful" ? "bg-yellow-400" : "bg-white"
            } text-black font-semibold font-bricolage px-4 py-1.5 rounded-xl shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:bg-yellow-400 transition`}
          >
            Most Helpful
          </button>
        </div>
      </motion.div>

      {/* Review Cards */}
      <div className="space-y-4">
        {sortedPosts.map((item) => (
          <ReviewCard
            key={item._id}
            postId={item._id}
            bookTitle={item.bookTitle}
            bookAuthor={item.bookAuthor}
            userReview={item.userReview}
            rating={item.rating}
            date={item.date}
            reviewedBy={item.reviewedBy}
            initialLikes={item.likes?.length || 0}
            initialIsLiked={item.likes?.includes(userId) || false}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
