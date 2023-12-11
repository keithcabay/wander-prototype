import Header from "../components/Header";
import WelcomeBox from "../components/Welcome";
import GetStarted from "../components/GetStarted";
import PreviewGallery from "../components/PreviewGallery";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <WelcomeBox />
      <GetStarted />
      <PreviewGallery />
      <Footer />
    </div>
  );
};

export default Home;
