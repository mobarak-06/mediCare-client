import React from "react";

const Services = () => {
  return (
    <div className="md:flex justify-around  font md:mt-32">
      <div className="w-80 md:w-full mt-8 md:mt-0">
        <img src="https://i.ibb.co.com/BV081b7K/5793.jpg" alt="" />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-[#0A0808] text-3xl md:text-4xl font-bold ">Our Services</h1>
        <p className="text-left  mt-5 text-[#3B3A3A] ">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <div className="flex justify-around mt-7 mb-12 border rounded-3xl border-gray-300 md:w-[558px]">
          <button className="  rounded-2xl px-4 md:px-6 py-2 md:py-4  text-sm md:text-[16px] bg-[#F7A582] font-semibold">
            Cavity Protection
          </button>
          <button className="rounded-2xl px-4 md:px-6 py-2 md:py-4  text-sm md:text-[16px] font-semibold">Cosmetic Dentisty</button>
          <button className="rounded-2xl px-4 md:px-6 py-2 md:py-4  text-sm md:text-[16px] font-semibold">Cosmetic Dentisty</button>
        </div>
        <img src="https://i.ibb.co.com/846gryxX/Rectangle-10.png" alt="" />
        <h2 className="text-[#0A0808] font-bold text-3xl mt-7">Electro Gastrology Therapy</h2>
        <p className="text-left  mt-5 text-[#3B3A3A]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Sed ut perspiciatis unde omnis iste natus error{" "}
        </p>
        <button className="btn text-[#F7A582] font-bold border-[#F7A582] mt-5 rounded-">More Details</button>
      </div>
    </div>
  );
};

export default Services;
