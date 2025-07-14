import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { userContext } from "../context/userContext";
import { toast } from "react-toastify";


const AddReviewPage = () => {

  const {token, getAllPost} = useContext(userContext);
  const [formData, setFormData] = useState({
    bookTitle: "",
    bookAuthor: "",
    rating: 0,
    username: "",
    date: new Date().toISOString().split("T")[0],
    userReview: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Review Submitted:", formData);

    try {
      const response = await axios.post(
  `http://localhost:3000/api/user/add-review`,
  formData,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }
)
toast.success(response.data.message)
await getAllPost();
      console.log(response.data);

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="mt-28 bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-black text-white p-6"
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-yellow-400 font-merriweather">
            Add Your Review
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Book Name */}
            <div>
              <label
                htmlFor="bookTitle"
                className="block font-medium mb-2  text-base font-bricolage"
              >
                Book Name *
              </label>
              <input
                type="text"
                id="bookTitle"
                name="bookTitle"
                value={formData.bookTitle}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-950 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* Book Author */}
            <div>
              <label
                htmlFor="bookAuthor"
                className="block font-bricolage text-base font-medium mb-2"
              >
                Book Author *
              </label>
              <input
                type="text"
                id="bookAuthor"
                name="bookAuthor"
                value={formData.bookAuthor}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-950 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* Rating (1-5 Stars) */}
            <div>
              <label className="block  font-medium mb-2 text-base">
                Rating *
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating: star })}
                    className={`text-2xl ${
                      star <= formData.rating
                        ? "text-yellow-500"
                        : "text-gray-500"
                    }`}
                  >
                    {star <= formData.rating ? "★" : "☆"}
                  </button>
                ))}
              </div>
            </div>

            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-base font-medium mb-2 font-bricolage"
              >
                Username *
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-950 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* Date */}
            <div>
              <label
                htmlFor="date"
                className="block text-base font-medium mb-2 font-bricolage"
              >
                Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-950 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* Review Text */}
            <div>
              <label
                htmlFor="userReview"
                className="block text-base font-medium mb-2 font-bricolage"
              >
                Your Review *
              </label>
              <textarea
                id="userReview"
                name="userReview"
                value={formData.userReview}
                onChange={handleChange}
                rows="5"
                required
                className="w-full px-4 py-2 bg-gray-950 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full text-lg py-3 font-bricolage bg-yellow-500 text-gray-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Submit Review
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AddReviewPage;
