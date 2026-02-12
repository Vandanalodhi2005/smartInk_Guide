import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
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
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <Link to="/" className="inline-block mb-4">
               <img src={logo} alt="SmartInk Guide" className="h-12 md:h-24 w-auto object-contain brightness-0 invert opacity-90" />
            </Link>
            <p className="footer-description">
              Your trusted source for printers, ink, toner, and printing supplies.
              We're committed to providing quality products with transparent service.
            </p>
            
            {/* Track Order Widget */}
            <div className="mt-6 mb-6">
              <h5 className="text-white font-bold mb-2 text-sm">Track Your Order</h5>
              <form onSubmit={handleTrackSubmit} className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Enter Order ID" 
                  className="bg-slate-800 text-white text-sm px-3 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-blue-500 flex-1 w-full"
                  value={trackId}
                  onChange={(e) => setTrackId(e.target.value)}
                />
                <button type="submit" className="bg-[#60a5fa] hover:bg-[#3b82f6] text-white px-3 py-2 rounded-lg transition-colors">
                  <FiSearch />
                </button>
              </form>
            </div>

            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} SmartInk Guide. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/printers">Shop Printers</Link></li>
              <li><Link to="/ink-toner">Ink & Toner</Link></li>
              <li><Link to="/track-order">Track Order</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="footer-section">
            <h4 className="footer-section-title">Policies</h4>
            <ul className="footer-links">
              <li><Link to="/shipping-policy">Shipping Policy</Link></li>
              <li><Link to="/refund-return-policy">Returns & Refunds</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h4 className="footer-section-title">Legal</h4>
            <ul className="footer-links">
              <li><Link to="/cookie-policy">Cookie Policy</Link></li>
              <li><Link to="/do-not-sell">Do Not Sell</Link></li>
              <li><Link to="/accessibility">Accessibility</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>Made with care for our customers | Independent Retailer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
