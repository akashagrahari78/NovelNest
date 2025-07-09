import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi"; 
import { Link } from "react-router-dom";

const ReviewCard = ({ 
  username, 
  rating, 
  date, 
  reviewText, 
  helpfulCount,
  bookId 
}) => {
  const renderStars = () => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="border-b border-gray-700 py-6 last:border-0 bg-gray-900/50 p-4 rounded-lg"
    >
      {/* User & Rating */}
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
          <span className="text-xs font-medium text-gray-300">
            {username.charAt(0).toUpperCase()}
          </span>
        </div>
        <h4 className="font-medium text-white">{username}</h4>
      </div>

      <div className="mt-1 flex items-center gap-2">
        <span className="text-yellow-500">{renderStars()}</span>
        <span className="text-xs text-gray-400">{date}</span>
      </div>

      {/* Review Text  */}
      <p className="mt-3 text-gray-300 line-clamp-3">
        {reviewText}
      </p>

      {/* Like Button */}
      <div className="mt-4 flex justify-between items-center">
        <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-yellow-400 transition">
          <span>👍</span>
          <span>{helpfulCount} Helpful</span>
        </button>

        {/* Full Review Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(`/book/${bookId}`)}
          className="flex items-center gap-1 text-sm text-yellow-500 hover:text-yellow-400 transition"
        >
          <FiBookOpen className="text-xs" />
          <Link to={'/book/:bookId'}>
          Full Review
          </Link>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ReviewCard;