import React from 'react';
import Counter from '../../common/Counter';
import './AboutStats.css';

const stats = [
    { label: 'Satisfied Customers', value: 15000, suffix: '+' },
    { label: 'Products Available', value: 2500, suffix: '+' },
    { label: 'Orders Delivered', value: 50000, suffix: '+' },
    { label: 'Expert Support', value: 24, suffix: '/7' },
];

const AboutStats = () => {
    return (
        <section className="about-stats-container">
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card animated-gradient-border">
                        <div className="stat-value">
                            <Counter value={stat.value} suffix={stat.suffix} />
                        </div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutStats;
