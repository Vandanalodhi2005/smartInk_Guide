import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import ContactHero from '../components/contact/ContactHero/ContactHero';
import ContactForm from '../components/contact/ContactForm/ContactForm';
import ContactInfo from '../components/contact/ContactInfo/ContactInfo';
import '../styles/ContactPage.css';

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <Navbar />
      <ContactHero />

      <main className="contact-main-content">
        <section className="contact-form-section">
          <ContactForm />
        </section>

        <aside className="contact-info-section">
          <ContactInfo />
        </aside>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
