import React from 'react';
import '../styles/PolicyPages.css';
import { Mail, MapPin, Globe } from 'lucide-react';

const RefundReturnPolicy = () => {
    return (
        <div className="policy-page-wrapper">
            <main className="policy-main-content">
                {/* Hero Section */}
                <div className="policy-hero">
                    <div className="policy-hero-content">
                        <h1>Return & Refund Policy</h1>
                        <p className="last-updated">Effective Date: February 18, 2026</p>
                        <p className="intro-text">
                            Smart Ink Guide is committed to customer satisfaction. This Return & Refund Policy explains the conditions under which returns, exchanges, and refunds are accepted.
                            <br /><br />
                            By placing an order on <a href="https://www.smartinkguide.com" className="text-blue-200 hover:text-white underline">www.smartinkguide.com</a>, you agree to the terms outlined below.
                        </p>
                    </div>
                </div>

                <div className="policy-content-container">
                    {/* Quick Info Cards - Kept for consistency */}
                    <div className="policy-info-cards">
                        <div className="policy-info-card" style={{ animationDelay: '0.1s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                                </svg>
                            </div>
                            <h3>30-Day Returns</h3>
                            <p>Eligible returns accepted within 30 days</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.2s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                                </svg>
                            </div>
                            <h3>Secure Process</h3>
                            <p>RMA required for all returns</p>
                        </div>

                        <div className="policy-info-card" style={{ animationDelay: '0.3s' }}>
                            <div className="icon-wrapper">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                                </svg>
                            </div>
                            <h3>Refunds</h3>
                            <p>Processed to original payment method</p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="policy-content-card">

                        {/* 1. 30-Day Return Window */}
                        <section className="policy-section">
                            <h2>1. 30-Day Return Window</h2>
                            <p>We accept eligible returns within <strong>30 calendar days</strong> from the date of delivery.</p>
                            <ul>
                                <li>After 30 days, items are no longer eligible for return unless otherwise required by law.</li>
                                <li>The delivery date is determined by the shipping carrier’s tracking confirmation.</li>
                            </ul>
                        </section>

                        {/* 2. Return Eligibility Requirements */}
                        <section className="policy-section">
                            <h2>2. Return Eligibility Requirements</h2>
                            <p>To qualify for a return, all of the following conditions must be met:</p>
                            <div className="feature-grid">
                                <div className="feature-item"><h4>Unopened</h4><p>Product must be unused and unopened</p></div>
                                <div className="feature-item"><h4>Original Packaging</h4><p>Includes all accessories & manuals</p></div>
                                <div className="feature-item"><h4>No Damage</h4><p>No visible damage from misuse</p></div>
                                <div className="feature-item"><h4>Authorized</h4><p>RMA number issued</p></div>
                            </div>
                            <p className="policy-note">Items returned without prior authorization may be refused.</p>
                        </section>

                        {/* 3. Non-Returnable Items */}
                        <section className="policy-section">
                            <h2>3. Non-Returnable Items</h2>
                            <p>For product integrity, hygiene, and anti-fraud protection, the following items are not eligible for return:</p>
                            <ul>
                                <li>Opened ink cartridges</li>
                                <li>Opened toner cartridges</li>
                                <li>Installed or used consumables</li>
                                <li>Clearance or final sale items</li>
                                <li>Special-order or custom-configured items</li>
                                <li>Items damaged due to improper installation</li>
                            </ul>
                            <p className="policy-note">We reserve the right to inspect all returned merchandise before issuing a refund.</p>
                        </section>

                        {/* 4. Restocking Fees */}
                        <section className="policy-section">
                            <h2>4. Restocking Fees</h2>
                            <p>To cover handling, inspection, and repackaging costs, restocking fees may apply:</p>
                            <ul>
                                <li><strong>Unopened items:</strong> up to 10%</li>
                                <li><strong>Open-box (resalable condition):</strong> up to 20%</li>
                                <li><strong>Missing packaging/accessories:</strong> up to 25%</li>
                            </ul>
                            <p>Restocking fees are deducted from the refund amount. No restocking fee applies if the return is due to incorrect item shipped, manufacturer defect, or verified shipping damage.</p>
                        </section>

                        {/* 5. Return Authorization (RMA Process) */}
                        <section className="policy-section">
                            <h2>5. Return Authorization (RMA Process)</h2>
                            <p>To initiate a return:</p>
                            <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-700">
                                <li>Email <a href="mailto:support@smartinkguide.com" className="text-blue-600 underline">support@smartinkguide.com</a></li>
                                <li>Provide order number & reason for return</li>
                                <li>Provide photos if item is damaged or defective</li>
                            </ol>
                            <div className="bg-blue-50 p-4 rounded-lg mt-4 border-l-4 border-blue-500">
                                <p className="text-sm"><strong>If approved, you will receive:</strong> Return instructions, RMA number, and Return shipping address.</p>
                            </div>
                            <p className="text-sm mt-2 text-red-500">Returns sent without an RMA number may be refused or delayed.</p>
                        </section>

                        {/* 6. Return Shipping Responsibility */}
                        <section className="policy-section">
                            <h2>6. Return Shipping Responsibility</h2>
                            <p>Unless the return is due to Smart Ink Guide error:</p>
                            <ul>
                                <li>Customers are responsible for return shipping costs</li>
                                <li>Original shipping charges are non-refundable</li>
                                <li>We recommend using a trackable shipping service</li>
                            </ul>
                            <p className="policy-note">Smart Ink Guide is not responsible for lost return shipments.</p>
                        </section>

                        {/* 7. Refund Processing */}
                        <section className="policy-section">
                            <h2>7. Refund Processing</h2>
                            <p>After we receive and inspect the returned item:</p>
                            <ul>
                                <li>Refunds are processed within 5–7 business days</li>
                                <li>Refunds are issued to the original payment method</li>
                                <li>Bank processing times may vary</li>
                            </ul>
                        </section>

                        {/* 8. Damaged, Defective, or Incorrect Items */}
                        <section className="policy-section">
                            <h2>8. Damaged, Defective, or Incorrect Items</h2>
                            <p>If your item arrives damaged, defective, or incorrect, you must notify us within <strong>48 hours</strong> of delivery.</p>
                            <p>Provide: Clear photos of packaging/product, Order number, Description of issue.</p>
                            <p className="policy-note">Failure to report damage within 48 hours may void eligibility.</p>
                        </section>

                        {/* 9. Exchanges */}
                        <section className="policy-section">
                            <h2>9. Exchanges</h2>
                            <p>We do not process direct exchanges. If you wish to exchange an item:</p>
                            <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-700">
                                <li>Initiate a return for the original item</li>
                                <li>Place a new order separately</li>
                            </ol>
                            <p>This ensures faster processing and inventory accuracy.</p>
                        </section>

                        {/* 10. Order Cancellations */}
                        <section className="policy-section">
                            <h2>10. Order Cancellations</h2>
                            <p>Orders may be canceled only if they have not yet been processed or shipped. If the order has already shipped, it must follow the standard return process.</p>
                        </section>

                        {/* 11. Fraud Prevention & Abuse Protection */}
                        <section className="policy-section">
                            <h2>11. Fraud Prevention & Abuse Protection</h2>
                            <p>We reserve the right to refuse returns from accounts with excessive return activity or deny returns showing signs of product misuse.</p>
                        </section>

                        {/* 12. Manufacturer Warranty Claims */}
                        <section className="policy-section">
                            <h2>12. Manufacturer Warranty Claims</h2>
                            <p>If the issue arises outside our return window but within manufacturer warranty, customers must contact the manufacturer directly. Warranty approval is determined solely by the manufacturer.</p>
                        </section>

                        {/* 13. Limitation of Liability */}
                        <section className="policy-section">
                            <h2>13. Limitation of Liability</h2>
                            <p>Smart Ink Guide shall not be liable for installation errors, printer damage allegedly caused by consumables, indirect/consequential damages, or loss of business/income.</p>
                        </section>

                        {/* 14. Independent Retailer Disclosure */}
                        <section className="policy-section">
                            <h2>14. Independent Retailer Disclosure</h2>
                            <p>Smart Ink Guide operates as an independent online retailer. We are not affiliated with printer manufacturers unless explicitly stated.</p>
                        </section>

                        {/* 15. Policy Updates */}
                        <section className="policy-section">
                            <h2>15. Policy Updates</h2>
                            <p>We reserve the right to modify this Return & Refund Policy at any time. Updates become effective upon posting on this page.</p>
                        </section>

                        {/* 16. Contact Information */}
                        <div className="contact-info-box">
                            <h3>16. Contact Information for Returns</h3>
                            <p><strong>Smart Ink Guide - Returns Department</strong><br />
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

export default RefundReturnPolicy;
