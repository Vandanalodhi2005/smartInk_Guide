import React from 'react';
import './FAQList.css';
import { motion, AnimatePresence } from "framer-motion";

const FAQList = ({ faqs, openItems, toggleItem }) => {
    if (faqs.length === 0) {
        return (
            <div className="no-results">
                <p>No FAQs found matching your search.</p>
            </div>
        );
    }

    return (
        <div className="faqs-list">
            {faqs.map((faq, index) => (
                <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`faq-item ${openItems[faq.id] ? 'open' : ''}`}
                    onClick={() => toggleItem(faq.id)}
                >
                    <div className="faq-question">
                        <span>{faq.question}</span>
                        <motion.svg
                            animate={{ rotate: openItems[faq.id] ? 180 : 0 }}
                            className="faq-arrow"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <path
                                d="M5 7.5L10 12.5L15 7.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </motion.svg>
                    </div>
                    <AnimatePresence>
                        {openItems[faq.id] && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="faq-answer overflow-hidden text-slate-600 leading-relaxed"
                            >
                                <p className="py-2">{faq.answer}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    );
};

export default FAQList;
