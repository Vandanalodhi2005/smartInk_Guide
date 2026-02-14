import './FAQSearch.css';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';

const FAQSearch = ({ searchQuery, setSearchQuery }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="faq-search-wrapper"
        >
            <div className="search-bar-container">
                <div className="search-icon-box">
                    <FiSearch className="search-icon-inner" />
                </div>
                <input
                    type="text"
                    placeholder="Search for answers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="faq-search-input"
                />
                <button className="faq-search-btn">
                    Search
                </button>
            </div>
        </motion.div>
    );
};

export default FAQSearch;
