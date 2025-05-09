import React from "react";

const Services = () => {
  return (
    <div className="flex justify-around px-10 md:px-32 font md:mt-32">
      <div>
        <img src="https://i.ibb.co.com/BV081b7K/5793.jpg" alt="" />
      </div>
      <div className="w-1/2">
        <h1 className="text-[#0A0808] text-4xl font-bold">Our Services</h1>
        <p className="text-left w-1/2 mt-5 text-[#3B3A3A]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <div className="flex justify-around mt-7 mb-12 border rounded-3xl border-gray-300 w-[558px]">
          <button className="btn bg-[#F7A582] px-7 py-4">
            Cavity Protection
          </button>
          <button className="btn">Cosmetic Dentisty</button>
          <button className="btn">Cosmetic Dentisty</button>
        </div>
        <img src="https://i.ibb.co.com/846gryxX/Rectangle-10.png" alt="" />
        <h2 className="text-[#0A0808] font-bold text-3xl mt-7">Electro Gastrology Therapy</h2>
        <p className="text-left w-1/2 mt-5 text-[#3B3A3A]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Sed ut perspiciatis unde omnis iste natus error{" "}
        </p>
      </div>
    </div>
  );
};

export default Services;
