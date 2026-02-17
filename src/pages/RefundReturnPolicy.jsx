import React from 'react';
import ReturnHero from '../components/policy/ReturnExchange/ReturnHero/ReturnHero';
import ReturnForm from '../components/policy/ReturnExchange/ReturnForm/ReturnForm';
import ReturnGuidelines from '../components/policy/ReturnExchange/ReturnGuidelines/ReturnGuidelines';
import ReturnProcess from '../components/policy/ReturnExchange/ReturnProcess/ReturnProcess';
import ReturnAssistance from '../components/policy/ReturnExchange/ReturnAssistance/ReturnAssistance';
import LiveChat from '../components/LiveChat/LiveChat';
import '../styles/pages.css';


const RefundReturnPolicy = () => {
    return (
        <div className="policy-page-wrapper">
            <main className="policy-container">
                <ReturnHero />
                <ReturnForm />
                <ReturnGuidelines />
                <ReturnProcess />
                <ReturnAssistance />
            </main>
            <LiveChat />
        </div>
    );
};

export default RefundReturnPolicy;
