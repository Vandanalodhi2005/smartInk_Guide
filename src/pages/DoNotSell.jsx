import '../styles/PolicyPages.css';
import { Mail, MapPin, Globe } from 'lucide-react';

const DoNotSell = () => {
    return (
        <div className="policy-page-wrapper">
            <main className="policy-main-content">
                {/* Hero Section */}
                <div className="policy-hero">
                    <div className="policy-hero-content">
                        <h1>Do Not Sell Or Share My Personal Information</h1>
                        <p className="last-updated">Effective Date: February 18, 2026</p>
                        <p className="intro-text">
                            This page is provided in accordance with the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA), and other applicable U.S. privacy laws.
                            <br /><br />
                            Smart Ink Guide respects your privacy and is committed to protecting your personal information.
                        </p>
                    </div>
                </div>

                <div className="policy-content-container">
                    {/* Quick Info Cards */}
                    <div className="policy-info-cards">
                        <div className="policy-info-card" style={{ animationDelay: '0.1s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <h3>No Sale</h3>
                            <p>We do not sell personal data</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.2s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                            </div>
                            <h3>Your Rights</h3>
                            <p>CCPA/CPRA Compliant</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.3s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                </svg>
                            </div>
                            <h3>Transparency</h3>
                            <p>Clear data practices</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="policy-content-card">

                        {/* 1. Our Position on Selling Personal Information */}
                        <section className="policy-section">
                            <h2>1. Our Position on Selling Personal Information</h2>
                            <p>Smart Ink Guide does NOT sell personal information. We do not:</p>
                            <ul>
                                <li>Sell customer data to third parties</li>
                                <li>Exchange personal data for monetary compensation</li>
                                <li>Share customer data for independent third-party marketing</li>
                            </ul>
                            <p className="policy-note">We collect and use personal information only for legitimate business purposes, including order fulfillment, customer support, and website improvement.</p>
                        </section>

                        {/* 2. What “Sell” or “Share” Means Under California Law */}
                        <section className="policy-section">
                            <h2>2. What “Sell” or “Share” Means Under California Law</h2>
                            <p>Under the CCPA/CPRA, “sell” or “share” can include:</p>
                            <ul>
                                <li>Providing personal information to third parties for cross-context behavioral advertising</li>
                                <li>Exchanging data for valuable consideration</li>
                            </ul>
                            <p>Even if no money changes hands, certain advertising activities may legally qualify as “sharing.” Smart Ink Guide does not intentionally sell or share personal information as defined by California law.</p>
                        </section>

                        {/* 3. Categories of Information We May Collect */}
                        <section className="policy-section">
                            <h2>3. Categories of Information We May Collect</h2>
                            <p>For transparency, we may collect the following categories of personal information:</p>
                            <div className="feature-grid">
                                <div className="feature-item"><h4>Identifiers</h4><p>Name, email, IP address</p></div>
                                <div className="feature-item"><h4>Commercial Info</h4><p>Purchase history</p></div>
                                <div className="feature-item"><h4>Internet Activity</h4><p>Pages viewed, browsing behavior</p></div>
                                <div className="feature-item"><h4>Device Info</h4><p>Browser type, device type</p></div>
                            </div>
                            <p className="mt-4">This information is used strictly for business operations and service delivery.</p>
                        </section>

                        {/* 4. Your California Privacy Rights */}
                        <section className="policy-section">
                            <h2>4. Your California Privacy Rights</h2>
                            <p>If you are a California resident, you have the right to:</p>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-bold text-gray-800">✔ Right to Know</h4>
                                    <p>Request details about the personal information we collect and how it is used.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">✔ Right to Delete</h4>
                                    <p>Request deletion of personal information, subject to legal exceptions.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">✔ Right to Correct</h4>
                                    <p>Request correction of inaccurate personal information.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">✔ Right to Opt-Out</h4>
                                    <p>Request that we do not sell or share your personal information. Although Smart Ink Guide does not sell personal information, you may still submit an opt-out request for record purposes.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">✔ Right to Non-Discrimination</h4>
                                    <p>We will not discriminate against you for exercising your privacy rights.</p>
                                </div>
                            </div>
                        </section>

                        {/* 5. How to Submit a Request */}
                        <section className="policy-section">
                            <h2>5. How to Submit a Request</h2>
                            <p>To exercise your rights, you may contact us:</p>
                            <p>📧 Email: <a href="mailto:support@smartinkguide.com">support@smartinkguide.com</a></p>
                            <p>Subject Line: “Privacy Rights Request”</p>
                            <p className="mt-4">Please include:</p>
                            <ul>
                                <li>Full name</li>
                                <li>Email address associated with your order or account</li>
                                <li>Description of your request</li>
                            </ul>
                            <p className="policy-note">We may need to verify your identity before processing your request. We will respond within the time frame required by applicable law.</p>
                        </section>

                        {/* 6. Authorized Agents */}
                        <section className="policy-section">
                            <h2>6. Authorized Agents</h2>
                            <p>If you submit a request through an authorized agent, we may require written authorization, proof of identity, and verification documentation to protect against fraudulent requests.</p>
                        </section>

                        {/* 7. Advertising & Tracking Disclosure */}
                        <section className="policy-section">
                            <h2>7. Advertising & Tracking Disclosure</h2>
                            <p>Smart Ink Guide may use analytics tools, advertising services, and remarketing technologies to help improve user experience and measure advertising performance.</p>
                            <p>You may manage cookie preferences through your browser settings or by reviewing our Cookie Policy.</p>
                        </section>

                        {/* 8. Data Retention */}
                        <section className="policy-section">
                            <h2>8. Data Retention</h2>
                            <p>We retain personal information only as long as necessary to fulfill transactions, comply with legal obligations, resolve disputes, and maintain business records.</p>
                        </section>

                        {/* 9. Updates to This Page */}
                        <section className="policy-section">
                            <h2>9. Updates to This Page</h2>
                            <p>We reserve the right to update this page to reflect changes in legal requirements, business practices, and technology. Updates become effective upon posting.</p>
                        </section>

                        {/* 10. Contact Information */}
                        <div className="contact-info-box">
                            <h3>10. Contact Information</h3>
                            <p><strong>Smart Ink Guide - Privacy Compliance Department</strong><br />
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

export default DoNotSell;
