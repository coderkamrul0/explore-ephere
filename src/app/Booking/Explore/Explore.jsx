import React from 'react';
import BookForm from './BookForm';
import image from "../../../../public/Booking/6.jpg";
import Image from 'next/image';
import Include from './Include';
import TourInfo from '../TourInfo/TourInfo';
import Deals from './Deals';
import Amenities from './Amenities';

const Explore = () => {
    return (
      <div className="container p-4 md:p-0 mx-auto py-10 md:flex gap-6">
        <div className=" w-full md:w-[60%]">
          <div className="">
            <h1 className="font-bold text-3xl text-black">Explore Tours</h1>
            <p className="text-[#5e5a5a] mt-3">
              Sed ut perspiciatis unde omniste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam, eaque ip quae
              abillo inventore veritatis et quasi architecto beatae vitae dicta
              sunt explicabo nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit.
            </p>
            <div className="my-7 grid grid-cols-2 gap-3">
              <div className="">
                <div className="mb-4">
                  <h1 className="font-bold text-3xl text-black">
                    Advance Facilities
                  </h1>
                  <p className="text-[#5e5a5a] mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="mb-4">
                  <h1 className="font-bold text-3xl text-black">Challenges</h1>
                  <p className="text-[#5e5a5a] mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <Image src={image} alt="image"></Image>
            </div>
          </div>
          <Include></Include>
          <Amenities></Amenities>
        </div>
        <div className="w-full md:w-[40%] ">
          <BookForm></BookForm>
          <TourInfo></TourInfo>
          <Deals></Deals>
        </div>
      </div>
    );
};

export default Explore;