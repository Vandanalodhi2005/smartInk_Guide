import React from 'react';
import { Link } from 'react-router-dom';
import { Printer, DollarSign, Wrench, Droplet, ArrowRight, BookOpen } from 'lucide-react';
import './HomePeaceOfMind.css';

const HomePeaceOfMind = () => {
    return (
        <section className="home-peace">
            <div className="peace-overlay"></div>
            <div className="peace-container">
                <div className="peace-header">
                    <span className="peace-subtitle">Knowledge Center</span>
                    <h2 className="peace-title">Complete Printing Support Resources</h2>
                    <p className="peace-description">
                        Beyond products, we provide the expertise you need. Explore our comprehensive guides on buying, maintaining, and optimizing your printing setup.
                    </p>
                    <Link to="/blogs" className="peace-cta-btn">
                        Visit Resource Center <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="peace-grid-wrapper">
                    <div className="peace-grid">
                        <Link to="/blogs/printer-buying-guide" className="resource-card">
                            <div className="card-icon-wrapper">
                                <Printer size={32} className="card-icon" />
                            </div>
                            <div className="card-content">
                                <h3>Printer Buying Guide</h3>
                                <p>Expert advice on choosing between inkjet and laser for your specific needs.</p>
                                <span className="read-more">Read Guide <ArrowRight size={14} /></span>
                            </div>
                        </Link>

                        <Link to="/blogs/reduce-printing-costs" className="resource-card">
                            <div className="card-icon-wrapper">
                                <DollarSign size={32} className="card-icon" />
                            </div>
                            <div className="card-content">
                                <h3>Reduce Printing Costs</h3>
                                <p>Smart strategies to lower your cost-per-page without sacrificing quality.</p>
                                {/* <span className="read-more">Read Guide <ArrowRight size={14} /></span> */}
                            </div>
                        </Link>

                        <Link to="/blogs/printer-maintenance" className="resource-card">
                            <div className="card-icon-wrapper">
                                <Wrench size={32} className="card-icon" />
                            </div>
                            <div className="card-content">
                                <h3>Maintenance Tips</h3>
                                <p>Simple steps to extend the lifespan of your printer and prevent jams.</p>
                                {/* <span className="read-more">Read Guide <ArrowRight size={14} /></span> */}
                            </div>
                        </Link>

                        <Link to="/blogs/ink-vs-toner" className="resource-card">
                            <div className="card-icon-wrapper">
                                <Droplet size={32} className="card-icon" />
                            </div>
                            <div className="card-content">
                                <h3>Ink vs. Toner</h3>
                                <p>Understanding the difference to make the right choice for your workflow.</p>
                                {/* <span className="read-more">Read Guide <ArrowRight size={14} /></span> */}
                            </div>
                        </Link>
                    </div>

                    <div className="mobile-cta-container">
                        {/* <Link to="/blogs" className="mobile-view-all">View All Guides <ArrowRight size={16} /></Link> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePeaceOfMind;
