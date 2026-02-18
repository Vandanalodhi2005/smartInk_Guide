import '../styles/PolicyPages.css';
import { Mail, MapPin, Globe } from 'lucide-react';

const CookiePolicy = () => {
    return (
        <div className="policy-page-wrapper">
            <main className="policy-main-content">
                {/* Hero Section */}
                <div className="policy-hero">
                    <div className="policy-hero-content">
                        <h1>Cookie Policy</h1>
                        <p className="last-updated">Effective Date: February 18, 2026</p>
                        <p className="intro-text">
                            This Cookie Policy explains how Smart Ink Guide uses cookies and similar technologies when you visit
                            <a href="https://www.smartinkguide.com" className="text-blue-200 hover:text-white underline"> www.smartinkguide.com</a>.
                            <br /><br />
                            By continuing to use our Website, you consent to the use of cookies in accordance with this Policy.
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
                            <h3>Essential</h3>
                            <p>Required for site function</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.2s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                </svg>
                            </div>
                            <h3>Analytics</h3>
                            <p>To improve user experience</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.3s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                                </svg>
                            </div>
                            <h3>Control</h3>
                            <p>Manage via browser settings</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="policy-content-card">

                        {/* 1. What Are Cookies? */}
                        <section className="policy-section">
                            <h2>1. What Are Cookies?</h2>
                            <p>Cookies are small text files placed on your device when you visit a website. Cookies help websites function properly and provide information to website owners.</p>
                            <p>Cookies may:</p>
                            <ul>
                                <li>Store user preferences</li>
                                <li>Enable secure login</li>
                                <li>Analyze website performance</li>
                                <li>Track browsing activity</li>
                                <li>Support advertising and remarketing</li>
                            </ul>
                            <p className="policy-note">Cookies do not typically contain personally identifiable information but may be linked to personal data we hold about you.</p>
                        </section>

                        {/* 2. Types of Cookies We Use */}
                        <section className="policy-section">
                            <h2>2. Types of Cookies We Use</h2>
                            <p>Smart Ink Guide uses the following categories of cookies:</p>

                            <h3>A. Essential Cookies</h3>
                            <p>These cookies are necessary for the Website to function properly (e.g., Secure checkout, Shopping cart functionality, Account authentication, Fraud prevention). These cookies cannot be disabled through our systems.</p>

                            <h3>B. Performance & Analytics Cookies</h3>
                            <p>These cookies collect information about how visitors use our Website (e.g., Pages visited, Time spent, Navigation patterns). This data helps us improve usability and optimize customer experience.</p>

                            <h3>C. Functional Cookies</h3>
                            <p>These cookies allow the Website to remember user preferences (Language, Region, Viewed products). They enhance user experience but are not strictly required.</p>

                            <h3>D. Advertising & Marketing Cookies</h3>
                            <p>These cookies may be used to deliver relevant advertisements, limit repetitive ads, and measure effectiveness. They may be set by third-party platforms and track browsing behavior across websites.</p>
                        </section>

                        {/* 3. Third-Party Cookies */}
                        <section className="policy-section">
                            <h2>3. Third-Party Cookies</h2>
                            <p>Some cookies may be placed by third-party service providers (Analytics, Payment processing, Fraud detection, Advertising). Smart Ink Guide does not control third-party cookie policies. Users are encouraged to review the privacy policies of those third parties.</p>
                        </section>

                        {/* 4. How Long Cookies Remain on Your Device */}
                        <section className="policy-section">
                            <h2>4. How Long Cookies Remain on Your Device</h2>
                            <p>Cookies may be:</p>
                            <ul>
                                <li><strong>Session Cookies:</strong> Deleted automatically when you close your browser.</li>
                                <li><strong>Persistent Cookies:</strong> Remain stored until they expire or are manually deleted.</li>
                            </ul>
                            <p>Retention periods vary depending on cookie type and purpose.</p>
                        </section>

                        {/* 5. How to Control Cookies */}
                        <section className="policy-section">
                            <h2>5. How to Control Cookies</h2>
                            <p>You can control or disable cookies through your browser settings. Most browsers allow you to view stored cookies, delete cookies, block third-party cookies, or disable all cookies.</p>
                            <p className="policy-note">Disabling certain cookies may affect Website functionality, including checkout and account access.</p>
                        </section>

                        {/* 6. “Do Not Track” Signals */}
                        <section className="policy-section">
                            <h2>6. “Do Not Track” Signals</h2>
                            <p>Currently, there is no universal standard for "Do Not Track" (DNT) signals. As a result, our Website does not respond to DNT signals at this time.</p>
                        </section>

                        {/* 7. California Privacy Rights (CCPA/CPRA) */}
                        <section className="policy-section">
                            <h2>7. California Privacy Rights (CCPA/CPRA)</h2>
                            <p>California residents have the right to know what personal data is collected, request deletion, and opt out of sale/sharing of personal info. Smart Ink Guide does not sell personal information.</p>
                            <p>To exercise privacy rights, contact <a href="mailto:support@smartinkguide.com">support@smartinkguide.com</a>. For more information, please review our Privacy Policy.</p>
                        </section>

                        {/* 8. Updates to This Cookie Policy */}
                        <section className="policy-section">
                            <h2>8. Updates to This Cookie Policy</h2>
                            <p>We reserve the right to update this Cookie Policy at any time. Changes become effective upon posting. Your continued use of the Website after updates constitutes acceptance of the revised Policy.</p>
                        </section>

                        {/* 9. Contact Information */}
                        <div className="contact-info-box">
                            <h3>9. Contact Information</h3>
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

export default CookiePolicy;
