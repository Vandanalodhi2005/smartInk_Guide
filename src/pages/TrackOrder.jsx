import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import PageContainer from "../components/common/PageContainer";
import { FiSearch, FiPackage, FiTruck, FiMapPin, FiCheckCircle, FiAlertCircle, FiUser, FiMail, FiShoppingCart } from "react-icons/fi";

const TrackOrder = () => {
    const [searchParams] = useSearchParams();
    const urlId = searchParams.get('id');

    const [orderId, setOrderId] = useState(urlId || "");
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (urlId) {
            handleTrack(null, urlId);
        }
    }, [urlId]);

    const handleTrack = async (e, idOverride) => {
        if (e) e.preventDefault();
        const idToUse = idOverride || orderId;
        const cleanId = idToUse.replace('#', '').replace('ORD-', '').trim();
        if (!cleanId) return;

        try {
            setLoading(true);
            setError(null);
            setOrder(null);
            
            // Public fetching of order (assuming fetch is allowed publicly)
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/orders/${cleanId}`);
            setOrder(data);
            setLoading(false);
        } catch (err) {
            setError(err.response?.data?.message || "Order not found. Please check your Order ID.");
            setLoading(false);
        }
    };

    const getStatusStep = (status) => {
        switch (status) {
            case 'Processing': return 1;
            case 'Shipped': return 2;
            case 'Out for Delivery': return 3;
            case 'Delivered': return 4;
            default: return 1; 
        }
    };

    const currentStep = order ? getStatusStep(order.status) : 0;
    const steps = [
        { label: 'Processing', icon: FiPackage },
        { label: 'Shipped', icon: FiTruck },
        { label: 'Out for Delivery', icon: FiMapPin },
        { label: 'Delivered', icon: FiCheckCircle },
    ];

    return (
        <>
            <Navbar />
            <div className="bg-slate-50 min-h-screen pt-24 pb-12">
                <PageContainer>
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-10">
                            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Track Your Order</h1>
                            <p className="text-slate-500 text-lg">Enter your order ID below to check the current status of your shipment.</p>
                        </div>

                        {/* Search Box */}
                        <div className="bg-white p-2 rounded-2xl shadow-lg border border-slate-100 mb-10 transform transition-all hover:shadow-xl">
                            <form onSubmit={(e) => handleTrack(e)} className="flex items-center">
                                <div className="flex-1 relative">
                                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                                    <input
                                        type="text"
                                        placeholder="e.g. 64d3a... or ORD-1234"
                                        className="w-full pl-12 pr-4 py-4 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none text-lg"
                                        value={orderId}
                                        onChange={(e) => setOrderId(e.target.value)}
                                        required
                                    />
                                </div>
                                <button 
                                    type="submit"
                                    disabled={loading}
                                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md active:scale-95 disabled:opacity-70 disabled:scale-100"
                                >
                                    {loading ? 'Tracking...' : 'Track'}
                                </button>
                            </form>
                        </div>

                        {/* Result Area */}
                        {error ? (
                            <div className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center animate-inFade">
                                <FiAlertCircle className="mx-auto text-red-500 text-3xl mb-2" />
                                <h3 className="text-red-800 font-bold text-lg mb-1">Could not find order</h3>
                                <p className="text-red-600">{error}</p>
                            </div>
                        ) : order ? (
                            <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden animate-inFade">
                                {/* Order Status Header */}
                                <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex flex-wrap justify-between items-center gap-4">
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Order ID</p>
                                        <p className="text-lg font-mono font-bold text-slate-900">
                                            #{order._id}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Status</p>
                                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                                            order.isDelivered ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                        }`}>
                                            {order.status || 'Processing'}
                                        </span>
                                    </div>
                                </div>

                                {/* Timeline */}
                                <div className="p-8">
                                    <div className="relative">
                                        {/* Connector Line */}
                                        <div className="absolute left-[19px] top-4 bottom-10 w-0.5 bg-slate-100 md:left-4 md:right-4 md:top-[19px] md:bottom-auto md:w-auto md:h-0.5 -z-0"></div>
                                        <div 
                                            className="absolute left-[19px] top-4 w-0.5 bg-blue-600 transition-all duration-1000 md:left-4 md:top-[19px] md:h-0.5 md:w-0 -z-0" 
                                            style={{ 
                                                width: window.innerWidth > 768 ? `calc(${(currentStep - 1) / (steps.length - 1)} * 100%)` : '2px',
                                                height: window.innerWidth > 768 ? '2px' : `calc(${(currentStep - 1) / (steps.length - 1)} * 100%)`
                                            }}
                                        ></div>

                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
                                            {steps.map((step, index) => {
                                                const isCompleted = index < currentStep;
                                                const isCurrent = index === currentStep - 1;
                                                
                                                return (
                                                    <div key={index} className="flex md:flex-col items-center gap-4 md:gap-3">
                                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm ${
                                                            isCompleted 
                                                            ? 'bg-blue-600 text-white border-4 border-blue-50 scale-110' 
                                                            : 'bg-white border-2 border-slate-100 text-slate-300'
                                                        }`}>
                                                            <step.icon size={18} />
                                                        </div>
                                                        <div className="text-left md:text-center">
                                                            <p className={`text-xs font-bold uppercase tracking-wider ${isCompleted ? 'text-slate-900' : 'text-slate-300'}`}>
                                                                {step.label}
                                                            </p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    
                                    {/* Tracking Details if available */}
                                    {order.tracking && (order.tracking.currentLocation || order.tracking.estTime) && (
                                        <div className="mt-8 bg-blue-50 rounded-xl p-5 border border-blue-100">
                                             <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                                                 <FiTruck /> Latest Info
                                             </h4>
                                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                 <div>
                                                     <p className="text-xs text-blue-400 font-bold uppercase mb-1">Current Location</p>
                                                     <p className="text-blue-800 font-medium">{order.tracking.currentLocation || "In Transit"}</p>
                                                 </div>
                                                 <div>
                                                     <p className="text-xs text-blue-400 font-bold uppercase mb-1">Est. Completion</p>
                                                     <p className="text-blue-800 font-medium">{order.tracking.estTime || "Pending"}</p>
                                                 </div>
                                             </div>
                                        </div>
                                    )}

                                    {/* Order Details: Customer & Items */}
                                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-100 pt-8">
                                        {/* Customer Info */}
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-slate-900 border-l-4 border-blue-600 pl-3">Customer Details</h4>
                                            
                                            <div className="space-y-3 text-sm">
                                                <div className="flex items-start gap-3">
                                                    <FiUser className="mt-1 text-slate-400" />
                                                    <div>
                                                        <p className="font-semibold text-slate-700">Name</p>
                                                        <p className="text-slate-600">{order.user?.name || order.shippingAddress?.name || "N/A"}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <FiMail className="mt-1 text-slate-400" />
                                                    <div>
                                                        <p className="font-semibold text-slate-700">Email</p>
                                                        <p className="text-slate-600">{order.user?.email || "N/A"}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <FiTruck className="mt-1 text-slate-400" />
                                                    <div>
                                                        <p className="font-semibold text-slate-700">Shipping Address</p>
                                                        <p className="text-slate-600">{order.shippingAddress?.address}</p>
                                                        <p className="text-slate-600">{order.shippingAddress?.city}, {order.shippingAddress?.postalCode}</p>
                                                        <p className="text-slate-600">{order.shippingAddress?.country}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Order Summary */}
                                        <div className="space-y-4">
                                            <h4 className="font-bold text-slate-900 border-l-4 border-blue-600 pl-3">Order Summary</h4>
                                            
                                            <div className="bg-slate-50 rounded-xl p-4 space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-slate-500">Subtotal</span>
                                                    <span className="font-medium text-slate-900">${order.itemsPrice?.toFixed(2)}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-500">Shipping</span>
                                                    <span className="font-medium text-slate-900">${order.shippingPrice?.toFixed(2)}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-slate-500">Tax</span>
                                                    <span className="font-medium text-slate-900">${order.taxPrice?.toFixed(2)}</span>
                                                </div>
                                                <div className="flex justify-between border-t border-slate-200 pt-2 mt-2">
                                                    <span className="font-bold text-slate-900">Total</span>
                                                    <span className="font-bold text-blue-600 text-lg">${order.totalPrice?.toFixed(2)}</span>
                                                </div>
                                                <div className={`mt-2 text-center text-xs font-bold py-1 px-2 rounded ${order.isPaid ? 'bg-green-100 text-green-700' : 'bg-red-50 text-red-600'}`}>
                                                    {order.isPaid ? 'PAID' : 'NOT PAID'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Items List */}
                                    <div className="mt-8 border-t border-slate-100 pt-8">
                                        <h4 className="font-bold text-slate-900 border-l-4 border-blue-600 pl-3 mb-4 flex items-center gap-2">
                                            <FiShoppingCart /> Items ({order.orderItems?.length})
                                        </h4>
                                        
                                        <div className="divide-y divide-slate-100">
                                            {order.orderItems?.map((item, index) => (
                                                <div key={index} className="flex items-center gap-4 py-4">
                                                    <div className="w-16 h-16 bg-white border border-slate-100 rounded-lg p-2 flex-shrink-0">
                                                        <img 
                                                            src={item.image} 
                                                            alt={item.name} 
                                                            className="w-full h-full object-contain mix-blend-multiply"
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <Link to={`/product/${item.product}`} className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors line-clamp-2">
                                                            {item.name}
                                                        </Link>
                                                        <p className="text-xs text-slate-500 mt-1">Qty: {item.qty} × ${item.price.toFixed(2)}</p>
                                                    </div>
                                                    <div className="font-bold text-slate-900 text-sm">
                                                        ${(item.qty * item.price).toFixed(2)}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
                                    <Link to={`/order/${order._id}`} className="text-blue-600 font-bold hover:underline text-sm">
                                        View Full Order Details
                                    </Link>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </PageContainer>
            </div>
            <Footer />
        </>
    );
};

export default TrackOrder;
