import '../styles/PolicyPages.css';
import { Mail, MapPin, Globe } from 'lucide-react';

const Accessibility = () => {
    return (
        <div className="policy-page-wrapper">
            <main className="policy-main-content">
                {/* Hero Section */}
                <div className="policy-hero">
                    <div className="policy-hero-content">
                        <h1>Accessibility Statement</h1>
                        <p className="last-updated">Effective Date: February 18, 2026</p>
                        <p className="intro-text">
                            Smart Ink Guide is committed to ensuring digital accessibility for all users, including individuals with disabilities.
                            <br /><br />
                            We are continually improving the user experience for everyone and applying relevant accessibility standards to enhance usability and inclusivity.
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
                            <h3>Inclusivity</h3>
                            <p>Accessible for everyone</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.2s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                </svg>
                            </div>
                            <h3>Standards</h3>
                            <p>WCAG 2.1 Level AA</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.3s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
                                </svg>
                            </div>
                            <h3>Support</h3>
                            <p>Here to assist you</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="policy-content-card">

                        {/* 1. Our Commitment to Accessibility */}
                        <section className="policy-section">
                            <h2>1. Our Commitment to Accessibility</h2>
                            <p>Smart Ink Guide strives to make our Website accessible and usable for all individuals, regardless of ability or technology. We are committed to:</p>
                            <ul>
                                <li>Providing an inclusive digital experience</li>
                                <li>Removing accessibility barriers where feasible</li>
                                <li>Improving usability for assistive technologies</li>
                                <li>Monitoring accessibility performance</li>
                            </ul>
                            <p className="policy-note">Accessibility is an ongoing effort, and we continuously review our website to identify improvements.</p>
                        </section>

                        {/* 2. Accessibility Standards */}
                        <section className="policy-section">
                            <h2>2. Accessibility Standards</h2>
                            <p>We aim to conform, where reasonably practicable, to:</p>
                            <ul>
                                <li>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</li>
                                <li>Applicable provisions of the Americans with Disabilities Act (ADA)</li>
                            </ul>
                            <p>While we strive for compliance, some content may not yet fully meet every standard due to the evolving nature of web technologies.</p>
                        </section>

                        {/* 3. Measures We Take to Support Accessibility */}
                        <section className="policy-section">
                            <h2>3. Measures We Take to Support Accessibility</h2>
                            <p>We take reasonable steps to improve accessibility, including:</p>
                            <div className="feature-grid">
                                <div className="feature-item"><h4>Typography</h4><p>Readable fonts and sufficient contrast</p></div>
                                <div className="feature-item"><h4>Alt Text</h4><p>Alternative text for images</p></div>
                                <div className="feature-item"><h4>Structure</h4><p> structured heading hierarchy</p></div>
                                <div className="feature-item"><h4>Navigation</h4><p>Keyboard navigability</p></div>
                            </div>
                            <p className="mt-4">We also test website functionality on multiple devices and work with third-party service providers to encourage accessible integrations.</p>
                        </section>

                        {/* 4. Ongoing Improvements */}
                        <section className="policy-section">
                            <h2>4. Ongoing Improvements</h2>
                            <p>Accessibility is an ongoing process. We periodically review website content, evaluate new technologies, update components, and address issues brought to our attention.</p>
                            <p className="policy-note">We welcome feedback from users regarding accessibility improvements.</p>
                        </section>

                        {/* 5. Third-Party Content */}
                        <section className="policy-section">
                            <h2>5. Third-Party Content</h2>
                            <p>Our Website may include third-party content or integrations (Payment processors, Embedded tools, etc.). We do not control third-party accessibility standards but encourage those providers to maintain accessible practices.</p>
                        </section>

                        {/* 6. Known Limitations */}
                        <section className="policy-section">
                            <h2>6. Known Limitations</h2>
                            <p>Despite our best efforts, certain limitations may exist due to third-party plugins, legacy content, or rapid technology updates. If you encounter difficulty accessing any part of our Website, please contact us so we can assist you.</p>
                        </section>

                        {/* 7. Requesting Assistance */}
                        <section className="policy-section">
                            <h2>7. Requesting Assistance</h2>
                            <p>If you experience difficulty accessing content, need assistance placing an order, or encounter accessibility barriers, please contact us.</p>
                            <p>When contacting us, please include:</p>
                            <ul>
                                <li>A description of the issue</li>
                                <li>The webpage URL (if applicable)</li>
                                <li>The device or browser used</li>
                            </ul>
                            <p className="policy-note">We will make reasonable efforts to provide the information or assistance you need in an alternative format.</p>
                        </section>

                        {/* 8. Policy Updates */}
                        <section className="policy-section">
                            <h2>8. Policy Updates</h2>
                            <p>We reserve the right to update this Accessibility Statement at any time to reflect improvements or regulatory changes. Updates become effective upon posting.</p>
                        </section>

                        {/* Independent Retailer Disclosure */}
                        <section className="policy-section">
                            <h2>Independent Retailer Disclosure</h2>
                            <p>Smart Ink Guide operates as an independent online retailer and is not affiliated with printer manufacturers unless explicitly stated.</p>
                        </section>

                        {/* 9. Contact Information */}
                        <div className="contact-info-box">
                            <h3>9. Contact Information</h3>
                            <p><strong>Smart Ink Guide - Accessibility Support</strong><br />
                                30 N GOULD STREET SUITE R<br />
                                SHERIDAN, WY 82801<br />
                                United States</p>
                            <p className="mt-2">Email: <a href="mailto:support@smartinkguide.com">support@smartinkguide.com</a></p>
                            <p className="mt-2">We aim to respond within 24 business hours.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Accessibility;
