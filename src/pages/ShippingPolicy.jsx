import '../styles/PolicyPages.css';
import { Mail, MapPin, Globe } from 'lucide-react';

const ShippingPolicy = () => {
  return (
    <div className="policy-page-wrapper">
      <main className="policy-main-content">
        {/* Hero Section */}
        <div className="policy-hero">
          <div className="policy-hero-content">
            <h1>Shipping Policy</h1>
            <p className="last-updated">Effective Date: February 18, 2026</p>
            <p className="intro-text">
              This Shipping Policy explains how Smart Ink Guide processes, ships, and delivers orders placed through
              <a href="https://www.smartinkguide.com" className="text-blue-200 hover:text-white underline"> www.smartinkguide.com</a>.
              <br /><br />
              By placing an order, you agree to the terms outlined below.
            </p>
          </div>
        </div>

        <div className="policy-content-container">
          {/* Quick Info Cards - Kept for consistency */}
          <div className="policy-info-cards">
            <div className="policy-info-card" style={{ animationDelay: '0.1s' }}>
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3>Fast Processing</h3>
              <p>Orders processed within 1-2 business days</p>
            </div>

            <div className="policy-info-card" style={{ animationDelay: '0.2s' }}>
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 8h-3V4H3v16h18v-4h1c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM5 6h10v2H5V6zm14 10H5v-2h14v2zm0-4H5v-2h14v2z" />
                </svg>
              </div>
              <h3>Nationwide</h3>
              <p>Shipping within the United States</p>
            </div>

            <div className="policy-info-card" style={{ animationDelay: '0.3s' }}>
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
              </div>
              <h3>Tracking</h3>
              <p>Real-time updates via email</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="policy-content-card">

            {/* 1. Order Processing Time */}
            <section className="policy-section">
              <h2>1. Order Processing Time</h2>
              <p>All orders are processed within <strong>1–2 business days</strong>, excluding weekends and public holidays.</p>
              <ul>
                <li>Orders placed after business hours, on weekends, or federal holidays will be processed on the next business day.</li>
                <li>During high-demand periods, promotions, or peak seasons, processing times may be extended.</li>
              </ul>
              <p className="policy-note">If there is a significant delay in processing your order, we will notify you via email.</p>
            </section>

            {/* 2. Shipping Destinations */}
            <section className="policy-section">
              <h2>2. Shipping Destinations</h2>
              <p>Smart Ink Guide currently ships within the <strong>United States</strong>.</p>
              <ul>
                <li>We may restrict shipping to certain remote locations or P.O. Boxes (depending on carrier limitations).</li>
                <li>APO/FPO addresses are supported where available.</li>
              </ul>
              <p className="policy-note">International shipping is not currently available unless specifically stated at checkout.</p>
            </section>

            {/* 3. Shipping Methods & Estimated Delivery */}
            <section className="policy-section">
              <h2>3. Shipping Methods & Estimated Delivery</h2>
              <p>We partner with reputable national carriers. Estimated delivery timelines:</p>
              <div className="feature-grid">
                <div className="feature-item"><h4>Standard Shipping</h4><p>3–7 business days</p></div>
                <div className="feature-item"><h4>Expedited Shipping</h4><p>1–3 business days (if offered)</p></div>
              </div>
              <p className="mt-4">Delivery estimates begin after order processing is completed. Delivery times are estimates only and are not guaranteed.</p>
              <p className="policy-note">Smart Ink Guide is not liable for carrier-related delivery delays due to weather, natural disasters, or regional disruptions.</p>
            </section>

            {/* 4. Shipping Costs */}
            <section className="policy-section">
              <h2>4. Shipping Costs</h2>
              <p>Shipping costs are calculated at checkout based on:</p>
              <ul>
                <li>Order weight</li>
                <li>Shipping method</li>
                <li>Delivery destination</li>
              </ul>
              <p>Promotional free shipping may apply to qualifying orders. Shipping fees are non-refundable except where required by law or in cases of verified company error.</p>
            </section>

            {/* 5. Order Tracking */}
            <section className="policy-section">
              <h2>5. Order Tracking</h2>
              <p>Once your order ships, you will receive a confirmation email containing:</p>
              <ul>
                <li>Carrier name</li>
                <li>Tracking number</li>
                <li>Tracking link</li>
              </ul>
              <p>Customers are responsible for monitoring delivery status through the carrier’s tracking system.</p>
            </section>

            {/* 6. Risk of Loss & Title Transfer */}
            <section className="policy-section">
              <h2>6. Risk of Loss & Title Transfer</h2>
              <p>Ownership and risk of loss transfer to the customer once the order is delivered to the shipping carrier.</p>
              <p>Smart Ink Guide is not responsible for:</p>
              <ul>
                <li>Losses occurring after carrier acceptance</li>
                <li>Delivery delays caused by third-party carriers</li>
                <li>Damages caused during transit (subject to claims process)</li>
              </ul>
            </section>

            {/* 7. Incorrect Shipping Address */}
            <section className="policy-section">
              <h2>7. Incorrect Shipping Address</h2>
              <p>Customers are responsible for providing accurate shipping information.</p>
              <ul>
                <li>If an incorrect address is provided, contact us immediately before shipment.</li>
                <li>Once shipped, address changes may not be possible, and additional carrier fees may apply.</li>
              </ul>
              <p className="policy-note">Smart Ink Guide is not responsible for deliveries made to incorrectly provided addresses.</p>
            </section>

            {/* 8. Lost or Stolen Packages */}
            <section className="policy-section">
              <h2>8. Lost or Stolen Packages</h2>
              <p>If tracking confirms delivery but the package is not received:</p>
              <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-700">
                <li>Verify the shipping address</li>
                <li>Check with neighbors or building management</li>
                <li>Contact the carrier directly</li>
              </ol>
              <p className="mt-2">Smart Ink Guide is not liable for stolen packages or packages lost after confirmed delivery. However, we may assist in filing a carrier claim where appropriate.</p>
            </section>

            {/* 9. Damaged Shipments */}
            <section className="policy-section">
              <h2>9. Damaged Shipments</h2>
              <p>If your package arrives visibly damaged:</p>
              <ul>
                <li>Notify us within <strong>48 hours</strong> of delivery</li>
                <li>Provide photos of packaging and product</li>
                <li>Include order number</li>
              </ul>
              <p className="policy-note">Failure to report damage within 48 hours may affect eligibility for resolution (replacement, refund, or claim).</p>
            </section>

            {/* 10. Partial Shipments */}
            <section className="policy-section">
              <h2>10. Partial Shipments</h2>
              <p>In certain cases, orders may ship separately due to inventory location, product availability, or warehouse distribution. You will receive separate tracking details for each shipment.</p>
            </section>

            {/* 11. Delivery Refusal or Failed Delivery */}
            <section className="policy-section">
              <h2>11. Delivery Refusal or Failed Delivery</h2>
              <p>If a shipment is refused or returned due to incorrect address, failure to receive delivery, or refusal by recipient, the customer may be responsible for return shipping costs, reshipment fees, and restocking fees.</p>
            </section>

            {/* 12. Force Majeure */}
            <section className="policy-section">
              <h2>12. Force Majeure</h2>
              <p>Smart Ink Guide shall not be liable for delays or failure to deliver caused by events beyond our reasonable control, including natural disasters, government actions, supply chain disruptions, transportation interruptions, or public emergencies.</p>
            </section>

            {/* 13. Independent Retailer Disclosure */}
            <section className="policy-section">
              <h2>13. Independent Retailer Disclosure</h2>
              <p>Smart Ink Guide operates as an independent online retailer. We are not affiliated with printer manufacturers unless explicitly stated. All trademarks and product names remain the property of their respective owners.</p>
            </section>

            {/* 14. Policy Updates */}
            <section className="policy-section">
              <h2>14. Policy Updates</h2>
              <p>We reserve the right to modify this Shipping Policy at any time. Changes become effective immediately upon posting.</p>
            </section>

            {/* 15. Contact Information */}
            <div className="contact-info-box">
              <h3>15. Contact Information</h3>
              <p><strong>Smart Ink Guide - Shipping Department</strong><br />
                30 N GOULD STREET SUITE R<br />
                SHERIDAN, WY 82801<br />
                United States</p>
              <p className="mt-2">Email: <a href="mailto:support@smartinkguide.com">support@smartinkguide.com</a></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShippingPolicy;
