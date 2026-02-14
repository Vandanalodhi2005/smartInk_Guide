import React from 'react';
import { motion } from 'framer-motion';
import FloatingDots from '../../common/FloatingDots';
import './AboutHero.css';

const AboutHero = () => {
    return (
        <section className="about-hero-section main-content">
            <FloatingDots />
            <div className="about-hero-container">
                {/* Image Side (Left) */}
                <motion.div
                    className="about-hero-image"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="image-wrapper animated-gradient-border">
                        <img
                            src="https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=800"
                            alt="Premium Printer Setup"
                        />
                        <div className="image-overlay"></div>
                    </div>
                </motion.div>

                {/* Content Side (Right) */}
                <motion.div
                    className="about-hero-content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <span className="about-badge">Technology & Precision</span>
                    <h1 className="about-hero-title">About Us – <span className="highlight-text">Prints Carts</span></h1>
                    <h2 className="about-hero-subtitle">Your Reliable Destination for Printing Essentials</h2>

                    <div className="about-hero-desc">
                        <p>
                            Prints Carts is an independent online retailer offering a curated selection of printers,
                            ink cartridges, toner, and everyday printing supplies.
                        </p>
                        <p>
                            We focus on accurate information, easy navigation, and responsive customer
                            assistance—so you can shop confidently and make informed decisions every time.
                        </p>
                    </div>

                    <div className="about-hero-features">
                        <div className="feature-item">
                            <span className="feature-dot"></span>
                            <span>Transparent Listings</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-dot"></span>
                            <span>Verified Compatibility</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-dot"></span>
                            <span>Expert Support</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="scroll-indicator">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="indicator-dot"
                />
            </div>
        </section>
    );
};

export default AboutHero;
