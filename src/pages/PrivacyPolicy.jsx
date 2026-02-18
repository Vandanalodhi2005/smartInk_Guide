import '../styles/PolicyPages.css';
import { Mail, MapPin, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="policy-page-wrapper">
            <main className="policy-main-content">
                {/* Hero Section */}
                <div className="policy-hero">
                    <div className="policy-hero-content">
                        <h1>Privacy Policy</h1>
                        <p className="last-updated">Effective Date: February 18, 2026</p>
                        <p className="intro-text">
                            This Privacy Policy describes how Smart Ink Guide (“Company,” “we,” “our,” or “us”) collects, uses, discloses, safeguards,
                            and processes personal information when you access or use: <a href="https://www.smartinkguide.com" className="text-blue-200 hover:text-white underline">www.smartinkguide.com</a> (“Website”).
                            <br /><br />
                            By accessing or using our Website, you acknowledge that you have read and understood this Privacy Policy.
                        </p>
                    </div>
                </div>

                <div className="policy-content-container">
                    {/* Quick Info Cards - Kept for visual appeal as they align with new policy */}
                    <div className="policy-info-cards">
                        <div className="policy-info-card" style={{ animationDelay: '0.1s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                                </svg>
                            </div>
                            <h3>We Don't Sell Data</h3>
                            <p>Your information is never sold or shared for advertising</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.2s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                                </svg>
                            </div>
                            <h3>SSL Encryption</h3>
                            <p>All data is protected with industry-standard security</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.4s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                            </div>
                            <h3>Your Rights</h3>
                            <p>Access, correct, or delete your data anytime</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="policy-content-card">

                        {/* 1. Company Information */}
                        <section className="policy-section">
                            <h2>1. Company Information</h2>
                            <div className="feature-grid">
                                <div className="feature-item">
                                    <h4><MapPin size={18} className="inline mr-2" /> Address</h4>
                                    <p>30 N GOULD STREET SUITE R<br />SHERIDAN, WY 82801<br />United States</p>
                                </div>
                                <div className="feature-item">
                                    <h4><Mail size={18} className="inline mr-2" /> Contact</h4>
                                    <p><a href="mailto:support@smartinkguide.com">support@smartinkguide.com</a></p>
                                </div>
                                <div className="feature-item">
                                    <h4><Globe size={18} className="inline mr-2" /> Website</h4>
                                    <p><a href="https://www.smartinkguide.com">www.smartinkguide.com</a></p>
                                </div>
                            </div>
                            <p>Smart Ink Guide operates as an independent online retailer of printers, ink cartridges, toner, and related office technology products.</p>
                        </section>

                        {/* 2. Categories of Information We Collect */}
                        <section className="policy-section">
                            <h2>2. Categories of Information We Collect</h2>
                            <p>We collect information necessary to operate our business, fulfill orders, comply with legal obligations, and improve user experience.</p>

                            <h3>A. Personal Information You Provide</h3>
                            <p>When you place an order, create an account, or contact us, we may collect:</p>
                            <ul>
                                <li>Full name</li>
                                <li>Billing address</li>
                                <li>Shipping address</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Order history</li>
                                <li>Customer service communications</li>
                            </ul>
                            <p className="policy-note">Payment details are processed securely by third-party payment processors. We do not store complete credit card numbers.</p>

                            <h3>B. Automatically Collected Information</h3>
                            <p>When you visit our Website, we may automatically collect:</p>
                            <ul>
                                <li>IP address</li>
                                <li>Browser type and version</li>
                                <li>Device information</li>
                                <li>Pages viewed</li>
                                <li>Referring URLs</li>
                                <li>Time and date of access</li>
                                <li>Interaction behavior</li>
                            </ul>
                            <p>This information helps us analyze website performance and maintain security.</p>

                            <h3>C. Cookies and Tracking Technologies</h3>
                            <p>We use cookies and similar technologies to:</p>
                            <ul>
                                <li>Enable essential site functionality</li>
                                <li>Improve browsing experience</li>
                                <li>Analyze website traffic</li>
                                <li>Support marketing efforts</li>
                            </ul>
                            <p>You may control cookies through browser settings. Disabling cookies may limit certain features.</p>
                        </section>

                        {/* 3. How We Use Your Information */}
                        <section className="policy-section">
                            <h2>3. How We Use Your Information</h2>
                            <p>We use personal information for legitimate business purposes, including:</p>
                            <ul>
                                <li>Order processing and fulfillment</li>
                                <li>Shipping and tracking notifications</li>
                                <li>Customer service responses</li>
                                <li>Fraud detection and prevention</li>
                                <li>Website improvement and analytics</li>
                                <li>Compliance with legal obligations</li>
                            </ul>
                            <p className="policy-note">We do not sell personal information.</p>
                        </section>

                        {/* 4. Disclosure of Personal Information */}
                        <section className="policy-section">
                            <h2>4. Disclosure of Personal Information</h2>
                            <p>We may share information with trusted third parties only as necessary, including:</p>
                            <div className="feature-grid">
                                <div className="feature-item"><h4>Payment Processors</h4></div>
                                <div className="feature-item"><h4>Shipping Carriers</h4></div>
                                <div className="feature-item"><h4>Hosting Providers</h4></div>
                                <div className="feature-item"><h4>Analytics Providers</h4></div>
                            </div>
                            <p className="mt-4">These service providers are contractually obligated to safeguard information. We may disclose information if required by law or to protect our legal rights.</p>
                        </section>

                        {/* 5. Data Security */}
                        <section className="policy-section">
                            <h2>5. Data Security</h2>
                            <p>We implement reasonable administrative, technical, and physical safeguards, including:</p>
                            <ul>
                                <li>SSL encryption</li>
                                <li>Secure payment gateways</li>
                                <li>Access restrictions</li>
                                <li>System monitoring</li>
                            </ul>
                            <p>However, no internet transmission is completely secure.</p>
                        </section>

                        {/* 6. Data Retention */}
                        <section className="policy-section">
                            <h2>6. Data Retention</h2>
                            <p>We retain personal information only as long as necessary to:</p>
                            <ul>
                                <li>Fulfill transactions</li>
                                <li>Maintain accounting records</li>
                                <li>Comply with legal obligations</li>
                                <li>Resolve disputes</li>
                            </ul>
                            <p>Information is securely deleted or anonymized when no longer needed.</p>
                        </section>

                        {/* 7. Your Privacy Rights */}
                        <section className="policy-section">
                            <h2>7. Your Privacy Rights</h2>
                            <p>Depending on your jurisdiction, you may have the right to:</p>
                            <ul>
                                <li>Request access to personal information</li>
                                <li>Request correction</li>
                                <li>Request deletion</li>
                                <li>Restrict certain processing</li>
                            </ul>
                            <p>Requests may be submitted to: <a href="mailto:support@smartinkguide.com">support@smartinkguide.com</a></p>
                            <p>Identity verification may be required.</p>
                        </section>

                        {/* 8. California Privacy Rights */}
                        <section className="policy-section">
                            <h2>8. California Privacy Rights (CCPA/CPRA)</h2>
                            <p>California residents have the right to:</p>
                            <ul>
                                <li>Know what personal information we collect</li>
                                <li>Request deletion</li>
                                <li>Request correction</li>
                                <li>Opt out of the sale or sharing of personal information</li>
                            </ul>
                            <p className="policy-note">Smart Ink Guide does not sell personal information.</p>
                            <p>Requests may be submitted via email.</p>
                        </section>

                        {/* 9. Children’s Privacy */}
                        <section className="policy-section">
                            <h2>9. Children’s Privacy</h2>
                            <p>Our Website is not intended for children under 13 years of age. We do not knowingly collect personal information from minors.</p>
                        </section>

                        {/* 10. Third-Party Links */}
                        <section className="policy-section">
                            <h2>10. Third-Party Links</h2>
                            <p>We are not responsible for the privacy practices of third-party websites linked from our Website.</p>
                        </section>

                        {/* 11. Changes to This Policy */}
                        <section className="policy-section">
                            <h2>11. Changes to This Policy</h2>
                            <p>We reserve the right to update this Privacy Policy at any time. Changes become effective upon posting.</p>
                        </section>

                        {/* 12. Contact Information */}
                        <div className="contact-info-box">
                            <h3>12. Contact Information</h3>
                            <p><strong>Smart Ink Guide</strong><br />
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

export default PrivacyPolicy;
