import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer-minimal">
        <div className="footer-minimal-container">
          <div className="footer-minimal-content">
            <div className="footer-left">
              <span className="footer-copyright">
                &copy; {new Date().getFullYear()} Prints Carts. All rights reserved.
              </span>
            </div>
            <div className="footer-right">
              <Link to="/printers">Printers</Link>
              <span className="separator">|</span>
              <Link to="/ink-toner">Ink & Toner</Link>
              <span className="separator">|</span>
              <Link to="/faqs">FAQs</Link>
              <span className="separator">|</span>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .footer-minimal {
          background: linear-gradient(135deg, #0f3d91, #0b2c66);
          color: #fff;
          padding: 24px 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-minimal-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .footer-minimal-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-left {
          display: flex;
          align-items: center;
        }

        .footer-copyright {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
        }

        .footer-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .footer-right a {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-right a:hover {
          color: #fff;
        }

        .separator {
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .footer-minimal-content {
            flex-direction: column;
            text-align: center;
          }

          .footer-right {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
