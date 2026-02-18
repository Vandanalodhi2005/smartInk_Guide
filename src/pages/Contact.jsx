import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageSquare, Send, Globe } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page-wrapper">
      {/* Hero Section */}
      <section className="contact-hero-premium">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 border border-secondary/30 text-blue-100 text-sm font-semibold mb-6 backdrop-blur-sm">
            CONTACT US
          </span>
          <h1 className="contact-hero-title">Get in Touch with Smart Ink Guide</h1>
          <p className="contact-hero-subtitle">
            Have a question about a product, order, or compatibility? <br />
            We’re here to help. Reach out to us and our team will respond as soon as possible.
          </p>
        </motion.div>
      </section>

      {/* Main Content Card */}
      <div className="contact-content-container">
        <motion.div
          className="contact-card-premium"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Left Panel: Contact Info */}
          <div className="contact-info-panel">
            <h2 className="text-2xl font-bold mb-8 text-white">Business Contact Information</h2>

            <div className="space-y-8">
              <div className="info-item-premium">
                <div className="info-icon-wrapper">
                  <MapPin size={24} />
                </div>
                <div className="info-text">
                  <h3>Smart Ink Guide</h3>
                  <p>30 N GOULD STREET SUITE R<br />SHERIDAN, WY 82801<br />United States</p>
                </div>
              </div>

              <div className="info-item-premium">
                <div className="info-icon-wrapper">
                  <Mail size={24} />
                </div>
                <div className="info-text">
                  <h3>Email Support</h3>
                  <p>support@smartinkguide.com</p>
                </div>
              </div>

              <div className="info-item-premium">
                <div className="info-icon-wrapper">
                  <Globe size={24} />
                </div>
                <div className="info-text">
                  <h3>Website</h3>
                  <p>www.smartinkguide.com</p>
                </div>
              </div>

              <div className="info-item-premium">
                <div className="info-icon-wrapper">
                  <MessageSquare size={24} />
                </div>
                <div className="info-text">
                  <h3>Response Time</h3>
                  <p>We typically respond within 24 business hours.</p>
                </div>
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          {/* Right Panel: Form */}
          <div className="contact-form-panel">
            <h2 className="text-2xl font-bold text-primary mb-2">Send a Message</h2>
            <p className="text-muted mb-8 text-sm">Fill out the form below and we'll get back to you shortly.</p>

            <form className="space-y-5">

              <p className="text-sm font-semibold text-primary mb-2">Use the contact form below to reach our support team.</p>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="form-group-premium">
                  <label className="form-label-premium">Full Name</label>
                  <input type="text" placeholder="(Enter your name)" className="form-input-premium" required />
                </div>
                <div className="form-group-premium">
                  <label className="form-label-premium">Email Address</label>
                  <input type="email" placeholder="(Enter your email)" className="form-input-premium" required />
                </div>
              </div>

              <div className="form-group-premium">
                <label className="form-label-premium">Phone (Optional)</label>
                <input type="tel" placeholder="(Enter your phone number)" className="form-input-premium" />
              </div>

              <div className="form-group-premium">
                <label className="form-label-premium">Subject</label>
                <select className="form-input-premium cursor-pointer">
                  <option>Order Inquiry</option>
                  <option>Product Question</option>
                  <option>Return Request</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group-premium">
                <label className="form-label-premium">Message</label>
                <textarea rows="5" placeholder="(Please provide order number if applicable and include detailed information so we can assist you efficiently.)" className="form-input-premium resize-none" required></textarea>
              </div>

              <button type="submit" className="submit-btn-premium">
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* ADDITIONAL INFO SECTIONS */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Support Availability */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">🕒 Support Availability</h3>
          <p className="text-muted mb-2">Our support team responds to inquiries during regular business hours.</p>
          <p className="font-semibold text-primary">Monday – Friday</p>
          <p className="font-semibold text-primary mb-2">9:00 AM – 6:00 PM (Business Days)</p>
          <p className="text-sm text-muted">Emails received outside business hours will be answered on the next business day.</p>
        </div>

        {/* Order Support */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">📦 Order Support</h3>
          <p className="text-muted mb-2">For faster assistance regarding an existing order, please include:</p>
          <ul className="list-disc list-inside text-muted text-sm space-y-1 mb-2">
            <li>Your order number</li>
            <li>The email address used at checkout</li>
            <li>A clear description of your request</li>
          </ul>
          <p className="text-sm text-muted">For return requests, please reference your order number in the subject line.</p>
        </div>

        {/* Customer Privacy */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">🔒 Customer Privacy</h3>
          <p className="text-muted">Your personal information is used only to respond to your inquiry.</p>
          <p className="text-muted">We do not sell or share customer information.</p>
          <p className="text-sm text-secondary mt-2">For more details, please review our Privacy Policy.</p>
        </div>

        {/* Important Notice */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">⚠ Important Notice</h3>
          <p className="text-muted mb-2">Smart Ink Guide operates as an independent online retailer.</p>
          <p className="text-sm text-muted mb-2">We are not affiliated with or endorsed by printer manufacturers unless explicitly stated.</p>
          <p className="text-sm text-muted">If your inquiry relates to a manufacturer warranty claim, we may guide you to contact the manufacturer directly where applicable.</p>
        </div>

      </div>

      {/* WE'RE HERE TO HELP */}
      <section className="py-12 bg-blue-50 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary mb-4">🤝 We’re Here to Help</h2>
          <p className="text-muted mb-6">At Smart Ink Guide, we value clear communication and customer satisfaction. Whether you need help choosing the right cartridge or tracking your order, our team is ready to assist.</p>
          <p className="text-lg font-medium text-primary">📧 support@smartinkguide.com</p>
          <p className="text-sm text-muted mt-1">📍 30 N GOULD STREET SUITE R, SHERIDAN, WY 82801</p>
        </div>
      </section>

    </div>
  );
};

export default Contact;
