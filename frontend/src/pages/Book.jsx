import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { userContext } from "../context/userContext.jsx";
import { Star } from "lucide-react";

const Book = () => {
  const { bookId } = useParams();
  const { books } = useContext(userContext);

  const book = books.find((item) => item.id.toString() === bookId);

  if (!book) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg">Review not found</p>
      </div>
    );
  }

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star
        key={i}
        size={22}
        fill={i < book.rating ? "#facc15" : "none"}
        stroke={i < book.rating ? "#facc15" : "white"}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-12 mt-24">
      <div className="max-w-3xl mx-auto bg-gray-900 rounded-2xl p-8 shadow-lg space-y-6">
        {/* Back Link */}
        <Link to="/reviews">
          <button className="text-sm text-yellow-400 hover:underline">
            ← Back to Reviews
          </button>
        </Link>

        {/* Book Title */}
        <h1 className="text-3xl font-bold font-merriweather text-yellow-400">
          {book.bookTitle}
        </h1>

        {/* Author */}
        <p className="text-lg text-gray-400 font-bricolage">
          <span className="text-gray-500">Author:</span> {book.bookauthor}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          {stars}
          <span className="ml-2 text-sm text-gray-400">
            {book.rating}/5
          </span>
        </div>

        {/* Date */}
        <p className="text-sm font-bricolage text-gray-500">
          Reviewed on:{" "}
          {new Date(book.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>

        {/* Review */}
        <div className="pt-4 border-t border-gray-800">
          <h2 className="text-xl font-semibold text-white mb-2">Review</h2>
          <p className="text-gray-300 text-base font-bricolage  leading-relaxed">
            {book.review}
          </p>
        </div>

        <div className= "font-bricolage text-sm text-gray-500 truncate max-w-[120px]">
          @username
        </div>
      </div>
    </div>
  );
};

export default Book;
