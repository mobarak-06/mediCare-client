import { FaQuoteLeft } from "react-icons/fa6";

const ReviewCard = ({review}) => {
  console.log(review);
  const {image, name,profession, review:patientSay } = review;
  
  return (
    <div className="max-w-lg md:max-w-xl max-h-72 p-8 md:p-12  border-2 bg-gray-50 border-[#E6E6E6] rounded-2xl font">
      <div className="flex justify-between items-center"> 
        {/* avatar */}
       <div className="flex gap-4">
         <div className="avatar">
        <div className="w-16 rounded-full border-2 border-[#F7A582]">
          {
            image ? <img src={image}/> : <img src="https://i.ibb.co.com/Lhr1Nb9K/istockphoto-1300845620-612x612.jpg" alt="" />
          }
          {/* <img src={image || 'https://i.ibb.co.com/Lhr1Nb9K/istockphoto-1300845620-612x612.jpg'} /> */}
        </div>
      </div>
      {/* name and profession */}
      <div>
        <h3 className="font-bold text-xl text-[#3B3A3A] ">{name}</h3>
        <p className="text-[#6C6B6B] text-[16px]">{profession}</p>
      </div>
       </div>
      {/* icon */}
      <FaQuoteLeft size={50} color="#F7A582"/>
      </div>
      <div className="mt-4 text-lg text-[#6C6B6B]">
        <p>{patientSay}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
