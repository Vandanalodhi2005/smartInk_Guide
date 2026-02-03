import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-enhanced">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-heading">Prints Carts</h3>
            <p className="footer-description">
              Your trusted source for printers, ink, toner, and printing supplies.
              We're committed to providing quality products with transparent service.
            </p>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Prints Carts. All rights reserved.
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
