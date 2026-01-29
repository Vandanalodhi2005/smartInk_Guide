import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import FeatureIcons from "../components/sections/FeatureIcons";
import AboutSection from "../components/sections/AboutSection";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ShopByCategory from "../components/sections/ShopByCategory";
import Commitment from "../components/sections/Commitment";
import Values from "../components/sections/Values";
import CTA from "../components/sections/CTA";
import ImportantNotice from "../components/sections/ImportantNotice";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureIcons />
      <AboutSection />
      <WhyChooseUs />
      <ShopByCategory />
      <Commitment />
      <Values />
      <CTA />
      <ImportantNotice />
      <Footer />
    </>
  );
};

export default Home;
