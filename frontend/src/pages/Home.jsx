import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <div className="p-4"> {/* Add padding-top to account for fixed navbar */}
      <Navbar />
      <Hero />
      <Reviews />
    </div>
  );
};

export default Home;