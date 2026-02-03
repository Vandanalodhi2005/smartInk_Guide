import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import ReturnHero from '../components/policy/ReturnExchange/ReturnHero/ReturnHero';
import ReturnForm from '../components/policy/ReturnExchange/ReturnForm/ReturnForm';
import ReturnGuidelines from '../components/policy/ReturnExchange/ReturnGuidelines/ReturnGuidelines';
import ReturnProcess from '../components/policy/ReturnExchange/ReturnProcess/ReturnProcess';
import ReturnAssistance from '../components/policy/ReturnExchange/ReturnAssistance/ReturnAssistance';
import '../styles/pages.css';

const RefundReturnPolicy = () => {
    return (
        <div className="policy-page-wrapper">
            <Navbar />
            <main className="policy-container">
                <ReturnHero />
                <ReturnForm />
                <ReturnGuidelines />
                <ReturnProcess />
                <ReturnAssistance />
            </main>
            <Footer />
        </div>
    );
};

export default RefundReturnPolicy;
