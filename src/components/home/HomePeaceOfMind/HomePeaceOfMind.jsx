import React from 'react';
import { Link } from 'react-router-dom';
import './HomePeaceOfMind.css';

const HomePeaceOfMind = () => {
    return (
        <section className="home-peace py-16 bg-white">
            <div className="peace-container max-w-7xl mx-auto px-6">
                <div className="peace-content text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#20a1dd] mb-4">Complete Printing Support Resources</h2>
                    <p className="max-w-3xl mx-auto text-white mb-6">
                        While we primarily provide product access and guidance, we also offer helpful information to support your printing setup:
                        Printer Buying Guides, Ink Compatibility Tips, Cost-Saving Printing Advice, and Printer Maintenance Best Practices.
                    </p>
                    <Link to="/blogs" className="home-btn primary inline-white px-8 py-3 bg-[#20a1dd] text-white rounded-lg hover:bg-[#1a8bbd] transition">
                        Visit Resource Center
                    </Link>
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Resources & Guides</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition border border-gray-100">
                            <h4 className="font-bold text-lg mb-2">🖨 Printer Buying Guide</h4>
                            <p className="text-sm text-gray-600">How to choose between inkjet and laser printers.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition border border-gray-100">
                            <h4 className="font-bold text-lg mb-2">💰 Reduce Printing Costs</h4>
                            <p className="text-sm text-gray-600">Smart ways to lower cost per page.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition border border-gray-100">
                            <h4 className="font-bold text-lg mb-2">🧽 Printer Maintenance Tips</h4>
                            <p className="text-sm text-gray-600">Extend the life of your printer with proper care.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition border border-gray-100">
                            <h4 className="font-bold text-lg mb-2">🧴 Ink vs Toner Explained</h4>
                            <p className="text-sm text-gray-600">Understanding cartridge differences and compatibility.</p>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <Link to="/blogs" className="text-[#20a1dd] font-semibold hover:underline">View All Guides &rarr;</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePeaceOfMind;
