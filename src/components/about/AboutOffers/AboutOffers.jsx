import React from 'react';
import './AboutOffers.css';

const AboutOffers = () => {
    return (
        <section className="what-we-offer">
            <h2>What We Offer</h2>
            <div className="offer-grid">
                <div className="offer-card">
                    <div className="offer-icon">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <rect width="48" height="48" rx="8" fill="#e0f2fe" />
                            <path d="M20 10L24 18H32L26 24L28 32L20 26L12 32L14 24L8 18H16L20 10Z" fill="#60a5fa" />
                        </svg>
                    </div>
                    <h3>A Diverse Selection of Printing Essentials</h3>
                    <p>
                        From compact home-use printers to office-ready machines, and from ink and toner to
                        printer-friendly paper, Prints Carts provides a wide range of products to meet different
                        printing needs.
                    </p>
                </div>

                <div className="offer-card">
                    <div className="offer-icon">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <rect width="48" height="48" rx="8" fill="#e0f2fe" />
                            <path d="M24 16C20.69 16 18 18.69 18 22V26C18 29.31 20.69 32 24 32C27.31 32 30 29.31 30 26V22C30 18.69 27.31 16 24 16Z" fill="#60a5fa" />
                        </svg>
                    </div>
                    <h3>Accurate Product Details</h3>
                    <p>
                        We ensure that product descriptions, compatibility information, and specifications are
                        presented clearly. This helps you choose the right items without confusion or uncertainty.
                    </p>
                </div>

                <div className="offer-card">
                    <div className="offer-icon">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <rect width="48" height="48" rx="8" fill="#e0f2fe" />
                            <path d="M16 20H32V22H16V20Z" fill="#60a5fa" />
                            <path d="M16 24H28V26H16V24Z" fill="#60a5fa" />
                            <path d="M20 28H32V30H20V28Z" fill="#60a5fa" />
                        </svg>
                    </div>
                    <h3>Convenient & Secure Shopping Experience</h3>
                    <p>
                        Our website is designed for easy browsing, simple checkout, and secure payment processing.
                        We use industry-standard practices to help protect your personal information.
                    </p>
                </div>

                <div className="offer-card">
                    <div className="offer-icon">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <rect width="48" height="48" rx="8" fill="#e0f2fe" />
                            <circle cx="24" cy="20" r="4" stroke="#60a5fa" strokeWidth="2" fill="none" />
                            <path d="M16 32C16 28 20 26 24 26C28 26 32 28 32 32" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <h3>Customer-Focused Assistance</h3>
                    <p>
                        Our support team is available to help with product inquiries, order status updates,
                        and basic questions about printing supplies. While we do not provide repair, setup,
                        or troubleshooting services, we are always happy to assist with shopping-related questions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutOffers;
