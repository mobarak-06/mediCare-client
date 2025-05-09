import React from "react";

const CommonBanner = () => {
  return (
    <div className="bg-[url(public/resources/bannerImg.png)] w-full h-screen md:h-[700px]  flex justify-between px-10 md:px-32 font">
      <div className="  md:flex md:justify-center md:items-center text-center md:text-left">
        <div className="mt-8 md:mt-0">
        <h2 className="text-[#F3F3F3] text-3xl md:text-5xl lg:text-7xl font-bold mb-10  md:mb-5">
          Your Best Medical <br /> Help Center
        </h2>
        <p className="text-[#F3F3F3] md:text-2xl  mb-7">
          Lorem Ipsum is simply dummy text they are printing typesetting has
          been the industry’s stardard.
        </p>
        <button className="btn bg-[#f7a582] hover:bg-[#ec7063] border-[#f7a582] text-[#F3F3F3]">
          All Service
        </button>
        </div>
        <div className=" md:w-3xl ">
            <img src="public/resources/Doctors-pana.png" alt="" />
        </div>
      </div>
      {/* effect */}
      <p className="bg-[url(public/resources/Vector.png)] md:w-60 md:h-60 absolute left-0 top-0"></p>
    </div>
  );
};

export default CommonBanner;
