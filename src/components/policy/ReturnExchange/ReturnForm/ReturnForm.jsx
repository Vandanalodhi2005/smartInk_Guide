import React, { useState } from 'react';
import './ReturnForm.css';

const ReturnForm = () => {
    const [formData, setFormData] = useState({
        orderNumber: '',
        reason: '',
        otherReason: '',
        resolution: '',
        additionalDetails: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const reasons = [
        'Wrong item received',
        'Item arrived damaged',
        'Item is defective',
        'Ordered by mistake',
        'Not compatible with my needs',
        'Other (please specify)'
    ];

    const resolutions = [
        'Refund',
        'Exchange for the same item (if available)',
        'Exchange for another item (optional)'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({
                orderNumber: '',
                reason: '',
                otherReason: '',
                resolution: '',
                additionalDetails: ''
            });
        }, 1500);
    };

    if (isSuccess) {
        return (
            <div className="return-form-container success">
                <div className="success-icon">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                </div>
                <h2>Request Submitted!</h2>
                <p>Your return/exchange request has been received. Our team will review it and provide a prepaid shipping label within 24 hours.</p>
                <button onClick={() => setIsSuccess(false)} className="submit-btn primary">Submit Another Request</button>
            </div>
        );
    }

    return (
        <div className="return-form-container">
            <h2>Start a Return or Exchange</h2>
            <form onSubmit={handleSubmit} className="return-form">
                <div className="form-group">
                    <label htmlFor="orderNumber">Order Number*</label>
                    <input
                        type="text"
                        id="orderNumber"
                        name="orderNumber"
                        value={formData.orderNumber}
                        onChange={handleChange}
                        placeholder="Enter your order number"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="reason">Reason for Return / Exchange*</label>
                    <select
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select a reason</option>
                        {reasons.map(reason => (
                            <option key={reason} value={reason}>{reason}</option>
                        ))}
                    </select>
                </div>

                {formData.reason === 'Other (please specify)' && (
                    <div className="form-group animate-slide">
                        <label htmlFor="otherReason">Please specify*</label>
                        <input
                            type="text"
                            id="otherReason"
                            name="otherReason"
                            value={formData.otherReason}
                            onChange={handleChange}
                            placeholder="Tell us more about the reason"
                            required
                        />
                    </div>
                )}

                <div className="form-group">
                    <label htmlFor="resolution">Preferred Resolution*</label>
                    <select
                        id="resolution"
                        name="resolution"
                        value={formData.resolution}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Choose an option</option>
                        {resolutions.map(res => (
                            <option key={res} value={res}>{res}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="additionalDetails">Additional Details</label>
                    <textarea
                        id="additionalDetails"
                        name="additionalDetails"
                        value={formData.additionalDetails}
                        onChange={handleChange}
                        placeholder="Write here… Provide any helpful information such as packaging condition, issue details, or notes for our support team."
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
            </form>
        </div>
    );
};

export default ReturnForm;
