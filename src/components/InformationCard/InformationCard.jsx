import { FaRegClock } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { LuPhoneOutgoing } from "react-icons/lu";
const InformationCard = () => {
  return (
    <div className="md:flex justify-between text-white font mt-11 md:mt-32">
      {/* opening hours */}
      <div className="w-96 h-48 bg-[#07332F] p-12 flex ">
        <div className="mr-4">
          <FaRegClock size={30} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Opening Hours</h2>
          <p className="text-xl mt-2">Open 9.00 am to 5.00pm </p>
          <p className="text-xl">Everyday</p>
        </div>
      </div>
      <div className="w-96 h-48 mt-4 md:mt-0 bg-[#F7A582]  p-12 flex ">
        <div className="mr-4">
          <GrLocation size={30} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Our Locations</h2>
          <p className="text-xl mt-2">Dhanmondi 17, Dhaka </p>
          <p className="text-xl"> -1200, Bangladesh</p>
        </div>
      </div>
      <div className="w-96 h-48 mt-4 md:mt-0 bg-[#07332F]  p-12 flex ">
        <div className="mr-4">
          <LuPhoneOutgoing size={30} />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="text-xl mt-2">+88 01750 00 00 00</p>
          <p className="text-xl">+88 01750 00 00 00</p>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
