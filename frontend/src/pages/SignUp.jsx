import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-[#111111] border border-gray-800 rounded-2xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.05)] text-white">
        <h2 className="text-2xl font-semibold text-center mb-6 font-bricolage">
          Create Your Account
        </h2>

        <form onSubmit={onSubmitHandler} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              required
              type="text"
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              required
              type="email"
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              required
              type="password"
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full bg-white text-black font-medium py-2 rounded-md hover:bg-gray-200 transition"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Link to Login */}
        <p className="text-sm text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-white underline hover:text-gray-300">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
