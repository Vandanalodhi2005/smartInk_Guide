import React from 'react';
import './HomeNotice.css';

const HomeNotice = () => {
    return (
        <section className="home-notice py-16 bg-[#f8fbff]">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay In The Loop</h2>
                <p className="text-gray-600 mb-8">
                    Subscribe to receive updates on new products, helpful printing tips, and occasional special offers.
                </p>

                <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#20a1dd]"
                        required
                    />
                    <button
                        type="submit"
                        className="px-8 py-3 bg-[#20a1dd] text-white font-semibold rounded-lg hover:bg-[#1a8bbd] transition"
                    >
                        Subscribe
                    </button>
                </form>
                <p className="text-xs text-gray-400 mt-4">We respect your privacy and will never sell your information.</p>
            </div>
        </section>
    );
};

export default HomeNotice;
