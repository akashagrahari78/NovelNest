import { motion } from "framer-motion";

const ReviewCard = ({ username, rating, date, reviewText, helpfulCount }) => {
  // Convert rating to stars (e.g., 5 → ★★★★★)
  const renderStars = () => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="border-b border-gray-200 py-4 last:border-0"
    >
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-xs font-medium text-gray-600">
            {username.charAt(0).toUpperCase()}
          </span>
        </div>
        <h4 className="font-medium text-gray-900">{username}</h4>
      </div>

      <div className="mt-1 flex items-center gap-2">
        <span className="text-yellow-500">{renderStars()}</span>
        <span className="text-xs text-gray-500">{date}</span>
      </div>

      <p className="mt-2 text-gray-700">{reviewText}</p>

      <div className="mt-2 flex items-center gap-1">
        <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700">
          <span>👍</span>
          <span>{helpfulCount} Helpful</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ReviewCard;