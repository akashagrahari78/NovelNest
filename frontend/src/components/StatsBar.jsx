import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StatsBar = () => {
  const [bookCount, setBookCount] = useState(0);
  const [memberCount, setMemberCount] = useState(0);
  const targetBooks = 12342;
  const targetMembers = 8492;

  useEffect(() => {
    const animateCount = (target, setter) => {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setter(Math.floor(start));
      }, 16);

      return timer;
    };

    const bookTimer = animateCount(targetBooks, setBookCount);
    const memberTimer = animateCount(targetMembers, setMemberCount);

    return () => {
      clearInterval(bookTimer);
      clearInterval(memberTimer);
    };
  }, []);

  return (

    <div>
      <div className='flex items-center justify-center mb-10' >
          <Link to="/reviews">
            <button className="bg-white  text-black font-semibold px-5 py-2 rounded-xl font-merriweather shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:bg-yellow-400 transition ">
              See All Heated Discussion
            </button>
          </Link>
       </div>
     <hr className="h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent border-0" />
     <div className="bg-black py-12 px-4">
        
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Books Reviewed */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center"
            >
              <div className="text-yellow-400 text-5xl font-bold font-bricolage mb-2">
                {bookCount.toLocaleString()}
              </div>
              <div className="text-gray-300 font-merriweather text-xl">
                Books Reviewed
              </div>
             </motion.div>
          </div>

          {/* Active Members */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center"
            >
              <div className="text-yellow-400 text-5xl font-bold font-bricolage mb-2">
                {memberCount.toLocaleString()}
              </div>
              <div className="text-gray-300  font-merriweather text-xl">
                Active Members
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>  
    </div>

  );
};

export default StatsBar;