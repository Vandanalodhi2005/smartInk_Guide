import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import '../styles/pages.css';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-us-page">
        <div className="about-us-container">
          <div className="about-hero">
            <h1 className="page-title">About Us – Prints Carts</h1>
            <h2 className="hero-subtitle">Your Reliable Destination for Printers & Printing Essentials</h2>
            <p className="hero-description">
              Prints Carts is an independent online retailer offering a curated selection of printers, 
              ink cartridges, toner, and everyday printing supplies. Our mission is to make shopping 
              for printing products simple, clear, and stress-free for individuals, homes, and small businesses.
            </p>
            <p>
              We understand that choosing the right printing products can sometimes feel overwhelming. 
              That's why we focus on accurate information, easy navigation, and responsive customer 
              assistance—so you can shop confidently and make informed decisions every time.
            </p>
          </div>

          <section className="who-we-are">
            <h2>Who We Are</h2>
            <p>
              Prints Carts was created with a straightforward goal: <strong>to provide reliable products 
              with transparent information and a smooth online shopping experience.</strong>
            </p>
            <p>
              We operate independently and are not directly affiliated with any printer manufacturer. 
              Our platform brings together a range of genuine-quality products sourced through trusted 
              channels so consumers can conveniently find what they need in one place.
            </p>
            <p>
              What sets us apart is our commitment to clarity, customer care, and consistent professionalism. 
              Whether you're restocking ink or upgrading your home printer, we aim to offer a straightforward 
              retail experience built around honesty and ease.
            </p>
          </section>

          <section className="what-we-offer">
            <h2>What We Offer</h2>
            <div className="offer-grid">
              <div className="offer-card">
                <div className="offer-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#e0f2fe"/>
                    <path d="M20 10L24 18H32L26 24L28 32L20 26L12 32L14 24L8 18H16L20 10Z" fill="#0f3d91"/>
                  </svg>
                </div>
                <h3>A Diverse Selection of Printing Essentials</h3>
                <p>
                  From compact home-use printers to office-ready machines, and from ink and toner to 
                  printer-friendly paper, Prints Carts provides a wide range of products to meet different 
                  printing needs.
                </p>
              </div>

              <div className="offer-card">
                <div className="offer-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#e0f2fe"/>
                    <path d="M24 16C20.69 16 18 18.69 18 22V26C18 29.31 20.69 32 24 32C27.31 32 30 29.31 30 26V22C30 18.69 27.31 16 24 16Z" fill="#0f3d91"/>
                  </svg>
                </div>
                <h3>Accurate Product Details</h3>
                <p>
                  We ensure that product descriptions, compatibility information, and specifications are 
                  presented clearly. This helps you choose the right items without confusion or uncertainty.
                </p>
              </div>

              <div className="offer-card">
                <div className="offer-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#e0f2fe"/>
                    <path d="M16 20H32V22H16V20Z" fill="#0f3d91"/>
                    <path d="M16 24H28V26H16V24Z" fill="#0f3d91"/>
                    <path d="M20 28H32V30H20V28Z" fill="#0f3d91"/>
                  </svg>
                </div>
                <h3>Convenient & Secure Shopping Experience</h3>
                <p>
                  Our website is designed for easy browsing, simple checkout, and secure payment processing. 
                  We use industry-standard practices to help protect your personal information.
                </p>
              </div>

              <div className="offer-card">
                <div className="offer-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#e0f2fe"/>
                    <circle cx="24" cy="20" r="4" stroke="#0f3d91" strokeWidth="2" fill="none"/>
                    <path d="M16 32C16 28 20 26 24 26C28 26 32 28 32 32" stroke="#0f3d91" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>Customer-Focused Assistance</h3>
                <p>
                  Our support team is available to help with product inquiries, order status updates, 
                  and basic questions about printing supplies. While we do not provide repair, setup, 
                  or troubleshooting services, we are always happy to assist with shopping-related questions.
                </p>
              </div>
            </div>
          </section>

          <section className="transparency-commitment">
            <h2>Our Commitment to Transparency</h2>
            <p>We value honesty in everything we do. This includes:</p>
            <ul className="transparency-list">
              <li>Clear communication</li>
              <li>Straightforward policies</li>
              <li>Accurate representation of all products</li>
              <li>Respect for customer privacy</li>
              <li>Independent retail operations</li>
            </ul>
            <p className="trademark-notice">
              All trademarks, brand names, and logos featured on our website belong to their respective 
              owners and are used strictly for identification purposes. We do not claim partnership, 
              endorsement, or manufacturer authorization unless explicitly stated.
            </p>
          </section>

          <section className="why-choose">
            <h2>Why Customers Choose Prints Carts</h2>
            <div className="choose-grid">
              <div className="choose-card">
                <h3>Dependable Shopping Experience</h3>
                <p>
                  We streamline the entire buying process—from browsing to checkout—so customers can 
                  enjoy a simple and reliable online shopping journey.
                </p>
              </div>
              <div className="choose-card">
                <h3>Trustworthy Product Listings</h3>
                <p>
                  We provide accurate details based on manufacturer specifications and verified product 
                  information.
                </p>
              </div>
              <div className="choose-card">
                <h3>Professional Customer Care</h3>
                <p>
                  Our priority is to provide helpful and timely responses to inquiries related to orders 
                  and product availability.
                </p>
              </div>
              <div className="choose-card">
                <h3>Independent Retail Approach</h3>
                <p>
                  You receive transparent information, unbiased listings, and a trustworthy retail environment.
                </p>
              </div>
            </div>
          </section>

          <section className="vision-values">
            <div className="vision">
              <h2>Our Vision</h2>
              <p>
                To be a dependable and customer-centered retailer that makes it easier for people to shop 
                for printing essentials with confidence, clarity, and convenience.
              </p>
              <p>
                We aim to consistently improve our website experience, expand our product selection, and 
                maintain the high standards of accuracy and professionalism that today's customers expect.
              </p>
            </div>

            <div className="values">
              <h2>Our Values</h2>
              <div className="values-grid">
                <div className="value-item">
                  <h3>Reliability</h3>
                  <p>We prioritize products and processes that support a smooth customer experience.</p>
                </div>
                <div className="value-item">
                  <h3>Clarity</h3>
                  <p>We focus on accurate product information and straightforward communication.</p>
                </div>
                <div className="value-item">
                  <h3>Integrity</h3>
                  <p>We operate with honesty and uphold strong retail and privacy standards.</p>
                </div>
                <div className="value-item">
                  <h3>Customer Respect</h3>
                  <p>We treat every interaction with care, professionalism, and courtesy.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="thank-you">
            <h2>Thank You for Choosing Prints Carts</h2>
            <p>
              We appreciate your trust in us. Whether you are shopping for home, school, or office needs, 
              our goal is to support you with a dependable and enjoyable shopping experience—every step of the way.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;

