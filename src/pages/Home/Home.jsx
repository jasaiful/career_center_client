import Banner from "../../components/Banner";
import BrowseJobs from "../../components/BrowseJobs";
import Events from "../../components/Events";
import HotJobs from "../../components/HotJobs";
import Testimonials from "../../components/Testimonials";
import UserGuideline from "../../components/UserGuideline";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrowseJobs></BrowseJobs>
            {/* <JobList></JobList> */}
            <Events></Events>
            <UserGuideline></UserGuideline>
            <HotJobs></HotJobs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;