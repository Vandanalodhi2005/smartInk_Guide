import React from 'react';
import './ReturnAssistance.css';

const ReturnAssistance = () => {
    return (
        <section className="return-assistance">
            <div className="assistance-card">
                <h2>Need Assistance?</h2>
                <div className="assistance-links">
                    <a href="mailto:support@printscarts.com" className="assistance-item">
                        <div className="assistance-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </div>
                        <div className="assistance-text">
                            <h3>Email Support</h3>
                            <p>support@printscarts.com</p>
                        </div>
                    </a>

                    <a href="https://www.printscarts.com" target="_blank" rel="noopener noreferrer" className="assistance-item">
                        <div className="assistance-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                            </svg>
                        </div>
                        <div className="assistance-text">
                            <h3>Live Chat</h3>
                            <p>Available on www.printscarts.com</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ReturnAssistance;
