import '../styles/PolicyPages.css';
import { Mail, MapPin, Globe } from 'lucide-react';

const Disclaimer = () => {
    return (
        <div className="policy-page-wrapper">
            <main className="policy-main-content">
                {/* Hero Section */}
                <div className="policy-hero">
                    <div className="policy-hero-content">
                        <h1>Disclaimer</h1>
                        <p className="last-updated">Last Updated: February 18, 2026</p>
                        <p className="intro-text">
                            Please read this Disclaimer carefully before using the Smart Ink Guide website or purchasing products from
                            <a href="https://www.smartinkguide.com" className="text-blue-200 hover:text-white underline"> www.smartinkguide.com</a>.
                        </p>
                    </div>
                </div>

                <div className="policy-content-container">
                    {/* Quick Info Cards - Kept for consistency */}
                    <div className="policy-info-cards">
                        <div className="policy-info-card" style={{ animationDelay: '0.1s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                                </svg>
                            </div>
                            <h3>General Info</h3>
                            <p>Information provided "as is"</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.2s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <h3>Accuracy</h3>
                            <p>Reasonable efforts for correct details</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.3s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                                </svg>
                            </div>
                            <h3>Independent</h3>
                            <p>Not affiliated with manufacturers</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="policy-content-card">

                        {/* 1. General Disclaimer */}
                        <section className="policy-section">
                            <h2>1. General Disclaimer</h2>
                            <p>The information provided on the Smart Ink Guide website (“Website”) is for general informational and commercial purposes only.</p>
                            <p>Smart Ink Guide makes no representations or warranties of any kind, express or implied, regarding:</p>
                            <ul>
                                <li>The accuracy or completeness of information</li>
                                <li>The reliability of product details</li>
                                <li>The suitability of products for specific uses</li>
                                <li>The availability or error-free operation of the Website</li>
                            </ul>
                            <p className="policy-note">All content, materials, and products are offered on an “as is” and “as available” basis. Your use of the Website is at your own risk.</p>
                        </section>

                        {/* 2. Product Information Disclaimer */}
                        <section className="policy-section">
                            <h2>2. Product Information Disclaimer</h2>
                            <p>Smart Ink Guide makes reasonable efforts to ensure product information is accurate. However, product details may change without notice.</p>

                            <h3>Specifications</h3>
                            <p>Product specifications, compatibility details, and descriptions are supplied by manufacturers or distributors and may change without notice or contain errors.</p>

                            <h3>Pricing Disclaimer</h3>
                            <p>All prices are listed in U.S. Dollars (USD). While we strive for accuracy, pricing errors may occur. We reserve the right to correct errors, cancel orders due to inaccuracies, or refuse fraudulent transactions.</p>

                            <h3>Product Images</h3>
                            <p>Images are for illustrative purposes only. Actual products may differ in packaging, design, or color tones.</p>

                            <h3>Product Availability</h3>
                            <p>All products are subject to availability. We reserve the right to limit quantities, discontinue products, or substitute packaging.</p>
                        </section>

                        {/* 3. Warranty Disclaimer */}
                        <section className="policy-section">
                            <h2>3. Warranty Disclaimer</h2>
                            <p>Products sold by Smart Ink Guide may be covered by manufacturer warranties where applicable.</p>
                            <ul>
                                <li>Smart Ink Guide does not provide independent product warranties unless explicitly stated.</li>
                                <li>We do not guarantee manufacturer warranty approval.</li>
                                <li>Warranty claims should be directed to the original manufacturer.</li>
                            </ul>
                            <p className="policy-note">
                                TO THE FULLEST EXTENT PERMITTED BY LAW, SMART INK GUIDE DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                            </p>
                        </section>

                        {/* 4. Independent Retailer Disclosure */}
                        <section className="policy-section">
                            <h2>4. Independent Retailer Disclosure</h2>
                            <p>Smart Ink Guide operates as an independent online retailer. We are not affiliated with, endorsed by, authorized by, or sponsored by any printer manufacturer unless explicitly stated.</p>
                            <p className="policy-note">All brand names, logos, trademarks, and product names are the property of their respective owners and are used strictly for identification and compatibility purposes.</p>
                        </section>

                        {/* 5. Third-Party Links Disclaimer */}
                        <section className="policy-section">
                            <h2>5. Third-Party Links Disclaimer</h2>
                            <p>The Website may contain links to third-party websites. Smart Ink Guide does not control or endorse third-party content and is not responsible for their policies or practices. Accessing external websites is done at your own discretion and risk.</p>
                        </section>

                        {/* 6. Professional Advice Disclaimer */}
                        <section className="policy-section">
                            <h2>6. Professional Advice Disclaimer</h2>
                            <p>Content on this Website (buying guides, compatibility tools, articles) is for general informational purposes only.</p>
                            <div className="feature-grid">
                                <div className="feature-item"><h4>Technical Advice</h4><p>Consult manufacturer documentation or professionals</p></div>
                                <div className="feature-item"><h4>Business Decisions</h4><p>Evaluate independently based on needs</p></div>
                                <div className="feature-item"><h4>Legal Advice</h4><p>Nothing on this Website constitutes legal advice</p></div>
                            </div>
                        </section>

                        {/* 7. Limitation of Liability */}
                        <section className="policy-section">
                            <h2>7. Limitation of Liability</h2>
                            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, SMART INK GUIDE SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</p>
                            <p>Including but not limited to:</p>
                            <ul>
                                <li>Loss of profits, revenue, or business opportunities</li>
                                <li>Loss of data</li>
                                <li>Equipment damage or printer malfunction claims</li>
                            </ul>
                            <p className="policy-note">Our total aggregate liability shall not exceed the total amount paid for the specific product giving rise to the claim.</p>
                        </section>

                        {/* 8. Website Availability & Security */}
                        <section className="policy-section">
                            <h2>8. Website Availability & Security</h2>
                            <p>We do not guarantee that the Website will be available at all times, free from technical errors, or free from viruses. Users are responsible for maintaining appropriate security software.</p>
                        </section>

                        {/* 9. Changes to This Disclaimer */}
                        <section className="policy-section">
                            <h2>9. Changes to This Disclaimer</h2>
                            <p>Smart Ink Guide reserves the right to update, modify, or revise this Disclaimer at any time without prior notice. Changes become effective immediately upon posting.</p>
                        </section>

                        {/* 10. Contact Information */}
                        <div className="contact-info-box">
                            <h3>10. Contact Information</h3>
                            <p><strong>Smart Ink Guide - Legal & Compliance Department</strong><br />
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

export default Disclaimer;
