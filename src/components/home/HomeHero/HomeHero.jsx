import React from 'react';
import { Link } from 'react-router-dom';
import './HomeHero.css';

const HomeHero = () => {
    return (
        <section className="home-hero">
            <div className="home-hero-background"></div>
            <div className="home-hero-content">
                <div className="home-hero-text">
                    <h1>
                        Print Smart. Choose Better. Shop with Confidence.
                    </h1>
                    <p className="hero-mission ">
                        Find reliable printers, ink, toner, and printing essentials for home and office needs.
                    </p>
                    <p className="hero-mission">
                        At Prints Carts, we make it simple to explore genuine-quality products with clear information,
                        smooth browsing, and a customer-first shopping experience.
                    </p>

                    <div className="home-hero-actions">
                        <Link to="/browse-printers" className="home-btn primary">Shop Now</Link>
                    </div>
                </div>

                <div className="home-hero-image">
                    <img
                        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600"
                        alt="Modern printer setup"
                    />
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
