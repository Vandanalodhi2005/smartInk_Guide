import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiMapPin, FiMail, FiGlobe } from 'react-icons/fi';
import './Footer.css';
const logo = "/PrintsCartslogo.png";

const Footer = () => {
  const [trackId, setTrackId] = useState('');
  const navigate = useNavigate();

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (trackId.trim()) {
      navigate(`/track-order?id=${trackId.trim()}`);
      setTrackId('');
    }
  };

  return (
    <footer className="footer-enhanced">
      <div className="footer-container">

        {/* Top Section: Logo & Newsletter/Track */}
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="inline-block mb-4">
              <motion.img
                src={logo}
                alt="SmartInk Guide"
                className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-90"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.9, scale: 1 }}
                whileHover={{ scale: 1.05, opacity: 1, filter: "brightness(0) invert(1)" }}
                transition={{ duration: 0.5 }}
              />
            </Link>
            <p className="footer-description text-gray-400 text-sm max-w-xs">
              Your trusted partner for high-quality, affordable printing solutions.
              Independent retailer dedicated to transparency and value.
            </p>
          </div>

          <div className="footer-track">
            <h5 className="text-white font-bold mb-3 text-sm">Track Your Order</h5>
            <form onSubmit={handleTrackSubmit} className="flex gap-2">
              <input
                type="text"
                placeholder="Order ID"
                className="bg-slate-800 text-white text-sm px-4 py-2.5 rounded-l-lg border border-slate-700 focus:outline-none focus:border-blue-500 w-full"
                value={trackId}
                onChange={(e) => setTrackId(e.target.value)}
              />
              <button type="submit" className="bg-[#20a1dd] hover:bg-[#175674] text-white px-4 py-2.5 rounded-r-lg transition-colors font-medium">
                Track
              </button>
            </form>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Main Links Grid */}
        <div className="footer-grid">

          {/* Column 1: Shop */}
          <div className="footer-col">
            <h4 className="footer-heading">Shop & Products</h4>
            <ul className="footer-links">
              <li><Link to="/printers">Shop Printers</Link></li>
              <li><Link to="/ink-toner">Ink & Toner Cartridges</Link></li>
              <li><Link to="/buying-guide">Buying Guide</Link></li>
              <li><Link to="/guides-and-resources">Guides & Resources</Link></li>
            </ul>
          </div>

          {/* Column 2: Support */}
          <div className="footer-col">
            <h4 className="footer-heading">Support & Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Support</Link></li>
              <li><Link to="/faqs">Help Center / FAQs</Link></li>
              <li><Link to="/track-order">Order Status</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="footer-col">
            <h4 className="footer-heading">Legal & Policies</h4>
            <ul className="footer-links two-col-mobile">
              <li><Link to="/shipping-policy">Shipping Policy</Link></li>
              <li><Link to="/refund-return-policy">Returns & Refunds</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link to="/cookie-policy">Cookie Policy</Link></li>
              <li><Link to="/do-not-sell">Do Not Sell My Info</Link></li>
              <li><Link to="/accessibility">Accessibility</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
              <li><Link to="/consumer-rights">Consumer Rights</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <FiMapPin className="icon" />
                <span>30 N GOULD STREET SUITE R, SHERIDAN, WY 82801</span>
              </li>
              <li>
                <FiMail className="icon" />
                <a href="mailto:support@smartinkguide.com">support@smartinkguide.com</a>
              </li>
              <li>
                <FiGlobe className="icon" />
                <a href="https://www.smartinkguide.com">www.smartinkguide.com</a>
              </li>
            </ul>
            <p className="response-time">We typically respond within 24 business hours.</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Smart Ink Guide. All rights reserved.</p>
          <p className="independent-notice">Independent Retailer | Not affiliated with printer manufacturers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
