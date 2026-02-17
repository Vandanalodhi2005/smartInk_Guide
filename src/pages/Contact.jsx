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
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-semibold mb-6 backdrop-blur-sm">
            24/7 Support
          </span>
          <h1 className="contact-hero-title">Get in Touch</h1>
          <p className="contact-hero-subtitle">
            Have questions about your order or need product advice? Our team is ready to help you optimize your printing experience.
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
            <h2 className="text-2xl font-bold mb-8 text-white">Contact Information</h2>

            <div className="space-y-8">
              <div className="info-item-premium">
                <div className="info-icon-wrapper">
                  <MapPin size={24} />
                </div>
                <div className="info-text">
                  <h3>Mailing Address</h3>
                  <p>Prints Carts<br />7181 Beacon Dr 15<br />Reno, NV 89506<br />United States</p>
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
                  <p>We aim to respond to all inquiries within 24 hours during business days.</p>
                </div>
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          {/* Right Panel: Form */}
          <div className="contact-form-panel">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Send a Message</h2>
            <p className="text-slate-500 mb-8 text-sm">Fill out the form below and we'll get back to you shortly.</p>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="form-group-premium">
                  <label className="form-label-premium">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="John Doe" className="form-input-premium" required />
                </div>
                <div className="form-group-premium">
                  <label className="form-label-premium">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" placeholder="john@example.com" className="form-input-premium" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="form-group-premium">
                  <label className="form-label-premium">Phone (Optional)</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="form-input-premium" />
                </div>
                <div className="form-group-premium">
                  <label className="form-label-premium">Order Number</label>
                  <input type="text" placeholder="#12345" className="form-input-premium" />
                </div>
              </div>

              <div className="form-group-premium">
                <label className="form-label-premium">Subject <span className="text-red-500">*</span></label>
                <select className="form-input-premium cursor-pointer">
                  <option>General Question</option>
                  <option>Order Issue</option>
                  <option>Technical Support</option>
                  <option>Return / Refund</option>
                </select>
              </div>

              <div className="form-group-premium">
                <label className="form-label-premium">Message <span className="text-red-500">*</span></label>
                <textarea rows="5" placeholder="How can we help you?" className="form-input-premium resize-none" required></textarea>
              </div>

              <button type="submit" className="submit-btn-premium">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
