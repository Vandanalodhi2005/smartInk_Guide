import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getOrderDetails } from '../redux/actions/orderActions';
import PageContainer from "../components/common/PageContainer";
import { FiPackage, FiTruck, FiCheckCircle, FiClock, FiMapPin, FiCalendar, FiArrowLeft, FiAlertCircle } from "react-icons/fi";

const OrderDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo) {
            // If user is not logged in, they might still access this if it's public and they have ID, 
            // but normally OrderDetails is for the user. 
            // For public tracking, use TrackOrder page.
            // But let's allow it if backend allows it, otherwise redirect.
            // navigate('/signin'); 
        }
        dispatch(getOrderDetails(id));
    }, [dispatch, id, userInfo, navigate]);

    // Calculate step for timeline
    const getStatusStep = (status) => {
        switch (status) {
            case 'Processing': return 1;
            case 'Shipped': return 2;
            case 'Out for Delivery': return 3;
            case 'Delivered': return 4;
            default: return 1; // Default to Processing or Payment Failed (0)
        }
    };

    const currentStep = order ? getStatusStep(order.status) : 0;
    const steps = [
        { label: 'Order Placed', icon: FiClock },
        { label: 'Shipped', icon: FiTruck },
        { label: 'Out for Delivery', icon: FiMapPin },
        { label: 'Delivered', icon: FiCheckCircle },
    ];

    return (
        <>
            <div className="bg-slate-50 min-h-screen pt-24 pb-12">
                <PageContainer>
                    {/* Back Link */}
                    <div className="mb-6">
                        <Link to="/orders" className="inline-flex items-center text-slate-500 hover:text-[#20a1dd] font-medium transition-colors">
                            <FiArrowLeft className="mr-2" /> Back to My Orders
                        </Link>
                    </div>

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <div className="w-12 h-12 border-4 border-slate-200 border-t-[#20a1dd] rounded-full animate-spin mb-4"></div>
                            <p className="text-slate-500 font-medium">Loading order details...</p>
                        </div>
                    ) : error ? (
                        <div className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center">
                            <FiAlertCircle className="mx-auto text-red-500 text-3xl mb-2" />
                            <h3 className="text-red-800 font-bold text-lg mb-1">Error Loading Order</h3>
                            <p className="text-red-600">{error}</p>
                        </div>
                    ) : order ? (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-6 md:space-y-8">

                                {/* Header Card */}
                                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6 md:p-8">
                                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 md:pb-6 mb-4 md:mb-6">
                                        <div>
                                            <h1 className="text-2xl font-bold text-slate-900">Order #{order._id}</h1>
                                            <p className="text-slate-500 flex items-center gap-2 mt-1">
                                                <FiCalendar /> {new Date(order.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </p>
                                        </div>
                                        <div className={`px-4 py-2 rounded-full text-sm font-bold border w-fit ${order.isDelivered ? 'bg-green-50 text-green-700 border-green-200' :
                                                order.isPaid ? 'bg-blue-50 text-[#20a1dd] border-[#20a1dd]' :
                                                    'bg-amber-50 text-amber-700 border-amber-200'
                                            }`}>
                                            {order.status || (order.isDelivered ? 'Delivered' : 'Processing')}
                                        </div>
                                    </div>

                                    {/* Timeline */}
                                    <div className="relative px-0 sm:px-4 py-4">
                                        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden sm:block z-0"></div>
                                        {/* Progress Bar */}
                                        <div
                                            className="absolute top-1/2 left-0 h-1 bg-[#20a1dd] -translate-y-1/2 hidden sm:block transition-all duration-1000 z-0"
                                            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                                        ></div>

                                        <div className="flex flex-col sm:flex-row justify-between relative z-10 gap-4 sm:gap-0">
                                            {steps.map((step, index) => {
                                                const isActive = index < currentStep;
                                                const isCurrent = index === currentStep - 1;

                                                return (
                                                    <div key={index} className="flex sm:flex-col items-center gap-4 sm:gap-2">
                                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 transition-all ${isActive || isCurrent
                                                                ? 'bg-[#20a1dd] border-[#20a1dd] text-white shadow-lg shadow-[#20a1dd]'
                                                                : 'bg-white border-slate-100 text-slate-300'
                                                            }`}>
                                                            <step.icon size={18} />
                                                        </div>
                                                        <div className="sm:text-center">
                                                            <p className={`text-sm font-bold ${isActive || isCurrent ? 'text-slate-900' : 'text-slate-400'}`}>{step.label}</p>
                                                            {isCurrent && <p className="text-xs text-blue-400 font-medium sm:hidden">Current Status</p>}
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    {/* Tracking Info */}
                                    {order.tracking && (order.tracking.currentLocation || order.tracking.estTime) && (
                                        <div className="mt-8 bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col sm:flex-row justify-between gap-4">
                                            <div>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Current Location</p>
                                                <p className="font-semibold text-slate-800">{order.tracking.currentLocation || 'N/A'}</p>
                                            </div>
                                            <div className="sm:text-right">
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Estimated Delivery</p>
                                                <p className="font-semibold text-slate-800">{order.tracking.estTime || 'N/A'}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Order Items */}
                                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                                    <div className="px-4 md:px-6 py-3 md:py-4 border-b border-slate-100 bg-slate-50/50">
                                        <h3 className="font-bold text-slate-900 flex items-center gap-2">
                                            <FiPackage /> Items in Order
                                        </h3>
                                    </div>
                                    <div className="divide-y divide-slate-100">
                                        {order.orderItems.map((item, index) => (
                                            <div key={index} className="p-4 md:p-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                                                <div className="w-20 h-20 bg-slate-50 rounded-lg p-2 flex items-center justify-center border border-slate-100 shrink-0">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-contain mix-blend-multiply"
                                                    />
                                                </div>
                                                <div className="flex-1 w-full text-center sm:text-left">
                                                    <Link to={`/product/${item.product}`} className="font-bold text-slate-900 hover:text-blue-400 transition-colors line-clamp-2">
                                                        {item.name}
                                                    </Link>
                                                    <p className="text-slate-500 text-sm mt-1">Quantity: {item.qty}</p>
                                                </div>
                                                <div className="font-bold text-slate-900 mt-2 sm:mt-0">
                                                    ${item.price.toFixed(2)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Summary */}
                            <div className="space-y-4 md:space-y-6">
                                {/* Shipping Address */}
                                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <FiTruck /> Shipping Details
                                    </h3>
                                    <div className="text-slate-600 space-y-1 text-sm">
                                        <p className="font-semibold text-slate-900">{order.user?.name || order.shippingAddress.name || 'N/A'}</p>
                                        <p>{order.shippingAddress.address}</p>
                                        <p>{order.shippingAddress.city}, {order.shippingAddress.postalCode}</p>
                                        <p>{order.shippingAddress.country}</p>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-slate-100">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Status</p>
                                        <p className={`font-semibold ${order.isDelivered ? 'text-green-600' : 'text-slate-700'}`}>
                                            {order.isDelivered
                                                ? `Delivered on ${new Date(order.deliveredAt).toLocaleDateString()}`
                                                : 'In Progress'}
                                        </p>
                                    </div>
                                </div>

                                {/* Payment Summary */}
                                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <FiCheckCircle /> Payment Summary
                                    </h3>

                                    <div className="space-y-3 pb-4 border-b border-slate-100">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-500">Items</span>
                                            <span className="font-medium text-slate-900">${order.itemsPrice?.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-500">Shipping</span>
                                            <span className="font-medium text-slate-900">${order.shippingPrice?.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-500">Tax</span>
                                            <span className="font-medium text-slate-900">${order.taxPrice?.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <div className="pt-4 flex justify-between items-center mb-6">
                                        <span className="font-bold text-slate-900">Total</span>
                                        <span className="font-bold text-xl text-blue-400">${order.totalPrice?.toFixed(2)}</span>
                                    </div>

                                    <div className={`p-3 rounded-xl text-center text-sm font-bold ${order.isPaid ? 'bg-green-100 text-green-700' : 'bg-red-50 text-red-600'
                                        }`}>
                                        {order.isPaid ? 'Payment Successful' : 'Payment Pending / Failed'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </PageContainer>
            </div>
        </>
    );
};

export default OrderDetails;
