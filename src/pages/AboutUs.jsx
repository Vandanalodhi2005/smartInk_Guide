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
            Independent Online Retailer
          </div>
          <h1 className="about-title">
            About Smart Ink Guide
          </h1>
          <p className="about-subtitle">
            An independent online destination for printers, ink cartridges, toner, and printing essentials — helping customers across the United States make informed purchasing decisions.
          </p>
          <p className="about-subtitle mt-4">
            Smart Ink Guide operates as an independent e-commerce platform focused on simplifying the way individuals and businesses shop for printing technology.
          </p>
        </motion.div>
      </section>

      {/* Business Info Section */}
      <div className="about-stats-container">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 mobile-stats-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-primary flex items-center gap-2">
              <ShieldCheck className="text-secondary" /> Business Identity
            </h3>
            <p className="text-muted">Smart Ink Guide</p>
            <p className="text-muted text-sm">Independent Online Retail Platform</p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-primary flex items-center gap-2">
              <Globe className="text-secondary" /> Location
            </h3>
            <p className="text-muted">30 N GOULD STREET SUITE R</p>
            <p className="text-muted">SHERIDAN, WY 82801</p>
          </div>
        </motion.div>
      </div>

      {/* What We Offer Section */}
      <section className="story-section">
        {/* Block 1: What We Offer */}
        <div className="story-block">
          <motion.div
            className="story-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-secondary font-bold mb-4 uppercase tracking-wider text-sm">
              <Users size={18} />
              Our Products
            </div>
            <h2>What We Offer</h2>
            <p className="mb-4">
              Smart Ink Guide provides access to a wide range of office printing products designed to support home users, remote professionals, and business environments.
            </p>

            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-bold text-primary">🖨 Printers</h4>
                <p className="text-sm">Inkjet, laser, and multifunction printers designed for personal and professional use.</p>
              </div>
              <div>
                <h4 className="font-bold text-primary">🧴 Ink Cartridges</h4>
                <p className="text-sm">Original and compatible ink cartridges for popular printer models.</p>
              </div>
              <div>
                <h4 className="font-bold text-primary">🖤 Toner Cartridges</h4>
                <p className="text-sm">High-yield and standard toner solutions for laser printers.</p>
              </div>
              <div>
                <h4 className="font-bold text-primary">📄 Paper & Media</h4>
                <p className="text-sm">Everyday paper, specialty media, and photo printing supplies.</p>
              </div>
            </div>

          </motion.div>

          {/* Additional Offerings Right Side */}
          <motion.div
            className="story-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 mt-8 md:mt-0">
              <div>
                <h4 className="font-bold text-gray-900 text-lg">📠 Scanners</h4>
                <p className="text-gray-600">Document and portable scanners for efficient digital workflow.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">🔌 Accessories</h4>
                <p className="text-gray-600">Printer cables, replacement parts, and essential office accessories.</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-6">
                <h4 className="font-bold text-blue-800 mb-2">Confidence in Every Purchase</h4>
                <p className="text-sm text-blue-700">
                  We focus on providing clear product descriptions and compatibility information to help customers make confident purchasing decisions.
                </p>
              </div>

              {/* Brands Feature */}
              <div className="mt-8">
                <h4 className="font-bold text-gray-900 mb-3">Brands We Feature</h4>
                <p className="text-sm text-gray-600 mb-3">Products from widely recognized manufacturers:</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">HP®</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">Canon®</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">Epson®</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">Brother®</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-blue-600 font-bold mb-4 uppercase tracking-wider text-sm">
                <Award size={18} />
                Our Mission
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Simplify. Clarify. Supply.</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Our mission is to simplify the printing supply buying process. We understand that choosing the right printer or cartridge can be confusing. That’s why Smart Ink Guide emphasizes education, clarity, and practical guidance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-blue-500 font-bold">✓</span> Transparent product information
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-blue-500 font-bold">✓</span> Clear compatibility guidance
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-blue-500 font-bold">✓</span> Fair pricing & Reliable fulfillment
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="text-blue-500 font-bold">✓</span> Customer-focused service
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 h-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600"
                alt="Office Goal"
                className="rounded-2xl shadow-lg w-full object-cover h-[400px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="values-section">
        <div className="section-header">
          <h2>Who We Serve</h2>
          <p className="text-slate-500 text-lg">
            Smart Ink Guide supports a diverse customer base.
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
              <Heart size={28} />
            </div>
            <h3>Home Users & Students</h3>
            <p>Affordable and reliable printing solutions for everyday tasks.</p>
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
              <Globe size={28} />
            </div>
            <h3>Remote Professionals</h3>
            <p>Compact wireless printers and efficient ink options for home offices.</p>
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
              <Award size={28} />
            </div>
            <h3>Small & Growing Businesses</h3>
            <p>High-volume printers and toner solutions built for productivity.</p>
          </motion.div>
        </div>
      </section>

      {/* Shipping & Service Commitment */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Shipping & Service Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex gap-4">
              <div className="text-blue-500 text-2xl">🚚</div>
              <div>
                <h4 className="font-bold text-gray-900">Nationwide U.S. Shipping</h4>
                <p className="text-sm text-gray-600">We ship across the United States.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex gap-4">
              <div className="text-blue-500 text-2xl">📦</div>
              <div>
                <h4 className="font-bold text-gray-900">Order Tracking</h4>
                <p className="text-sm text-gray-600">Customers receive tracking details once their order ships.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex gap-4">
              <div className="text-blue-500 text-2xl">↩️</div>
              <div>
                <h4 className="font-bold text-gray-900">30-Day Return Policy</h4>
                <p className="text-sm text-gray-600">Eligible items may be returned within 30 days of delivery.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex gap-4">
              <div className="text-blue-500 text-2xl">🔒</div>
              <div>
                <h4 className="font-bold text-gray-900">Secure Transactions</h4>
                <p className="text-sm text-gray-600">All payments are processed through secure and encrypted systems.</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex gap-4">
              <div className="text-blue-500 text-2xl">📧</div>
              <div>
                <h4 className="font-bold text-gray-900">Responsive Email Support</h4>
                <p className="text-sm text-gray-600">Our support team is available to assist with product questions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Independent Retailer Disclosure */}
      <section className="py-12 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3 flex justify-center items-center gap-2"><ShieldCheck size={20} /> Independent Retailer Disclosure</h3>
          <p className="text-sm text-gray-600 mb-2">Smart Ink Guide is an independent online retailer. We are not affiliated with, endorsed by, or sponsored by HP®, Canon®, Epson®, Brother®, or any other manufacturer unless explicitly stated.</p>
          <p className="text-xs text-gray-500">All product names, logos, and trademarks are the property of their respective owners and are used for identification purposes only.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Have Questions?</h2>
          <p className="text-gray-600 mb-8">If you have questions about our products or need assistance with an order, please contact us.</p>
          <div className="space-y-2 text-lg text-gray-800 font-medium">
            <p>Smart Ink Guide</p>
            <p>30 N GOULD STREET SUITE R, SHERIDAN, WY 82801</p>
            <p>📧 support@smartinkguide.com</p>
            <p>🌐 www.smartinkguide.com</p>
          </div>
          <p className="mt-4 text-sm text-gray-500">We typically respond within 24 business hours.</p>
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
