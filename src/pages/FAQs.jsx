import React, { useState } from 'react';
import FAQHero from '../components/faqs/FAQHero/FAQHero';
import FAQSearch from '../components/faqs/FAQSearch/FAQSearch';
import FAQTabs from '../components/faqs/FAQTabs/FAQTabs';
import FAQList from '../components/faqs/FAQList/FAQList';
import FAQContact from '../components/faqs/FAQContact/FAQContact';
import '../styles/pages.css';

const FAQs = () => {
  const [activeTab, setActiveTab] = useState('ordering');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({});

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'ordering', label: 'Ordering & Checkout' },
    { id: 'shipping', label: 'Shipping & Delivery' },
    { id: 'returns', label: 'Returns & Refunds' },
    { id: 'products', label: 'Product Information' },
    { id: 'account', label: 'Account & Payment' }
  ];

  const faqData = {
    ordering: [
      { id: 'o1', question: 'How do I place an order?', answer: 'Browse products, select your desired item, add it to your cart, and proceed to secure checkout. You will receive an order confirmation email once your purchase is completed.' },
      { id: 'o2', question: 'Can I modify or cancel my order?', answer: 'If your order has not yet shipped, please contact support@smartinkguide.com as soon as possible. Once an order has shipped, it cannot be canceled but may be eligible for return under our Return Policy.' },
      { id: 'o3', question: 'Do you offer bulk pricing for businesses?', answer: 'For bulk or business-related inquiries, please contact us directly via email with your requested quantities.' },
      { id: 'o4', question: 'Is there a minimum order requirement?', answer: 'There is no minimum order requirement unless stated on a specific promotion.' }
    ],
    shipping: [
      { id: 's1', question: 'Where do you ship?', answer: 'Smart Ink Guide ships within the United States.' },
      { id: 's2', question: 'How long does shipping take?', answer: 'Standard delivery typically takes 3–7 business days depending on your location.' },
      { id: 's3', question: 'How can I track my order?', answer: 'Once your order ships, you will receive an email containing tracking information.' },
      { id: 's4', question: 'What happens if my package is delayed?', answer: 'Delivery times may vary due to carrier conditions. If your tracking shows unusual delays, please contact us and we will assist you.' },
      { id: 's5', question: 'What if my package arrives damaged?', answer: 'Please contact us within 48 hours of delivery and provide photos of the damaged item and packaging so we can review and assist.' }
    ],
    returns: [
      { id: 'r1', question: 'What is your return policy?', answer: 'Eligible items may be returned within 30 days of delivery if they are unused and in original packaging.' },
      { id: 'r2', question: 'How do I request a return?', answer: 'Email support@smartinkguide.com with your order number and reason for return. If approved, we will provide return instructions.' },
      { id: 'r3', question: 'How long does it take to process a refund?', answer: 'Refunds are typically processed within 5–7 business days after the returned item is received and inspected.' },
      { id: 'r4', question: 'Are there items that cannot be returned?', answer: 'Opened ink cartridges, clearance items, custom orders, and certain specialty products may not be eligible for return. Please review our Return Policy for full details.' }
    ],
    products: [
      { id: 'p1', question: 'Are products new and authentic?', answer: 'Yes. Products are new and sourced from trusted suppliers.' },
      { id: 'p2', question: 'How do I find the correct ink or toner for my printer?', answer: 'Locate your printer’s exact model number (usually found on the front or inside panel of your device). Use our product search or contact support for compatibility assistance.' },
      { id: 'p3', question: 'Do products include a manufacturer warranty?', answer: 'Where applicable, products are covered by the manufacturer’s warranty. Smart Ink Guide does not provide additional warranties beyond those offered by the manufacturer.' },
      { id: 'p4', question: 'What if I ordered the wrong cartridge?', answer: 'If the item is unopened and unused, it may be eligible for return within our 30-day return window.' }
    ],
    account: [
      { id: 'a1', question: 'What payment methods do you accept?', answer: 'We accept major credit and debit cards through secure payment processing systems.' },
      { id: 'a2', question: 'Is my payment information secure?', answer: 'Yes. All transactions are processed through encrypted and secure payment gateways.' },
      { id: 'a3', question: 'Do I need an account to place an order?', answer: 'No. You may checkout as a guest unless otherwise stated.' }
    ]
  };

  const allFaqs = Object.values(faqData).flat();

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    if (value.trim() !== '') {
      setActiveTab('all');
    } else {
      setActiveTab('ordering');
    }
  };

  const toggleItem = (id) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = searchQuery.trim() !== ''
    ? allFaqs.filter(item =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : (activeTab === 'all' ? allFaqs : (faqData[activeTab] || []));

  return (
    <div className="faqs-page">
      <div className="faqs-container">
        <FAQHero />

        {/* Business Info & Support Channels */}
        <div className="max-w-6xl mx-auto px-4 mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-3 text-blue-600">📍 Business Information</h3>
            <p className="font-bold text-gray-800">Smart Ink Guide</p>
            <p className="text-gray-600">30 N GOULD STREET SUITE R</p>
            <p className="text-gray-600">SHERIDAN, WY 82801</p>
            <p className="text-gray-600">United States</p>
            <p className="text-gray-600 mt-2">📧 support@smartinkguide.com</p>
            <p className="text-gray-600">🌐 www.smartinkguide.com</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-3 text-blue-600">💬 Support Channels</h3>
            <div className="mb-4">
              <p className="font-bold text-gray-800">📧 Email Support</p>
              <p className="text-blue-600">support@smartinkguide.com</p>
              <p className="text-gray-500 text-sm mt-1">We respond within 24 business hours (Monday–Friday).</p>
            </div>
            <p className="text-gray-600 text-sm">For faster assistance, please include your order number if your inquiry relates to a purchase.</p>
          </div>
        </div>

        <FAQSearch searchQuery={searchQuery} setSearchQuery={handleSearchChange} />
        <FAQTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        <FAQList faqs={filteredFaqs} openItems={openItems} toggleItem={toggleItem} />

        {/* Bottom Notices */}
        <div className="max-w-4xl mx-auto px-4 mt-16 text-center">

          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h3 className="text-lg font-bold text-gray-800 mb-2">⚖ Independent Retailer Notice</h3>
            <p className="text-gray-600 text-sm mb-2">Smart Ink Guide operates as an independent online retailer. We are not affiliated with, endorsed by, or sponsored by HP®, Canon®, Epson®, Brother®, or other manufacturers unless explicitly stated.</p>
            <p className="text-gray-500 text-xs">All trademarks remain the property of their respective owners.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📩 Still Need Help?</h2>
            <p className="text-gray-600 mb-6">If you can’t find what you’re looking for, our support team is ready to assist.</p>
            <div className="inline-block bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-lg font-bold text-blue-600 mb-1">support@smartinkguide.com</p>
              <p className="text-gray-500 text-sm">30 N GOULD STREET SUITE R, SHERIDAN, WY 82801</p>
              <p className="text-gray-400 text-xs mt-2">We typically respond within 24 business hours.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default FAQs;
