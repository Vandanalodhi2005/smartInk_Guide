import '../styles/PolicyPages.css';
import { motion } from 'framer-motion';

const Accessibility = () => {
    return (
        <div className="policy-page-wrapper">
            <main className="policy-main-content">
                {/* Hero Section */}
                <section className="policy-hero redesigned-hero">
                    <motion.div
                        className="policy-hero-content"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Accessibility Statement</h1>
                        <p className="last-updated">Last Updated: January 26, 2026</p>
                        <p className="intro-text">
                            At Prints Carts, inclusivity is a priority. We are committed to making our website fully accessible, 
                            ensuring an equal, seamless experience for everyone.
                        </p>
                    </motion.div>
                </section>

                {/* Quick Info Cards */}
                <section className="policy-info-cards redesigned-cards">
                    {[
                        {
                            title: "WCAG 2.1 AA",
                            text: "Following recognized accessibility standards",
                            icon: "✔️",
                        },
                        {
                            title: "Inclusive Experience",
                            text: "Barrier-free shopping for all users",
                            icon: "🌐",
                        },
                        {
                            title: "Feedback Driven",
                            text: "We listen and improve based on your suggestions",
                            icon: "🗣️",
                        },
                        {
                            title: "Continuous Updates",
                            text: "Ongoing improvements for accessibility",
                            icon: "🔄",
                        },
                    ].map((card, index) => (
                        <motion.div
                            className="policy-info-card redesigned-card"
                            key={index}
                            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="icon-wrapper">{card.icon}</div>
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </motion.div>
                    ))}
                </section>

                {/* Main Content */}
                <section className="policy-content-container redesigned-content">
                    {/* Commitment Section */}
                    <motion.div
                        className="policy-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Our Commitment</h2>
                        <p>We follow recognized accessibility guidelines to ensure all users can access our site:</p>
                        <div className="feature-grid redesigned-grid">
                            {[
                                { title: "✅ WCAG 2.1 AA", desc: "Web Content Accessibility Guidelines" },
                                { title: "✅ ADA Title III", desc: "Americans with Disabilities Act" },
                                { title: "✅ Section 508", desc: "Federal accessibility standards" },
                            ].map((item, i) => (
                                <div className="feature-item redesigned-feature" key={i}>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Accessibility Features */}
                    <motion.div
                        className="policy-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h2>Accessibility Features</h2>
                        <p>Prints Carts implements the following features for an inclusive experience:</p>
                        <div className="feature-grid redesigned-grid">
                            {[
                                { title: "⌨️ Keyboard Navigation", desc: "Full site navigation via keyboard" },
                                { title: "🔊 Screen Reader Support", desc: "Compatible with assistive tools" },
                                { title: "🖼️ Text Alternatives", desc: "Alt text for all images" },
                                { title: "📋 Clear Structure", desc: "Consistent headings and layout" },
                                { title: "🔍 Adjustable Text", desc: "Zoom and resize without loss" },
                                { title: "🎨 Color Contrast", desc: "WCAG-compliant contrast ratios" },
                                { title: "🧭 Predictable Navigation", desc: "Consistent menus and paths" },
                                { title: "📱 Responsive Design", desc: "Works on all devices and sizes" },
                            ].map((item, i) => (
                                <div className="feature-item redesigned-feature" key={i}>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Ongoing Efforts */}
                    <motion.div
                        className="policy-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2>Ongoing Accessibility Efforts</h2>
                        <ul className="redesigned-list">
                            <li>Regularly review website content for accessibility compliance</li>
                            <li>Enhance navigation and overall UX</li>
                            <li>Test pages with assistive technologies</li>
                            <li>Update features to support more tools and devices</li>
                            <li>Integrate user feedback for improvements</li>
                            <li>Train our team on accessibility best practices</li>
                        </ul>
                        <p className="policy-note">
                            Accessibility is a continuous process, and we strive for reasonable updates as standards evolve.
                        </p>
                    </motion.div>

                    {/* Contact Section */}
                    <motion.div
                        className="policy-section contact-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h2>Need Assistance?</h2>
                        <p>If you encounter any accessibility issues, we want to help promptly.</p>
                        <div className="feature-grid redesigned-grid">
                            <div className="feature-item redesigned-feature">
                                <h4>📧 Email Support</h4>
                                <p><a href="mailto:support@smartinkguide.com">support@smartinkguide.com</a></p>
                            </div>
                            <div className="feature-item redesigned-feature">
                                <h4>📍 Mailing Address</h4>
                                <p>7181 Beacon Dr 15<br />Reno, NV 89506</p>
                            </div>
                        </div>
                        <h3>When Contacting Us, Please Include:</h3>
                        <ul className="redesigned-list">
                            <li>The page or feature you were trying to access</li>
                            <li>The nature of the accessibility issue</li>
                            <li>Assistive technologies you were using</li>
                            <li>Browser and device details</li>
                        </ul>
                    </motion.div>

                    {/* Feedback Section */}
                    <motion.div
                        className="policy-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2>Feedback & Suggestions</h2>
                        <p>We welcome all accessibility feedback to improve our site experience.</p>
                        <p className="policy-note">
                            Your input ensures we maintain an inclusive, comfortable, and usable platform for all visitors.
                        </p>
                    </motion.div>
                </section>
            </main>
        </div>
    );
};

export default Accessibility;
