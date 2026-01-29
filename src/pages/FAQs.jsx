import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import '../styles/pages.css';

const FAQs = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [openItems, setOpenItems] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'products', label: 'Products' },
    { id: 'orders', label: 'Orders & Payments' },
    { id: 'shipping', label: 'Shipping' },
    { id: 'returns', label: 'Returns' },
    { id: 'privacy', label: 'Privacy & Independence' }
  ];

  const faqs = {
    products: [
      {
        id: 1,
        question: 'What types of products does Prints Carts offer?',
        answer: 'We offer a wide selection of printers, ink cartridges, toner cartridges, photo paper, and everyday printing supplies for home and office needs.'
      },
      {
        id: 2,
        question: 'How do I know if a cartridge is compatible with my printer?',
        answer: 'Each product page includes compatibility details based on manufacturer information. You can also check your printer model on the product label or user manual before making a purchase.'
      },
      {
        id: 3,
        question: 'Are the printers wireless or mobile-printing ready?',
        answer: 'Many modern printers include Wi-Fi and mobile-printing features. Compatibility depends on the specific model. Product descriptions will list any available wireless capabilities.'
      },
      {
        id: 4,
        question: 'What is page yield and why does it vary?',
        answer: 'Page yield refers to the estimated number of pages a cartridge may print based on standardized testing. Actual results can vary depending on the type of documents printed, settings, and usage patterns.'
      },
      {
        id: 5,
        question: 'Do you offer product recommendations?',
        answer: 'Yes. If you need help selecting a printer or printing supplies, our team can assist with general product inquiries based on your needs.'
      }
    ],
    orders: [
      {
        id: 6,
        question: 'How can I place an order?',
        answer: 'Simply add products to your cart, proceed to checkout, and complete payment using our secure payment process.'
      },
      {
        id: 7,
        question: 'What payment methods do you accept?',
        answer: 'We accept major payment methods listed at checkout. All transactions are processed securely.'
      },
      {
        id: 8,
        question: 'Can I modify or cancel my order?',
        answer: 'Orders can be modified or canceled if they have not yet shipped. Contact us as soon as possible with your order number.'
      }
    ],
    shipping: [
      {
        id: 9,
        question: 'Do you ship across the United States and Canada?',
        answer: 'Yes, we offer shipping throughout the United States and Canada. Delivery times depend on location, product availability, and the selected shipping method.'
      },
      {
        id: 10,
        question: 'How long does delivery take?',
        answer: 'Delivery timelines vary by region. Estimated delivery times are shown during checkout. Weather, carrier delays, or product availability may affect shipping times.'
      },
      {
        id: 11,
        question: 'How can I track my order?',
        answer: 'Once your order ships, you will receive a shipping confirmation email with a tracking link.'
      }
    ],
    returns: [
      {
        id: 12,
        question: 'What is your return policy?',
        answer: 'Eligible items may be returned within the specified return window. Products must be in original condition and packaging. Please visit our Refund & Return Policy page for full details.'
      },
      {
        id: 13,
        question: 'How do I start a return?',
        answer: 'Contact our support team with your order number and the reason for return. We will provide the next steps and any applicable return instructions.'
      },
      {
        id: 14,
        question: 'When will I receive my refund?',
        answer: 'Refunds are processed after the returned item is received and inspected. Processing times may vary depending on the payment method.'
      }
    ],
    privacy: [
      {
        id: 15,
        question: 'Do I need an account to place an order?',
        answer: 'No, you can checkout as a guest. Creating an account allows you to view order history and save basic information for future purchases.'
      },
      {
        id: 16,
        question: 'How is my personal information protected?',
        answer: 'We use industry-standard security practices to help protect your information. Details are available in our Privacy Policy.'
      },
      {
        id: 17,
        question: 'Is Prints Carts affiliated with any printer brands?',
        answer: 'No. Prints Carts is an independent online retailer. All trademarks, logos, and product names belong to their respective owners and are used for identification purposes only.'
      },
      {
        id: 18,
        question: 'Do products come with a manufacturer warranty?',
        answer: 'Eligible products include standard manufacturer warranties as provided by the respective brands. Warranty terms vary by brand and product.'
      },
      {
        id: 19,
        question: 'What assistance do you provide?',
        answer: 'We assist customers with: Product-related inquiries, Order status questions, Returns and refund guidance, General shopping support.'
      },
      {
        id: 20,
        question: 'How can I contact customer support?',
        answer: 'You may reach us via email or live chat during available business hours. Visit our Contact Us page for details.'
      }
    ]
  };

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFAQs = faqs[activeTab]?.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <>
      <Navbar />
      <div className="faqs-page">
        <div className="faqs-container">
          <h1 className="page-title">FAQs</h1>
          
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="search-icon">
              <path d="M9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 18L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

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

          <div className="faqs-list">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className={`faq-item ${openItems[faq.id] ? 'open' : ''}`}
                  onClick={() => toggleItem(faq.id)}
                >
                  <div className="faq-question">
                    <span>{faq.question}</span>
                    <svg
                      className="faq-arrow"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>No FAQs found matching your search.</p>
              </div>
            )}
          </div>

          <div className="contact-section">
            <h2>Contact Us</h2>
            <div className="contact-info-grid">
              <div className="contact-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>1-800-PRINTS<br />(1-800-774-6877)</span>
              </div>
              <div className="contact-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>7181 Beacon Dr 15<br />Reno, NV 89506<br />United States</span>
              </div>
              <div className="contact-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>support@printscarts.com</span>
              </div>
            </div>
            <div className="map-container">
              <div className="map-placeholder">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <path d="M50 10C35.64 10 24 21.64 24 36C24 50.36 50 90 50 90C50 90 76 50.36 76 36C76 21.64 64.36 10 50 10Z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="50" cy="36" r="8" fill="currentColor"/>
                </svg>
                <p>New York, NY 10001, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQs;

