"use client"
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import recentNews from '../../../public/recentNews.json'
import SingleRecentNews from '../SingleRecentNews/SingleRecentNews';

const RecentNews = () => {

    console.log(recentNews);

    return (
        <div className='my-20 max-w-7xl mx-auto'>
            <div className='flex justify-between items-center'>
                <div className='my-10 space-y-6'>
                    <span className='text-green-500 bg-green-50 border px-4 py-2 rounded'>Recent News Feed</span>
                    <h1 className='text-5xl font-bold my-4'>Amazing News & Blog For <br /> Every Single Update</h1>
                </div>
                <button className='border px-5 py-4 bg-green-500 text-white font-bold rounded'>View More</button>
            </div>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >

                    {/* <SwiperSlide> */}
                    {
                        recentNews.map(news =>
                            <SwiperSlide key={news.id}>
                                <SingleRecentNews news={news}></SingleRecentNews>
                            </SwiperSlide>

                        )
                    }
                    
                </Swiper>
            </div>
        </div>
    );
};

export default RecentNews;