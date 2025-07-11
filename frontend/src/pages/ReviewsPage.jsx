import { motion } from "framer-motion";
import ReviewCard from "../components/ReviewCard.jsx";
import { useContext } from "react";
import { userContext } from "../context/userContext.jsx";

const ReviewsPage = () => {
  const reviews = [
    {
      id: 1,
      username: "User123",
      rating: 5,
      date: "2 days ago",
      userReview: "This book was amazing! The plot twists kept me hooked.",
      helpfulCount: 12,
      bookId: 9,
    },
    {
      id: 2,
      username: "BookLover42",
      rating: 3,
      date: "1 week ago",
      userReview: "Good, but the middle part dragged a bit.",
      helpfulCount: 5,
      bookId: 9,
    },
    {
      id: 2,
      username: "BookLover42",
      rating: 3,
      date: "1 week ago",
      userReview: "Good, but the middle part dragged a bit.",
      helpfulCount: 5,
      bookId: 9,
    },
    {
      id: 2,
      username: "BookLover42",
      rating: 3,
      date: "1 week ago",
      userReview: "Good, but the middle part dragged a bit.",
      helpfulCount: 5,
      bookId: 9,
    },
    {
      id: 2,
      username: "BookLover42",
      rating: 3,
      date: "1 week ago",
      userReview: "Good, but the middle part dragged a bit.",
      helpfulCount: 5,
      bookId: 9,
    },
  ];

  const { books } = useContext(userContext);

  return (
    <div className="max-w-2xl mx-auto p-4 mt-28">
      {/* Box-like container with heading and filters */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900/50 rounded-lg shadow-sm p-6 mb-6 border border-gray-800"
      >
        <h1 className="text-4xl font-merriweather ml-6 font-bold text-white mb-2">
          Reviews
        </h1>

        <hr className="border-t border-gray-700 my-4" />

        {/* Filter buttons  */}
        <div className="flex justify-around gap-4">
          <button className="bg-white  text-black font-semibold font-bricolage px-4 py-1.5 rounded-xl shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:bg-yellow-400 transition ">
            Most Recent
          </button>
          <button className="bg-white  text-black font-semibold font-bricolage px-4 py-1.5 rounded-xl shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:bg-yellow-400 transition ">
            Highest Rated
          </button>
          <button className="bg-white  text-black font-semibold font-bricolage px-4 py-1.5 rounded-xl shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:bg-yellow-400 transition ">
            Most Helpful
          </button>
        </div>
      </motion.div>

      {/* Reviews list */}
      <div className="space-y-4">
        {books.map((item, index) => (
          <ReviewCard
            key={index}
            bookId={item.id}
            bookTitle={item.bookTitle}
            bookAuthor={item.bookauthor}
            userReview={item.review}
            rating={item.rating}
            date={item.date}  
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
