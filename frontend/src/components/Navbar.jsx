import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="w-11/12 max-w-4xl px-6 py-3 flex items-center justify-between rounded-2xl bg-[#111111]/80  border border-gray-800 shadow-[0_0_40px_rgba(255,255,255,0.08)] backdrop-blur-lg">

        {/* logo icon*/}
        <div className="flex items-center space-x-2">
          <div className="bg-yellow-400 p-1.5 rounded shadow-[0_0_10px_rgba(255,200,0,0.6)]">
            <img src={assets.logo} alt="NovelNest logo" className="w-8 h-8 rounded" />
          </div>
          <span className="text-white text-xl font-bold ">NovelNest</span>
        </div>

        {/* ----------- navigation links--------- */}
        <div className="hidden md:flex space-x-6 text-base font- font-quicksand text-gray-300">
          <a href="#" className="hover:text-white hover:scale-105  transition-transform duration-200">Reviews</a>
          <a href="#" className="hover:text-white hover:scale-105  transition-transform duration-200">Add Review</a>
          <a href="#" className="hover:text-white hover:scale-105  transition-transform duration-200">About</a>
          <a href="#" className="hover:text-white hover:scale-105  transition-transform duration-200">Contact</a>
        </div>

        
        <div>
          <Link to= "/login">
          <button className="bg-white text-black font-semibold px-4 py-1.5 rounded-xl shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:bg-gray-200 transition">
            Get Started
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
