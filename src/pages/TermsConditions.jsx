import '../styles/PolicyPages.css';
import { Mail, MapPin, Globe } from 'lucide-react';

const TermsConditions = () => {
    return (
        <div className="policy-page-wrapper">
            <main className="policy-main-content">
                {/* Hero Section */}
                <div className="policy-hero">
                    <div className="policy-hero-content">
                        <h1>Terms & Conditions</h1>
                        <p className="last-updated">Effective Date: February 18, 2026</p>
                        <p className="intro-text">
                            Welcome to Smart Ink Guide (“Company,” “we,” “our,” or “us”). These Terms & Conditions (“Terms”) govern your access to and use of:
                            <a href="https://www.smartinkguide.com" className="text-blue-200 hover:text-white underline"> www.smartinkguide.com</a> (“Website”).
                            <br /><br />
                            By accessing or using this Website, placing an order, or interacting with our services, you agree to be legally bound by these Terms. If you do not agree, you must discontinue use immediately.
                        </p>
                    </div>
                </div>

                <div className="policy-content-container">
                    {/* Quick Info Cards - Kept for consistency */}
                    <div className="policy-info-cards">
                        <div className="policy-info-card" style={{ animationDelay: '0.1s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                                </svg>
                            </div>
                            <h3>Fair Terms</h3>
                            <p>Clear, transparent conditions for all users</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.2s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <h3>Your Rights</h3>
                            <p>Protected under consumer laws</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.3s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                                </svg>
                            </div>
                            <h3>Secure Shopping</h3>
                            <p>Safe and protected transactions</p>
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

                        {/* 2. Eligibility to Use Website */}
                        <section className="policy-section">
                            <h2>2. Eligibility to Use Website</h2>
                            <p>By using this Website, you represent that:</p>
                            <ul>
                                <li>You are at least 18 years of age</li>
                                <li>You have the legal capacity to enter into binding agreements</li>
                                <li>You will use the Website in compliance with applicable laws</li>
                            </ul>
                            <p className="policy-note">We reserve the right to refuse service or terminate accounts at our discretion.</p>
                        </section>

                        {/* 3. Website Use & Conduct */}
                        <section className="policy-section">
                            <h2>3. Website Use & Conduct</h2>
                            <p>You agree not to:</p>
                            <div className="feature-grid">
                                <div className="feature-item"><h4>Unlawful Purposes</h4><p>Use for illegal activities</p></div>
                                <div className="feature-item"><h4>Unauthorized Access</h4><p>Attempt to breach systems</p></div>
                                <div className="feature-item"><h4>Interference</h4><p>Disrupt security/performance</p></div>
                                <div className="feature-item"><h4>Data Extraction</h4><p>Use automated scraping tools</p></div>
                            </div>
                            <p className="mt-4">Violation of these Terms may result in termination of access.</p>
                        </section>

                        {/* 4. Product Information & Availability */}
                        <section className="policy-section">
                            <h2>4. Product Information & Availability</h2>
                            <p>We make reasonable efforts to ensure accuracy. However:</p>
                            <ul>
                                <li>Product information may change without notice</li>
                                <li>Images are for illustrative purposes only</li>
                                <li>Specifications may vary by manufacturer updates</li>
                            </ul>
                            <p>All products are subject to availability. We reserve the right to discontinue products at any time.</p>
                        </section>

                        {/* 5. Pricing & Payment Terms */}
                        <section className="policy-section">
                            <h2>5. Pricing & Payment Terms</h2>
                            <p>All prices are listed in U.S. Dollars (USD).</p>
                            <p>We reserve the right to:</p>
                            <ul>
                                <li>Modify prices without notice</li>
                                <li>Correct pricing errors</li>
                                <li>Cancel orders affected by pricing inaccuracies</li>
                            </ul>
                            <p className="policy-note">Accepted payment methods are processed through secure third-party payment processors. We do not store complete credit card numbers.</p>
                        </section>

                        {/* 6. Order Acceptance & Cancellation */}
                        <section className="policy-section">
                            <h2>6. Order Acceptance & Cancellation</h2>
                            <p>Order confirmation does not constitute final acceptance. We reserve the right to:</p>
                            <ul>
                                <li>Refuse or cancel any order</li>
                                <li>Limit quantities purchased</li>
                                <li>Cancel suspected fraudulent transactions</li>
                                <li>Cancel orders due to inventory shortages</li>
                            </ul>
                            <p>If an order is canceled after payment, a refund will be issued.</p>
                        </section>

                        {/* 7. Shipping & Risk of Loss */}
                        <section className="policy-section">
                            <h2>7. Shipping & Risk of Loss</h2>
                            <p>Shipping timelines are estimates. Once an order is transferred to the carrier:</p>
                            <ul>
                                <li>Risk of loss transfers to the customer</li>
                                <li>Delivery responsibility rests with the carrier</li>
                            </ul>
                            <p>Smart Ink Guide is not liable for carrier delays beyond our control.</p>
                        </section>

                        {/* 8. Returns & Refunds */}
                        <section className="policy-section">
                            <h2>8. Returns & Refunds</h2>
                            <p>Returns are governed by our Return & Refund Policy.</p>
                            <ul>
                                <li>Eligible items may be returned within 30 days subject to conditions.</li>
                                <li>Refunds are processed to the original payment method after inspection.</li>
                            </ul>
                            <p>We reserve the right to deny returns that do not meet eligibility requirements.</p>
                        </section>

                        {/* 9. Independent Retailer Disclosure */}
                        <section className="policy-section">
                            <h2>9. Independent Retailer Disclosure</h2>
                            <p>Smart Ink Guide operates as an independent online retailer. We are not affiliated with, endorsed by, or sponsored by any printer manufacturer unless explicitly stated.</p>
                            <p className="policy-note">All brand names, logos, and trademarks are the property of their respective owners and are used for identification purposes only.</p>
                        </section>

                        {/* 10. Intellectual Property Rights */}
                        <section className="policy-section">
                            <h2>10. Intellectual Property Rights</h2>
                            <p>All Website content (Text, Graphics, Logos, Images, Layout, Design) is the property of Smart Ink Guide or its licensors and is protected by intellectual property laws.</p>
                            <p>You may not reproduce, distribute, or exploit Website content without written permission.</p>
                        </section>

                        {/* 11. Disclaimer of Warranties */}
                        <section className="policy-section">
                            <h2>11. Disclaimer of Warranties</h2>
                            <p>To the fullest extent permitted by law:</p>
                            <ul>
                                <li>The Website and all products are provided on an “AS IS” and “AS AVAILABLE” basis.</li>
                                <li>We disclaim all warranties, including merchantability, fitness for purpose, and non-infringement.</li>
                            </ul>
                            <p>Manufacturer warranties may apply separately.</p>
                        </section>

                        {/* 12. Limitation of Liability */}
                        <section className="policy-section">
                            <h2>12. Limitation of Liability</h2>
                            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, SMART INK GUIDE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES.</p>
                            <p>Including but not limited to:</p>
                            <ul>
                                <li>Loss of profits or revenue</li>
                                <li>Business interruption</li>
                                <li>Data loss</li>
                                <li>Printer malfunction claims</li>
                            </ul>
                            <p className="policy-note">Our total liability shall not exceed the amount paid for the specific product giving rise to the claim.</p>
                        </section>

                        {/* 13. Indemnification */}
                        <section className="policy-section">
                            <h2>13. Indemnification</h2>
                            <p>You agree to indemnify and hold harmless Smart Ink Guide from any claims arising from:</p>
                            <ul>
                                <li>Violation of these Terms</li>
                                <li>Misuse of products</li>
                                <li>Unlawful activity</li>
                                <li>Infringement of third-party rights</li>
                            </ul>
                        </section>

                        {/* 14. Governing Law & Dispute Resolution */}
                        <section className="policy-section">
                            <h2>14. Governing Law & Dispute Resolution</h2>
                            <p>These Terms shall be governed by the laws of the State of Wyoming. Any disputes shall be resolved exclusively in the appropriate courts located in Wyoming.</p>
                        </section>

                        {/* 15. Force Majeure */}
                        <section className="policy-section">
                            <h2>15. Force Majeure</h2>
                            <p>Smart Ink Guide shall not be liable for delays due to circumstances beyond our reasonable control, including natural disasters, government actions, supply chain disruptions, carrier delays, or internet outages.</p>
                        </section>

                        {/* 16. Modifications to Terms */}
                        <section className="policy-section">
                            <h2>16. Modifications to Terms</h2>
                            <p>We reserve the right to update or modify these Terms at any time. Changes become effective immediately upon posting. Continued use of the Website constitutes acceptance of revised Terms.</p>
                        </section>

                        {/* 17. Contact Information */}
                        <div className="contact-info-box">
                            <h3>17. Contact Information</h3>
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

export default TermsConditions;
