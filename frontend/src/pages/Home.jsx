import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import UserTestimonial from "../components/UserTestimonal";
import StatsBar from "../components/StatsBar";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="p-4">  
      <Hero />
      <Reviews />
      <UserTestimonial/>
      <StatsBar/>
      <Cta/>
      <Footer/>
    </div>
  );
};

export default Home;