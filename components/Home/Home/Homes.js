import Footer from "../../Footer/Footer"
import Navbar from "../../Navbar/Navbar"
import Header from "../Header/Header"
import RecentJobs from "../RecentJobs/RecentJobs"
import TopCategory from "../TopCategory/TopCategory"

const Homes = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <RecentJobs />
            <TopCategory />
            <Footer />
        </div>
    );
};

export default Homes;