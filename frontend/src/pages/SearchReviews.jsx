import { useSearchParams ,Link} from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { userContext } from "../context/userContext";
import { motion } from "framer-motion";
import ReviewCard from "../components/ReviewCard.jsx"; // Import your ReviewCard component

const SearchReviews = () => {
  const { token } = useContext(userContext);
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!title) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get(`http://localhost:3000/api/reviews`, {
          params: { title },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setReviews(res.data.reviews || []);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
        setError("Failed to fetch reviews. Please try again.");
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [title, token]);

  if (loading) {
    return (
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Searching for "{title}"...</h2>
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="border border-gray-700 bg-gray-900/50 p-6 rounded-lg"
              >
                <div className="animate-pulse space-y-4">
                  <div className="h-6 w-3/4 bg-gray-700 rounded"></div>
                  <div className="h-4 w-1/2 bg-gray-700 rounded"></div>
                  <div className="h-4 w-1/4 bg-gray-700 rounded"></div>
                  <div className="h-16 bg-gray-700 rounded"></div>
                  <div className="h-8 bg-gray-700 rounded"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-6 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-900/50 border border-red-700 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Error</h2>
            <p className="text-gray-300">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-700 hover:bg-red-600 rounded text-white transition"
            >
              Try Again
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-white mb-8"
        >
          Reviews for "{title}"
        </motion.h2>

        {reviews.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-900/50 border border-gray-700 p-8 rounded-lg text-center"
          >
            <p className="text-gray-400 text-lg">No reviews found for this book.</p>
            <Link
              to="/"
              className="inline-block mt-4 px-4 py-2 bg-yellow-600 hover:bg-yellow-500 rounded text-white transition"
            >
              Browse All Books
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {reviews.map((review) => (
              <ReviewCard
                key={review._id}
                postId={review._id}
                bookTitle={review.bookTitle}
                bookAuthor={review.bookAuthor}
                userReview={review.userReview}
                rating={review.rating}
                date={review.date}
                reviewedBy={review.reviewedBy}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchReviews;