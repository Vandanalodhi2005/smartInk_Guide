import AboutHero from '../components/about/AboutHero/AboutHero';
import AboutStats from '../components/about/AboutStats/AboutStats';
import AboutWhoWeAre from '../components/about/AboutWhoWeAre/AboutWhoWeAre';
import AboutOffers from '../components/about/AboutOffers/AboutOffers';
import AboutCommitment from '../components/about/AboutCommitment/AboutCommitment';
import AboutWhyChoose from '../components/about/AboutWhyChoose/AboutWhyChoose';
import AboutVisionValues from '../components/about/AboutVisionValues/AboutVisionValues';
import AboutThankYou from '../components/about/AboutThankYou/AboutThankYou';
import '../styles/pages.css';
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const AboutUs = () => {
  return (
    <motion.div
      className="about-us-page"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="about-us-container">
        <motion.div variants={itemVariants}><AboutHero /></motion.div>
        <motion.div variants={itemVariants}><AboutWhoWeAre /></motion.div>
        <motion.div variants={itemVariants}><AboutOffers /></motion.div>
        <motion.div variants={itemVariants}><AboutCommitment /></motion.div>
        <motion.div variants={itemVariants}><AboutWhyChoose /></motion.div>
        <motion.div variants={itemVariants}><AboutVisionValues /></motion.div>
        <motion.div variants={itemVariants}><AboutThankYou /></motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;


