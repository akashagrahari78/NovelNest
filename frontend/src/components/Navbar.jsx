import React from "react";
import { assets } from "../assets/assets";
import { Link , useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";

const Navbar = () => {

  const navigate = useNavigate();
const handleLogout = async () => {
  try {
    
    localStorage.removeItem("token");
    toast.success("Logout Successfull")
    console.log("Logout successful, showing toast...");
    navigate("/");
  } catch (err) {
    console.error("Logout failed", err);
    localStorage.removeItem("token");
    navigate("/");
  }
};

  return (
    <div className="fixed top-5 left-80 right-0 z-50 shadow-md h-16 flex items-center">
      <div className="w-11/12 max-w-4xl px-6 py-3 flex items-center justify-between rounded-2xl bg-[#111111]/80  border border-gray-800 shadow-[0_0_40px_rgba(255,255,255,0.08)] backdrop-blur-lg">
        {/* logo icon*/}
        <Link to={'/'}>
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-400 p-1.5 rounded shadow-[0_0_10px_rgba(255,200,0,0.6)]">
              <img
                src={assets.logo}
                alt="NovelNest logo"
                className="w-8 h-8 rounded"
              />
            </div>
            <span className="text-white text-xl font-bold ">NovelNest</span>
          </div>
        </Link>

        {/* ----------- navigation links--------- */}


        <div className="hidden md:flex space-x-6 text-sm text-gray-300">
          
          <Link to={"/"}>
            <div className="hover:text-yellow-400 hover:scale-105  transition-transform duration-200 font-bricolage">
              Home
            </div>
          </Link>

          <Link to={"/reviews"}>
            <div className="hover:text-yellow-400 hover:scale-105  transition-transform duration-200 font-bricolage">
              Reviews
            </div>
          </Link>

          <Link to={"/add-review"}>
            <div className="hover:text-yellow-400 hover:scale-105  transition-transform duration-200">
              Add Review
            </div>
          </Link>

          <Link to={"/about"}>
            <div className="hover:text-yellow-400 hover:scale-105  transition-transform duration-200">
              About
            </div>
          </Link>

          <Link to={"/contact"}>
            <div className="hover:text-yellow-400 hover:scale-105  transition-transform duration-200">
              Contact
            </div>
          </Link>
        </div>

        <div>
          <Link to="/login">
            <button className="bg-white text-black font-semibold px-4 py-1.5 rounded-xl shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:bg-yellow-400 transition ">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="ml-40">
    <button
      onClick={handleLogout}
      className="bg-white text-black font-semibold px-4 py-1.5 rounded-xl shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:bg-yellow-400 transition"
    >
      Logout
    </button>
  </div>
    </div>
  );
};

export default Navbar;
