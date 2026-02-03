import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import AboutHero from '../components/about/AboutHero/AboutHero';
import AboutWhoWeAre from '../components/about/AboutWhoWeAre/AboutWhoWeAre';
import AboutOffers from '../components/about/AboutOffers/AboutOffers';
import AboutCommitment from '../components/about/AboutCommitment/AboutCommitment';
import AboutWhyChoose from '../components/about/AboutWhyChoose/AboutWhyChoose';
import AboutVisionValues from '../components/about/AboutVisionValues/AboutVisionValues';
import AboutThankYou from '../components/about/AboutThankYou/AboutThankYou';
import '../styles/pages.css';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-us-page">
        <div className="about-us-container">
          <AboutHero />
          <AboutWhoWeAre />
          <AboutOffers />
          <AboutCommitment />
          <AboutWhyChoose />
          <AboutVisionValues />
          <AboutThankYou />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;

