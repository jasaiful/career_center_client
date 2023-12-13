import Banner from "../../components/Banner";
import BrowseJobs from "../../components/BrowseJobs";
import Events from "../../components/Events";
import UserGuideline from "../../components/UserGuideline";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrowseJobs></BrowseJobs>
            {/* <JobList></JobList> */}
            <Events></Events>
            <UserGuideline></UserGuideline>
            
        </div>
    );
};

export default Home;