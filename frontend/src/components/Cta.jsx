import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div>
   
         {/* <hr className="h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent border-0" /> */}
    <div className="bg-black py-20 px-4 border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white font-bricolage mb-6"
        >
          Ready to share your unfiltered take?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Join thousands of readers who aren't afraid to speak their mind about
          literature.
        </motion.p>

        {/* Buttons */}
       

        <div className="flex justify-around gap-6">
          <Link to="/reviews">
            <button className="bg-white  text-black font-semibold px-5 py-2 rounded-xl font-merriweather shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:bg-yellow-400 transition ">
              Browse Top Books
            </button>
          </Link>

          
          <Link to="/add-review">
            <button className="bg-white  text-black font-semibold px-5 py-2 rounded-xl font-merriweather shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:bg-yellow-400 transition ">
              Write First Review
            </button>
          </Link>
        </div>
      </div>
    </div>
      </div>
  );
};

export default Cta;
