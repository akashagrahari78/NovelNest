import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CarouselBox = ({postId, bookAuthor, bookTitle, userReview, rating, date, reviewedBy }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="relative p-[1px] rounded-xl bg-gradient-to-r from-green-400 via-yellow-500 to-red-500 bg-[length:200%_200%] animate-gradient-border"
    >
      <div className="h-full rounded-xl bg-gray-900 p-6 flex flex-col">
        {/* Book Title */}
        <h2 className="text-xl font-bold text-white mb-2 font-bricolage line-clamp-1">
          {bookTitle}
        </h2>

        {/* Author */}
        <p className="text-gray-300 mb-1 line-clamp-1">
          <span className="font-medium font-bricolage text-gray-400">Author:</span>{" "}
          <span className="font-bricolage">{bookAuthor}</span>
        </p>

        {/* Rating & Date */}
        <div className="flex items-center gap-4 mb-1">
          <div>
            <span className="font-medium text-gray-400 font-bricolage">Rating:</span>
            <span className="text-yellow-400 ml-1">
              {"★".repeat(rating)}
              {"☆".repeat(5 - rating)}
            </span>
          </div>
          <div className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </div>
        </div>

        {/* Review Excerpt */}
       <p className="text-gray-300 mb-4 flex-grow line-clamp-2">
         <span className="font-medium text-gray-400 font-bricolage">Review:</span>
         <span className="font-bricolage"> {userReview}</span>
       </p>
        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-800 pt-4">
          <span className="text-sm text-gray-500 truncate max-w-[120px]">
            @{reviewedBy.name || "Unknown"}
             
          </span>
          <Link to={`/post/${postId}`}>
            <button className="bg-white text-black hover:bg-gray-200 text-sm px-4 py-2 rounded-xl font-medium transition-colors duration-200">
              Full Review →
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CarouselBox;
 