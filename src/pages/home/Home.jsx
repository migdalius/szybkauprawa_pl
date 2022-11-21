import Navigation from "../../components/navigation/Navigation";
import Hero from "../../components/hero/Hero";
import JustWater from "../../components/justwater/JustWater";
import Gallery from "../../components/gallery/Gallery";
import TopProduct from "../../components/topproduct/TopProduct";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <JustWater />
      <Gallery />
      <TopProduct />
      <Footer />
    </div>
  );
};

export default Home;
