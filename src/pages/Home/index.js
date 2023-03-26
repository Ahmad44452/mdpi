import './styles.scss';

import Navbar from "../../components/Navbar";
import HomeHeader from "../../components/Home/Header";
import HomeSlideShow from "../../components/Home/Slideshow";
import SocialsBox from "../../components/Home/SocialsBox";
import JournalNavigation from "../../components/Home/JournalNavigation";
import SensorsIntro from "../../components/Home/SensorsIntro";
import LatestArticles from "../../components/Home/LatestArticles/LatestArticles";
import EmailAlert from "../../components/Home/EmailAlert";
import Newsbox from "../../components/Home/Newsbox";
import Footer from "../../components/Footer";


const Home = () => {
  return <>
    <Navbar />
    <HomeHeader />
    <div className="home">
      <HomeSlideShow />
      <SocialsBox />
      <div className="home__left">
        <JournalNavigation />
      </div>


      <div className="home__center">
        <SensorsIntro />
        <LatestArticles />
      </div>

      <div className="home__right">
        <EmailAlert />
        <Newsbox />
        <img className="home__right--banner" src="/images/symmetryconferenceimg.png" />
      </div>
    </div>
    <Footer />
  </>
}

export default Home;