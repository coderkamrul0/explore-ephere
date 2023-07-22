"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

const Banner = () => {
  return (
    <div>
      <Swiper navigation={true} autoplay={{ delay: 3000 }} loop={true} modules={[Navigation, Autoplay]} className="mySwiper">
        <SwiperSlide>
          <div
            className="h-[90vh] items-center"
            style={{
              backgroundImage: `url('https://i.ibb.co/5TrZ5qG/bannar-bg-1.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="max-w-screen-xl mx-auto flex items-center h-full  px-3 md:px-0">
              <div className="  ">
                <p className="bg-[#F7921E] mb-[-20px] py-2 px-4 inline-block text-white font-bold -rotate-12">Tour & Travels</p>
                <h1 className="text-7xl font-bold text-white">Tour Travel & <br /> Adventure Camping</h1>
                <p className="font-semibold text-gray-300 py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nulla
                  quae minima tenetur quia eveniet eos!
                </p>
                <button className="bg-[#63AB45] text-white py-4 px-6 font-bold rounded-md hover:bg-white hover:text-[#63AB45]">Lets Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[90vh] items-center"
            style={{
              backgroundImage: `url('https://i.ibb.co/KK51y93/pexels-elias-strale-7438459.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="max-w-screen-xl mx-auto flex items-center h-full  px-3 md:px-0">
              <div className="  ">
                <p className="bg-[#F7921E] mb-[-20px] py-2 px-4 inline-block text-white font-bold -rotate-12">Tour & Travels</p>
                <h1 className="text-7xl font-bold text-white">Your Journey Begins Here</h1>
                <p className="font-semibold text-gray-300 py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nulla
                  quae minima tenetur quia eveniet eos!
                </p>
                <button className="bg-[#63AB45] text-white py-4 px-6 font-bold rounded-md hover:bg-white hover:text-[#63AB45]">Lets Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[90vh] items-center"
            style={{
              backgroundImage: `url('https://i.ibb.co/D4dCX7B/pexels-1178784.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="max-w-screen-xl mx-auto flex items-center h-full  px-3 md:px-0">
              <div className="  ">
                <p className="bg-[#F7921E] mb-[-20px] py-2 px-4 inline-block text-white font-bold -rotate-12">Tour & Travels</p>
                <h1 className="text-7xl font-bold text-white">Tour Travel & <br /> Adventure Camping</h1>
                <p className="font-semibold text-gray-300 py-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nulla
                  quae minima tenetur quia eveniet eos!
                </p>
                <button className="bg-[#63AB45] text-white py-4 px-6 font-bold rounded-md hover:bg-white hover:text-[#63AB45]">Lets Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
