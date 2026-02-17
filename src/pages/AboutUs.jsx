import { motion } from 'framer-motion';
import {
  ShieldCheck, Users, Globe, Award,
  ArrowRight, Printer, Zap, Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-page-wrapper">
      {/* Hero Section */}
      <section className="about-hero-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-badge">
            <Globe size={16} />
            Global Printing Solutions
          </div>
          <h1 className="about-title">
            Empowering Your <br /> Creative Work.
          </h1>
          <p className="about-subtitle">
            SmartInk Guide isn't just a store; we are your partners in productivity.
            Delivering premium ink, toner, and expert advice to keeps your business moving forward.
          </p>
        </motion.div>
      </section>

      {/* Stats Section (Floating) */}
      <div className="about-stats-container">
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="stat-card-premium">
            <span className="stat-value">50k+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat-card-premium">
            <span className="stat-value">120+</span>
            <span className="stat-label">Brands Supported</span>
          </div>
          <div className="stat-card-premium">
            <span className="stat-value">24/7</span>
            <span className="stat-label">Expert Support</span>
          </div>
          <div className="stat-card-premium">
            <span className="stat-value">99%</span>
            <span className="stat-label">Satisfaction Rate</span>
          </div>
        </motion.div>
      </div>

      {/* Story Section */}
      <section className="story-section">
        {/* Block 1: Who We Are */}
        <div className="story-block">
          <motion.div
            className="story-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-blue-600 font-bold mb-4 uppercase tracking-wider text-sm">
              <Users size={18} />
              Who We Are
            </div>
            <h2>More Than Just Ink.</h2>
            <p>
              SmartInk Guide was born from a simple frustration: the confusion of finding the right supplies for your printer.
              What started as a small guide has grown into a comprehensive platform for all things printing.
            </p>
            <p>
              We believe that quality shouldn't be complicated. Our team of experts verifies every product to ensure it meets our strict standards for color accuracy, yield, and reliability.
            </p>

            <div className="story-feature-list">
              <div className="story-feature">
                <ShieldCheck className="feature-icon" />
                Verified Compatibility
              </div>
              <div className="story-feature">
                <Heart className="feature-icon" />
                Customer-First Approach
              </div>
            </div>
          </motion.div>

          <motion.div
            className="story-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600"
              alt="Team at work"
            />
          </motion.div>
        </div>

        {/* Block 2: Our Vision */}
        <div className="story-block reverse">
          <motion.div
            className="story-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-blue-600 font-bold mb-4 uppercase tracking-wider text-sm">
              <Zap size={18} />
              Our Vision
            </div>
            <h2>Innovation in Every Drop.</h2>
            <p>
              The printing landscape is changing. From eco-friendly toners to high-definition smart inks, we are at the forefront of this evolution.
              Our vision is to make sustainable, high-quality printing accessible to everyone—from the home office to the enterprise.
            </p>
            <p>
              We aren't just selling cartridges; we're enabling businesses to print their contracts, artists to print their portfolios, and families to print their memories.
            </p>
          </motion.div>

          <motion.div
            className="story-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600"
              alt="Office innovation"
            />
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="section-header">
          <h2>Our Core Values</h2>
          <p className="text-slate-500 text-lg">
            Built on a foundation of trust, quality, and community.
          </p>
        </div>

        <div className="values-grid">
          <motion.div
            className="value-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="value-icon-box">
              <Award size={28} />
            </div>
            <h3>Premium Quality</h3>
            <p>We never compromise. Every cartridge is tested to ensure OEM-level performance.</p>
          </motion.div>

          <motion.div
            className="value-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="value-icon-box">
              <ShieldCheck size={28} />
            </div>
            <h3>100% Transparency</h3>
            <p>No hidden costs. No confusing specs. We tell you exactly what you're buying.</p>
          </motion.div>

          <motion.div
            className="value-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="value-icon-box">
              <Globe size={28} />
            </div>
            <h3>Sustainability</h3>
            <p>We champion eco-friendly printing solutions and recycling programs.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Ready to Upgrade Your Print Game?</h2>
          <p className="text-blue-200 text-lg mb-8">
            Join thousands of satisfied customers who trust SmartInk Guide for their daily printing needs.
          </p>
          <Link to="/printers" className="cta-btn">
            Explore Our Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
