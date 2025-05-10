import Navbar from "../Shared/Navbar/Navbar";
import Services from "../../components/Services/Services";
import InformationCard from "../../components/InformationCard/InformationCard";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import PatientReviews from "../../components/PatientReviews/PatientReviews";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <div className="px-10 md:px-32">
        <Services />
        <InformationCard />
        <PatientReviews />
        {/* <ReviewCard /> */}
      </div>
    </div>
  );
};

export default Home;
