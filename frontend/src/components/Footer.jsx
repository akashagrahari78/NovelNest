import { motion } from 'framer-motion';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import { FaGoodreads, FaTwitter, FaInstagram } from 'react-icons/fa';
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    
    <footer className="bg-black border-t border-gray-800">
      {/* Top Section - Engagement Hub */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 border-b border-gray-800">
        {/* Newsletter */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <FiMail className="text-yellow-400 text-xl" />
            <h3 className="text-xl font-bold text-white font-bricolage">Get the Week's Most Savage Reviews</h3>
          </div>
          <p className="text-gray-400">No spam, just brutal honesty</p>
          
          <form className="flex gap-4 mt-4">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-white text-black font-semibold font-quicksand px-4 py-1.5 rounded-xl shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:bg-yellow-400 transition ">
              Make My Inbox Spicy
            </button>
          </form>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col items-end md:items-start md:pl-12">
          <p className="text-gray-300 mb-4">Join 8,492 unapologetic critics</p>
          <div className="flex gap-4">
            <motion.a 
              whileHover={{ y: -3, scale: 1.1 }}
              href="#" 
              className="text-gray-400 hover:text-[#ff9a56] transition-colors"
            >
              <FaGoodreads size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -3, scale: 1.1 }}
              href="#" 
              className="text-gray-400 hover:text-[#1DA1F2] transition-colors"
            >
              <FaTwitter size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -3, scale: 1.1 }}
              href="#" 
              className="text-gray-400 hover:text-[#E1306C] transition-colors"
            >
              <FaInstagram size={24} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Section - Branding */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Link to={'/'}>
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-400 p-1.5 rounded shadow-[0_0_10px_rgba(255,200,0,0.6)]">
              <img
                src={assets.logo}
                alt="NovelNest logo"
                className="w-8 h-8 rounded"
              />
            </div>
          </div>
        </Link>
          <span className="text-white font-bold">NovelNest</span>
          <span className="text-gray-500 ml-2">| Where No Book is Safe</span>
        </div>
        
        {/* Legal Links - Now horizontal */}
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Service', 'Content Policy'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
            >
              {item}
            </a>
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-4 md:mt-0">
          © 2025 NovelNest | All opinions are mercilessly our own
        </p>
      </div>
    </footer>
  );
};

export default Footer;