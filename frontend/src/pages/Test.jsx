import React from "react";

const Test = () => {
  return (
    <div className="relative inline-flex items-center justify-center rounded-full p-[2px] bg-[conic-gradient(from_0deg_at_50%_50%,#ff0080,#7928ca,#2afadf,#00f0ff,#ff0080)] animate-spin-slow shadow-[0_0_40px_-10px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-center rounded-full bg-black px-6 py-3 text-white text-lg font-semibold transition duration-300 hover:opacity-90">
        Explore more events
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </div>
  );
};

export default Test;
