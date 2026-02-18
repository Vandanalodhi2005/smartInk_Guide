import React from 'react';
import './HomeValues.css';

const HomeValues = () => {
    const values = [
        {
            title: 'Free Shipping',
            description: 'On Qualifying Orders',
            icon: '🚚'
        },
        {
            title: '30-Day Returns',
            description: 'Hassle-free return policy',
            icon: '↩️'
        },
        {
            title: 'Manufacturer Warranty',
            description: 'Full coverage on eligible items',
            icon: '🛡️'
        },
        {
            title: 'Secure Payment',
            description: '100% Secure Processing',
            icon: '🔒'
        }
    ];

    return (
        <section className="home-values">
            <div className="values-container">
                <h2 className="section-title text-center">Trust & Value</h2>
                <div className="values-grid">
                    {values.map((value, index) => (
                        <div key={index} className={`value-card ${value.title === 'Independence' ? 'independence' : ''}`}>
                            <div className="value-icon">{value.icon}</div>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                            {value.details && <p className="value-details">{value.details}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeValues;
