import { motion } from 'framer-motion';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import { FaGoodreads, FaTwitter, FaInstagram } from 'react-icons/fa';
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
const onSubmitHandler = async (e) => {
  e.preventDefault();

  // Trim to remove accidental spaces
  const trimmedEmail = email.trim();

  if (!trimmedEmail) {
    setError("Please enter your email");
    return;
  }

  try {
    setLoading(true);
    setError(null);
    setSuccess(false);

    await axios.post("http://localhost:3000/api/user/email", { email: trimmedEmail });

    setSuccess(true);
    setEmail(""); // Clear input
    setTimeout(() => setSuccess(false), 3000);
  } catch (error) {
    console.error("Error:", error);
    setError(
      error.response?.data?.message ||
      "Subscription failed. Please try again."
    );
  } finally {
    setLoading(false);
  }
};


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
          
          <form onSubmit={onSubmitHandler} className="flex flex-col gap-4 mt-4">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                disabled={loading}
              />
              <button 
                type="submit"
                disabled={loading}
                className="bg-white text-black font-semibold font-quicksand px-4 py-1.5 rounded-xl shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:bg-yellow-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Make My Inbox Spicy'}
              </button>
            </div>
            
            {/* Status messages */}
            {error && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm"
              >
                {error}
              </motion.p>
            )}
            
            {success && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-sm"
              >
                Success! Check your email for confirmation.
              </motion.p>
            )}
          </form>
        </div>

        {/* Rest of your footer content remains the same */}
        {/* ... */}
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