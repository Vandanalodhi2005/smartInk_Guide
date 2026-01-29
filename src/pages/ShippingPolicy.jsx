import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import '../styles/pages.css';

const ShippingPolicy = () => {
  const [activeTab, setActiveTab] = useState('shipping');
  const [openItems, setOpenItems] = useState({});

  const tabs = [
    { id: 'shipping', label: 'Shipping Policy' },
    { id: 'returns', label: 'Returns & Exchanges' },
    { id: 'cookies', label: 'Cookie Policy' }
  ];

  const shippingSections = [
    {
      id: 1,
      title: 'Shipping Options',
      content: 'We offer multiple shipping options to meet your needs:\n\n• Standard Shipping (5-7 business days) - Free on orders over $50\n• Expedited Shipping (2-3 business days) - $15.99\n• Express Shipping (1-2 business days) - $24.99\n\nAll shipping times are estimates and may vary based on your location and order processing time.'
    },
    {
      id: 2,
      title: 'Order Processing',
      content: 'Orders are typically processed within 1-2 business days. During peak seasons or holidays, processing may take up to 3 business days. Once your order is processed and shipped, you will receive a confirmation email with tracking information.'
    },
    {
      id: 3,
      title: 'Shipping Locations',
      content: 'We currently ship to all 50 states in the United States and all provinces in Canada. International shipping is not available at this time, but we are working on expanding our shipping options.'
    },
    {
      id: 4,
      title: 'Delivery Issues',
      content: 'If you experience any issues with your delivery, please contact us immediately. We will work with the shipping carrier to resolve the issue and ensure you receive your order. Lost or damaged packages are covered by our shipping insurance.'
    }
  ];

  const returnSections = [
    {
      id: 5,
      title: 'Return Policy',
      content: 'We offer a 30-day return policy for unopened products in their original packaging. Items must be in new, unused condition with all original tags and packaging intact. Returns must be initiated within 30 days of delivery.'
    },
    {
      id: 6,
      title: 'Exchange Policy',
      content: 'Exchanges are available for products of equal or greater value. If you need to exchange an item, please contact our customer service team to initiate the process. You will receive a return shipping label and instructions.'
    },
    {
      id: 7,
      title: 'Refund Process',
      content: 'Refunds will be processed to the original payment method within 5-10 business days after we receive and inspect the returned item. Shipping costs are non-refundable unless the return is due to our error or a defective product.'
    }
  ];

  const cookieSections = [
    {
      id: 8,
      title: 'What Are Cookies?',
      content: 'Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and analyzing how you use our site.'
    },
    {
      id: 9,
      title: 'How We Use Cookies',
      content: 'We use cookies to:\n\n• Remember your preferences and settings\n• Analyze website traffic and usage patterns\n• Improve our website functionality\n• Provide personalized content and recommendations\n• Process your orders and maintain your shopping cart'
    },
    {
      id: 10,
      title: 'Managing Cookies',
      content: 'You can control and manage cookies through your browser settings. However, disabling cookies may affect the functionality of our website and your ability to make purchases. Most browsers allow you to refuse or delete cookies.'
    }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getSections = () => {
    if (activeTab === 'shipping') return shippingSections;
    if (activeTab === 'returns') return returnSections;
    if (activeTab === 'cookies') return cookieSections;
    return [];
  };

  return (
    <>
      <Navbar />
      <div className="shipping-policy-page">
        <div className="policy-container">
          <h1 className="page-title">
            {activeTab === 'shipping' && 'Shipping Policy'}
            {activeTab === 'returns' && 'Returns & Exchanges Policy'}
            {activeTab === 'cookies' && 'Cookie Policy'}
          </h1>

          <div className="tabs-container">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="policy-sections">
            {getSections().map((section) => (
              <div
                key={section.id}
                className={`policy-item ${openItems[section.id] ? 'open' : ''}`}
              >
                <div
                  className="policy-item-header"
                  onClick={() => toggleItem(section.id)}
                >
                  <h3>{section.title}</h3>
                  <svg
                    className="policy-arrow"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="policy-item-content">
                  <p style={{ whiteSpace: 'pre-line' }}>{section.content}</p>
                </div>
              </div>
            ))}
          </div>

          {activeTab === 'cookies' && (
            <div className="cookie-additional">
              <h2>Your Privacy Rights</h2>
              <div className="privacy-section">
                <h3>Data Protection</h3>
                <p>We are committed to protecting your privacy and personal information. We comply with all applicable data protection laws and regulations, including GDPR and CCPA where applicable.</p>
              </div>
              <div className="privacy-section">
                <h3>Third-Party Cookies</h3>
                <p>We may use third-party services that set cookies on your device. These include analytics services, advertising networks, and social media platforms. You can opt out of these cookies through your browser settings or the service provider\'s opt-out page.</p>
              </div>
              <div className="privacy-section">
                <h3>Contact Us</h3>
                <p>If you have questions about our cookie policy or privacy practices, please contact us at privacy@printscarts.com or through our contact form.</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShippingPolicy;

