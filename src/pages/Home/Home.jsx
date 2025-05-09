import CommonBanner from "../Shared/CommonBanner/CommonBanner";
import Navbar from "../Shared/Navbar/Navbar";
import Services from "../../components/Services/Services";


const Home = () => {
    return (
        <div>
            <Navbar/>
            <CommonBanner/>
            <Services/>
        </div>
    );
};

export default Home;