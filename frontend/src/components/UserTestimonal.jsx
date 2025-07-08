import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion'
import { userContext } from "../context/userContext";

const testimonials = [
  {
    quote:
      "Finally a platform where pretentious prose gets called out. My TBR list is now quality-only.",
    name: "LiterarySnob",
    tag: "DystopianLover",
    stars: 5,
  },
  {
    quote:
      "I can’t believe how many hidden gems I’ve found through this. Top reading recs!",
    name: "NovelHunter",
    tag: "SciFiAddict",
    stars: 5,
  },
  {
    quote:
      "Books actually get judged on their content. About time!",
    name: "CritiqueMaster",
    tag: "BookTactician",
    stars: 4,
  },
];

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-35px] top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <FaArrowRight className="text-white text-2xl" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[-35px] top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <FaArrowLeft className="text-white text-2xl" />
  </div>
);

const userTestimonal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center gap-2 mt-6">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 bg-gray-500 rounded-full hover:bg-yellow-400 transition-all duration-300"></div>
    ),
  };

  return (
    <div className="relative w-11/12 md:w-9/12 lg:w-7/12 mx-auto py-20 text-white">
      {/* <h2 className="text-3xl font-bold text-center mb-12">What Readers Say</h2> */}
      <div className="w-full pb-12">
        <hr className="h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent border-0" />
        <div className="text-center mt-6 p-5">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl md:text-5xl font-bold text-white font-merriweather mb-2"
          >
            What Readers Say
          </motion.h2>
          <div className='mt-5'>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 font-quicksand italic"
            >
            Unfiltered takes from our community
          </motion.p>
            </div>
        </div>
      </div>
      
      <Slider {...settings}>
        {testimonials.map((item, idx) => (
          <div key={idx} className="px-4">
            <div className="group transition-all duration-500 rounded-xl border border-gray-800 hover:border-yellow-500 p-8 bg-gradient-to-b from-[#0f0f12] to-[#0d0e12] shadow-lg hover:shadow-yellow-500/10">
              <p className="font-bricolage text-gray-300 text-lg mb-4">"{item.quote}"</p>
              <div className="text-yellow-400 text-lg mb-2">
                {"★".repeat(item.stars)}{"☆".repeat(5 - item.stars)}
              </div>
              <p className="text-gray-100 font-semibold inline">{item.name}</p>
              <span className="text-gray-500"> - {item.tag}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default userTestimonal;
