import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import "../index.css";

const Hero = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchBy, setSearchBy] = useState('title'); // 'title' or 'author'

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?${searchBy}=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-4xl w-full mx-auto">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-bold font-merriweather mt-40 mb-8">
          JUDGE BOOKS LIKE A PRO
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 italic font-quicksand text-gray-300">
          "No mercy for bad prose."
        </p>

        {/* Animated Book */}
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

        {/* Search Toggle Buttons */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex rounded-full bg-gray-800 p-1">
            <button
              type="button"
              onClick={() => setSearchBy('title')}
              className={`px-6 py-2 rounded-full transition ${searchBy === 'title' ? 'bg-white text-black font-bold' : 'text-gray-300'}`}
            >
              By Book Title
            </button>
            <button
              type="button"
              onClick={() => setSearchBy('author')}
              className={`px-6 py-2 rounded-full transition ${searchBy === 'author' ? 'bg-white text-black font-bold' : 'text-gray-300'}`}
            >
              By Author
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-8 w-full max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={searchBy === 'title' ? "Search by book title..." : "Search by author..."}
              className="w-full px-6 py-4 text-lg rounded-full bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button 
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition"
            >
              <FaSearch className="h-6 w-6" />
            </button>
          </div>
        </form>

        {/* Example Search Hints */}
        <div className="text-gray-400 mb-8">
          {searchBy === 'title' ? (
            <p>Try: "Dune", "The Great Gatsby", "1984"</p>
          ) : (
            <p>Try: "J.K. Rowling", "George Orwell", "Toni Morrison"</p>
          )}
        </div>

        {/*  CTA  button*/}
        <div className="flex justify-center mb-8">
          <button 
            onClick={() => navigate('/trending')}  
            className="px-8 py-3 bg-white text-black font-bold rounded-full font-merriweather shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:bg-yellow-400 transition"
          >
            Explore Curated Picks
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;