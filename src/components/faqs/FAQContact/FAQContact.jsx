import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import "./FAQContact.css";

const FAQContact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>

        <div className="contact-grid">
          {/* Phone */}
          <div className="contact-card">
            <div className="icon-wrap">
              <FaPhoneAlt />
            </div>
            <h3>Call Us</h3>
            <p>
              1-800-PRINTS <br />
              (1-800-774-6877)
            </p>
          </div>

          {/* Address */}
          <div className="contact-card">
            <div className="icon-wrap">
              <FaMapMarkerAlt />
            </div>
            <h3>Our Office</h3>
            <p>
              7181 Beacon Dr 15 <br />
              Reno, NV 89506 <br />
              United States
            </p>
          </div>

          {/* Email */}
          <div className="contact-card">
            <div className="icon-wrap">
              <FaEnvelope />
            </div>
            <h3>Email Support</h3>
            <p>support@smartinkguide.com</p>
          </div>
        </div>

        {/* Map */}
        <div className="map-container">
          <iframe
            title="Reno Location"
            src="https://www.google.com/maps?q=Reno,NV 89506&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default FAQContact;
