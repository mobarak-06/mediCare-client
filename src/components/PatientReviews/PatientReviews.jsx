import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import ReviewCard from "../ReviewCard/ReviewCard";
import { useEffect, useState } from "react";
import './swiperCustomNavigation.css'
const PatientReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/patientReview`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="font mt-8 md:mt-32">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A0808]">
          What Our Patients Says
        </h2>
        <p className="text-[#3B3A3A] text-lg mt-4 md:mt-5">
          Hear from our patients about their experiences with our care. Their
          words reflect our commitment to comfort, professionalism, and
          compassionate service. We believe that the best measure of our care
          comes directly from those we serve.
        </p>
      </div>
      <div className="mt-10 md:mt-12">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide>
              <ReviewCard key={index} review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PatientReviews;
