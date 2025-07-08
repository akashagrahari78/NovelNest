import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import UserTestimonial from "../components/UserTestimonal";
import StatsBar from "../components/StatsBar";
import Cta from "../components/Cta";

const Home = () => {
  return (
    <div className="p-4"> {/* Add padding-top to account for fixed navbar */}
      <Hero />
      <Reviews />
      <UserTestimonial/>
      {/* <HeatedDiscussionsButton/> */}
      <StatsBar/>
      <Cta/>
    </div>
  );
};

export default Home;