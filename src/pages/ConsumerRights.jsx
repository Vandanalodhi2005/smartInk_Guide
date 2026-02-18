import React from 'react';
import '../styles/PolicyPages.css';
import { Mail, MapPin, Globe } from 'lucide-react';

const ConsumerRights = () => {
    return (
        <div className="policy-page-wrapper">
            <main className="policy-main-content">
                {/* Hero Section */}
                <div className="policy-hero">
                    <div className="policy-hero-content">
                        <h1>Consumer Rights</h1>
                        <p className="last-updated">Effective Date: February 18, 2026</p>
                        <p className="intro-text">
                            Smart Ink Guide is committed to transparency, fairness, and compliance with applicable consumer protection laws.
                            <br /><br />
                            This page outlines your rights when purchasing products from <a href="https://www.smartinkguide.com" className="text-blue-200 hover:text-white underline">www.smartinkguide.com</a>.
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
                            <h3>Transparency</h3>
                            <p>Clear & accurate info</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.2s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                                </svg>
                            </div>
                            <h3>Security</h3>
                            <p>Safe transactions</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.3s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
                                </svg>
                            </div>
                            <h3>Fairness</h3>
                            <p>Complaint resolution</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="policy-content-card">

                        {/* 1. Right to Clear & Accurate Information */}
                        <section className="policy-section">
                            <h2>1. Right to Clear & Accurate Information</h2>
                            <p>You have the right to receive clear and accurate information regarding:</p>
                            <ul>
                                <li>Product descriptions and specifications</li>
                                <li>Pricing and shipping costs</li>
                                <li>Return policies and warranty coverage</li>
                            </ul>
                            <p className="policy-note">We strive to provide transparent details. If you believe any product information is inaccurate, please contact us immediately.</p>
                        </section>

                        {/* 2. Right to Secure Transactions */}
                        <section className="policy-section">
                            <h2>2. Right to Secure Transactions</h2>
                            <p>Customers have the right to a secure checkout experience using:</p>
                            <ul>
                                <li>Secure Socket Layer (SSL) encryption</li>
                                <li>Reputable third-party payment processors</li>
                                <li>Fraud prevention measures</li>
                            </ul>
                            <p>We do not store complete credit card information on our servers.</p>
                        </section>

                        {/* 3. Right to Order Confirmation */}
                        <section className="policy-section">
                            <h2>3. Right to Order Confirmation</h2>
                            <p>After placing an order, you have the right to receive:</p>
                            <ul>
                                <li>Order confirmation email</li>
                                <li>Payment confirmation</li>
                                <li>Shipping notification and tracking information (once shipped)</li>
                            </ul>
                            <p className="policy-note">If you do not receive confirmation, contact support promptly.</p>
                        </section>

                        {/* 4. Right to Return Eligible Products */}
                        <section className="policy-section">
                            <h2>4. Right to Return Eligible Products</h2>
                            <p>Under our Return & Refund Policy, you have the right to return eligible items within <strong>30 days</strong> from delivery, subject to stated conditions.</p>
                            <p>Return eligibility includes:</p>
                            <ul>
                                <li>Unused products in original packaging</li>
                                <li>Proof of purchase</li>
                            </ul>
                            <p>Certain products, such as opened consumables, may not qualify. Please review our Return & Refund Policy for details.</p>
                        </section>

                        {/* 5. Right to Warranty Coverage */}
                        <section className="policy-section">
                            <h2>5. Right to Warranty Coverage (Where Applicable)</h2>
                            <p>Customers have the right to review warranty information, submit claims directly to the manufacturer, and seek assistance from us in locating warranty resources.</p>
                            <p className="policy-note">Smart Ink Guide does not provide additional warranties beyond those offered by manufacturers unless explicitly stated.</p>
                        </section>

                        {/* 6. Right to Privacy & Data Protection */}
                        <section className="policy-section">
                            <h2>6. Right to Privacy & Data Protection</h2>
                            <p>You have the right to know what personal info we collect, request access/correction/deletion of your data.</p>
                            <p>Smart Ink Guide does not sell personal information. For privacy-related requests, contact <a href="mailto:support@smartinkguide.com">support@smartinkguide.com</a>.</p>
                        </section>

                        {/* 7. Right to Fair Complaint Resolution */}
                        <section className="policy-section">
                            <h2>7. Right to Fair Complaint Resolution</h2>
                            <p>If you are dissatisfied, you have the right to Contact customer support, Submit a complaint, or Request review of your case.</p>
                            <p>To submit a complaint, email <strong>support@smartinkguide.com</strong> with your order number and detailed description. We typically respond within 24 business hours.</p>
                        </section>

                        {/* 8. Right to Protection Against Fraudulent Activity */}
                        <section className="policy-section">
                            <h2>8. Right to Protection Against Fraudulent Activity</h2>
                            <p>We implement fraud detection protocols to protect customers. If you believe your transaction was unauthorized, notify us immediately.</p>
                        </section>

                        {/* 9. Compliance with U.S. Consumer Protection Laws */}
                        <section className="policy-section">
                            <h2>9. Compliance with U.S. Consumer Protection Laws</h2>
                            <p>Smart Ink Guide operates in accordance with applicable U.S. consumer protection laws. Nothing in our policies limits rights that cannot legally be waived. If policies conflict with applicable law, consumer statutory rights will prevail.</p>
                        </section>

                        {/* 10. Independent Retailer Disclosure */}
                        <section className="policy-section">
                            <h2>10. Independent Retailer Disclosure</h2>
                            <p>Smart Ink Guide operates as an independent online retailer. We are not affiliated with, endorsed by, or sponsored by printer manufacturers unless explicitly stated.</p>
                        </section>

                        {/* 11. Policy Updates */}
                        <section className="policy-section">
                            <h2>11. Policy Updates</h2>
                            <p>We reserve the right to update this Consumer Rights page at any time. Changes become effective upon posting.</p>
                        </section>

                        {/* 12. Contact Information */}
                        <div className="contact-info-box">
                            <h3>12. Contact Information</h3>
                            <p><strong>Smart Ink Guide - Customer Relations Department</strong><br />
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

export default ConsumerRights;
