import '../styles/PolicyPages.css';

const ShippingPolicy = () => {
  return (
    <div className="policy-page-wrapper">
      <main className="policy-main-content">
        {/* Hero Section */}
        <div className="policy-hero redesigned-hero">
          <div className="policy-hero-content">
            <h1>Shipping Policy</h1>
            <p className="last-updated">Last Updated: January 26, 2026</p>
            <p className="intro-text">
              Fast, reliable shipping across the US and Canada. We're committed to getting your
              printing supplies to you quickly and safely.
            </p>
          </div>
        </div>

        <div className="policy-content-container redesigned-content">
          {/* Quick Info Cards */}
          <div className="policy-info-cards redesigned-cards">
            <div className="policy-info-card redesigned-card" style={{ animationDelay: '0.1s' }}>
              <div className="icon-wrapper">🚀</div>
              <h3>1-2 Day Processing</h3>
              <p>Orders are processed and shipped within 1–2 business days</p>
            </div>

            <div className="policy-info-card redesigned-card" style={{ animationDelay: '0.2s' }}>
              <div className="icon-wrapper">📦</div>
              <h3>Secure Packaging</h3>
              <p>All items are carefully packaged to ensure safe delivery</p>
            </div>

            <div className="policy-info-card redesigned-card" style={{ animationDelay: '0.3s' }}>
              <div className="icon-wrapper">📍</div>
              <h3>Track Your Order</h3>
              <p>Receive tracking information via email once shipped</p>
            </div>

            <div className="policy-info-card redesigned-card" style={{ animationDelay: '0.4s' }}>
              <div className="icon-wrapper">🚚</div>
              <h3>Trusted Carriers</h3>
              <p>USPS, UPS, FedEx, and Canada Post</p>
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="policy-content-card">
            <section className="policy-section">
              <h2>Shipping Locations</h2>
              <div className="feature-grid redesigned-grid">
                <div className="feature-item redesigned-feature">
                  <h4>🇺🇸 United States</h4>
                  <p>All 50 states including Alaska and Hawaii</p>
                </div>
                <div className="feature-item redesigned-feature">
                  <h4>🇨🇦 Canada</h4>
                  <p>All provinces (excluding remote regions)</p>
                </div>
              </div>
              <p className="policy-note">
                We currently do not ship internationally outside the United States and Canada.
              </p>
            </section>

            <section className="policy-section">
              <h2>Processing Time</h2>
              <p>Orders are typically processed within <strong>1–2 business days</strong>.</p>
              <ul className="redesigned-list">
                <li>Order verification and payment confirmation</li>
                <li>Secure packaging of your items</li>
                <li>Quality checks to ensure accuracy</li>
                <li>Preparation for carrier pickup</li>
              </ul>
              <p className="policy-note">
                Orders placed on weekends or holidays will be processed on the next business day.
                Processing times may vary during peak seasons.
              </p>
            </section>

            <section className="policy-section">
              <h2>Delivery Timeframes</h2>
              <p>Delivery times depend on your location, product availability, and carrier operations.</p>
              <div className="feature-grid redesigned-grid">
                <div className="feature-item redesigned-feature">
                  <h4>🇺🇸 United States</h4>
                  <p>Standard Shipping: 3–7 business days</p>
                  <p>Expedited Shipping: 2–4 business days (when available)</p>
                </div>
                <div className="feature-item redesigned-feature">
                  <h4>🇨🇦 Canada</h4>
                  <p>Standard Shipping: 5–10 business days</p>
                  <p>Expedited Shipping: 3–7 business days (when available)</p>
                </div>
              </div>
              <p className="policy-note">
                Delivery estimates may vary due to weather, carrier delays, or other unforeseen circumstances.
              </p>
            </section>

            <section className="policy-section">
              <h2>Shipping Costs</h2>
              <ul className="redesigned-list">
                <li>Total weight of your items</li>
                <li>Shipping destination</li>
                <li>Current carrier rates</li>
                <li>Selected shipping method</li>
              </ul>
              <p className="policy-note">
                Free shipping may be available during special promotions. Eligibility will be clearly displayed at checkout.
              </p>
            </section>

            <section className="policy-section">
              <h2>Shipping Carriers</h2>
              <div className="feature-grid redesigned-grid">
                <div className="feature-item redesigned-feature">📮 USPS – United States Postal Service</div>
                <div className="feature-item redesigned-feature">📦 UPS – United Parcel Service</div>
                <div className="feature-item redesigned-feature">🚚 FedEx – Federal Express</div>
                <div className="feature-item redesigned-feature">🇨🇦 Canada Post – For Canadian orders</div>
              </div>
            </section>

            <section className="policy-section">
              <h2>Order Tracking</h2>
              <ul className="redesigned-list">
                <li>Your unique tracking number</li>
                <li>Carrier name and contact info</li>
                <li>Direct link to track your package</li>
                <li>Estimated delivery date</li>
              </ul>
              <p className="policy-note">
                Tracking updates may take up to 24 hours to appear after carrier pickup.
              </p>
            </section>

            <section className="policy-section">
              <h2>Address Accuracy</h2>
              <ul className="redesigned-list">
                <li>Delays caused by incorrect addresses</li>
                <li>Packages delivered to wrong locations</li>
                <li>Returned shipments due to incomplete information</li>
              </ul>
              <p className="policy-note">
                If a package is returned due to an incorrect address, reshipping fees may apply.
              </p>
            </section>

            <section className="policy-section">
              <h2>Lost or Stolen Packages</h2>
              <ul className="redesigned-list">
                <li>Check with neighbors or building management</li>
                <li>Wait 24–48 hours (packages sometimes scanned early)</li>
                <li>Contact the carrier directly using your tracking number</li>
                <li>Reach out to our support team for assistance</li>
              </ul>
              <p className="policy-note">
                While we cannot guarantee replacement, we'll help investigate and resolve the issue.
              </p>
            </section>

            <section className="policy-section">
              <h2>Damaged Shipments</h2>
              <ul className="redesigned-list">
                <li>Contact us within 48 hours of delivery</li>
                <li>Include photos of the product and packaging</li>
                <li>Provide your order number</li>
              </ul>
              <p>We'll review your case and provide next steps for resolution.</p>
            </section>

            <section className="policy-section">
              <h2>Customs & Duties (Canada)</h2>
              <ul className="redesigned-list">
                <li>Import fees and customs duties</li>
                <li>Provincial and federal taxes</li>
                <li>Brokerage fees (depending on carrier)</li>
              </ul>
              <p className="policy-note">
                These charges are the customer's responsibility and are not included in product or shipping costs.
              </p>
            </section>

            {/* Contact Section */}
            <div className="contact-info-box contact-section">
              <h3>Questions About Shipping?</h3>
              <p>📧 Email: <a href="mailto:support@smartinkguide.com">support@smartinkguide.com</a></p>
              <p>🌐 Website: <a href="https://www.smartinkguide.com">www.smartinkguide.com</a></p>
              <p>We aim to respond promptly during standard business hours.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShippingPolicy;
