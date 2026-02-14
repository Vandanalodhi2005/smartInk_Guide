import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import ContactHero from '../components/contact/ContactHero/ContactHero';
import ContactForm from '../components/contact/ContactForm/ContactForm';
import ContactInfo from '../components/contact/ContactInfo/ContactInfo';
import '../styles/ContactPage.css';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <Navbar />
      <ContactHero />

      <main className="contact-main-content">
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-form-section"
        >
          <ContactForm />
        </motion.section>

        <motion.aside
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-info-section"
        >
          <ContactInfo />
        </motion.aside>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
