import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../index.css"

const Hero = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-4xl w-full mx-auto">
        {/* Header */}
        <h1 className="text-5xl md:text-7xl font-bold font-bricolage mb-4">
          JUDGE BOOKS LIKE A PRO
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 italic font-quicksand text-gray-300">
          "No mercy for bad prose."
        </p>

        {/* Animated Book  */}
        <div className="w-64 h-64 mb-12 mx-auto hover:scale-105 transition-transform duration-300">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
            className="w-full h-full animate-float"
          >
            <path 
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
            />
          </svg>
        </div>

        {/* Wider Search Bar */}
        <form onSubmit={handleSearch} className="mb-8 w-full max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search books, authors, or reviews..."
              className="w-full px-6 py-4 text-lg rounded-full bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button 
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>

        {/* Primary CTA  */}
        <div className="flex justify-center mb-8">
          <button 
            onClick={() => navigate('/trending')}  
            className="px-8 py-3 bg-white text-black font-bold rounded-full font-merriweather hover:bg-gray-200 transition-colors duration-300 text-lg"
          >
            Explore  Curated  Picks
          </button>
        </div>

        {/* Stats */}
        {/* <p className="text-gray-400 text-sm md:text-base">
          12,342+ books dissected (and counting)
        </p> */}
      </div>
    </div>
  )
}

export default Hero;