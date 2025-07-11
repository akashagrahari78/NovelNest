import { motion } from "framer-motion";
import { useContext } from "react";
import { userContext } from "../context/userContext.jsx";
import CarouselBox from "../components/CarouselBox.jsx";
import { Link } from "react-router-dom";

const Reviews = () => {
  const { books } = useContext(userContext);

  return (
    <div className="px-4 py-12">
      {/* Section Header */}
      <div className="w-full pb-12">
        <hr className="h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent border-0" />
        <div className="text-center mt-6 p-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white font-merriweather mb-2"
          >
            Raw Opinions
          </motion.h2>
          <div className="mt-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-300 font-quicksand italic"
            >
              Unfiltered takes from our community
            </motion.p>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {books.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CarouselBox
              bookId = {item.id}
              bookAuthor={item.bookauthor}
              bookTitle={item.bookTitle}
              userReview={item.review}
              rating ={item.rating}
              date ={item.date}  
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
