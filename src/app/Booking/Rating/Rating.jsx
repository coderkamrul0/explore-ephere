import React from 'react';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { FaShare } from 'react-icons/fa6';


const Rating = () => {
    return (
      <div className="container p-4 mx-auto py-10 md:flex  justify-between items-center">
        <div className="flex items-center gap-5">
          <div className="flex">
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar> 
            <AiFillStar className="h-5 w-5 text-yellow-500 "></AiFillStar>
          </div>
          <p className="font-medium text-[#585555]">4.67 by 3 reviews</p>
        </div>
        <div className='flex gap-2'>
          <button className="btn tracking-widest bg-[#F0F3F6] px-8  hover:bg-green-500 rounded-3xl hover:text-white">
           <span><FaShare /></span> Share
          </button>
          <button className="btn tracking-widest bg-[#F0F3F6] px-8  hover:bg-green-500 rounded-3xl hover:text-white">
           <span><FaShare /></span> Reviews
          </button>
          <button className="btn tracking-widest bg-[#F0F3F6] px-8  hover:bg-green-500 rounded-3xl hover:text-white">
           <span><AiOutlineHeart /></span> Wishlist
          </button>
        </div>
      </div>
    );
};

export default Rating;