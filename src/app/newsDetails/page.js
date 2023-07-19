import PostDetails from "@/components/newsDetailsComponent/PostDetails";
import React from "react";

const page = () => {
  return (
    <div className="pt-20">
      <div
        className="text-white bg-center bg-no-repeat bg-stone-500 bg-blend-multiply bg-cover h-[450px]"
        style={{
          backgroundImage:
            "url('https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-5.jpg')",
        }}
      >
        <div className="text-center p-32">
          <p className="text-3xl lg:text-5xl font-bold pb-4 pt-10">
            Things To See And Do When Visiting Japan
          </p>
          <p className="">Home / Adventure</p>
        </div>
      </div>
      <div className="flex">
        <div className="w-2/3">
          <PostDetails />
        </div>
        <div className="w-1/3"></div>
      </div>
    </div>
  );
};

export default page;
