import React from 'react';
import { motion } from 'framer-motion';
import './AboutWhoWeAre.css';

const AboutWhoWeAre = () => {
    return (
        <section className="who-we-are-section">
            <div className="who-we-are-container">
                {/* Content Side (Left) */}
                <motion.div
                    className="who-we-are-content"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <span className="section-badge">Our Story</span>
                    <h2 className="who-we-are-title">Who We Are</h2>
                    <div className="who-we-are-desc">
                        <p>
                            Prints Carts was created with a straightforward goal: <strong>to provide reliable products
                                with transparent information and a smooth online shopping experience.</strong>
                        </p>
                        <p>
                            We operate independently and are not directly affiliated with any printer manufacturer.
                            Our platform brings together a range of genuine-quality products sourced through trusted
                            channels so consumers can conveniently find what they need in one place.
                        </p>
                        <p>
                            What sets us apart is our commitment to clarity, customer care, and consistent professionalism.
                            Whether you're restocking ink or upgrading your home printer, we aim to offer a straightforward
                            retail experience built around honesty and ease.
                        </p>
                    </div>

                    <div className="who-we-are-stats">
                        <div className="stat-pill">
                            <span className="pill-val">Independent</span>
                        </div>
                        <div className="stat-pill">
                            <span className="pill-val">Transparent</span>
                        </div>
                        <div className="stat-pill">
                            <span className="pill-val">Professional</span>
                        </div>
                    </div>
                </motion.div>

                {/* Image Side (Right) */}
                <motion.div
                    className="who-we-are-image"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="who-image-wrapper animated-gradient-border">
                        <img
                            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
                            alt="Professional Team Support"
                        />
                        <div className="who-image-overlay"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutWhoWeAre;
