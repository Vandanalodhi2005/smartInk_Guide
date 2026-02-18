import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromCart, addToCart } from "../redux/actions/cartActions";
import { motion } from "framer-motion";

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const [giftWrap, setGiftWrap] = useState(false);

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    const totalWithGift = subtotal + (giftWrap ? 10 : 0);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <div className="w-full bg-slate-50 min-h-screen py-6 md:py-10">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">

                {/* Header */}
                <section className="w-full bg-white rounded-3xl border border-slate-100 p-6 md:p-12 mb-6 md:mb-8 shadow-sm">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl font-black text-secondary uppercase tracking-tighter">Shopping Hub</h1>
                        <p className="mt-4 text-[10px] md:text-xs font-[#20a1dd] text-[#20a1dd] uppercase tracking-[0.3em]">
                            You have <span className="text-secondary">{cartItems.reduce((acc, item) => acc + Number(item.qty), 0)}</span> items in your inventory
                        </p>
                    </div>
                </section>

                {cartItems.length === 0 ? (
                    <div className="bg-white border border-dashed border-slate-200 rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 text-center flex flex-col items-center justify-center space-y-6">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-50 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 md:w-10 md:h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight"> Your Cart is Empty</h2>
                            <p className="text-sm md:text-base text-secondary font-medium">Ready to start printing? Explore our premium hardware collection.</p>
                        </div>
                        <Link to="/printers" className="px-6 py-4 md:px-8 bg-secondary text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-black transition-all">
                            Browse Inventory
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
                        {/* LEFT : Cart Items */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white border border-secondary rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm">
                                {/* Desktop Header */}
                                <div className="hidden md:grid grid-cols-5 gap-4 p-6 bg-secondary text-[10px] font-black text-white uppercase tracking-widest border-b border-slate-100">
                                    <span className="col-span-2">Product Details</span>
                                    <span className="text-center">Price</span>
                                    <span className="text-center">Quantity</span>
                                    <span className="text-right">Action</span>
                                </div>

                                <div className="divide-y divide-slate-50">
                                    {cartItems.map((item) => (
                                        <div key={item.product} className="p-4 md:p-6 flex flex-col md:grid md:grid-cols-5 gap-4 md:gap-6 items-start md:items-center hover:bg-slate-50/50 transition-colors">

                                            {/* Product Info (Mobile & Desktop) */}
                                            <div className="col-span-1 md:col-span-2 flex gap-4 md:gap-6 w-full items-center">
                                                <div className="w-16 h-16 md:w-20 md:h-20 bg-white border border-slate-100 rounded-2xl p-2 flex-shrink-0">
                                                    <img
                                                        src={item.image ? (item.image.startsWith('http') ? item.image : `${import.meta.env.VITE_API_URL?.replace('/api', '') || ''}${item.image}`) : "https://placehold.co/100"}
                                                        alt={item.title}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div className="space-y-1 flex-1">
                                                    <Link to={`/product/${item.slug}`} className="text-sm font-bold text-primary uppercase tracking-tight hover:text-secondary transition-colors line-clamp-2 md:line-clamp-1">
                                                        {item.title}
                                                    </Link>
                                                    <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">In Stock</p>
                                                    {/* Mobile Price Display */}
                                                    <p className="md:hidden text-sm font-bold text-secondary mt-1">${item.price.toFixed(2)}</p>
                                                </div>
                                            </div>

                                            {/* Price (Desktop Only) */}
                                            <div className="hidden md:block text-center">
                                                <p className="text-secondary font-bold tracking-tight">${item.price.toFixed(2)}</p>
                                            </div>

                                            {/* Mobile Controls Row */}
                                            <div className="flex items-center justify-between w-full md:contents">
                                                {/* Quantity */}
                                                <div className="flex justify-start md:justify-center">
                                                    <div className="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden h-9 md:h-10">
                                                        <button
                                                            onClick={() => dispatch(addToCart(item.product, Math.max(1, Number(item.qty) - 1)))}
                                                            className="px-3 hover:bg-slate-50 text-slate-400 active:bg-slate-100"
                                                        >-</button>
                                                        <span className="px-2 text-[10px] font-bold text-secondary min-w-[20px] text-center">{item.qty}</span>
                                                        <button
                                                            onClick={() => dispatch(addToCart(item.product, Math.min(item.countInStock, Number(item.qty) + 1)))}
                                                            className="px-3 hover:bg-slate-50 text-slate-400 active:bg-slate-100"
                                                        >+</button>
                                                    </div>
                                                </div>

                                                {/* Action */}
                                                <div className="text-right ml-auto md:ml-0">
                                                    <button
                                                        onClick={() => removeFromCartHandler(item.product)}
                                                        className="p-2 md:p-3 text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
                                                        aria-label="Remove item"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT : Summary */}
                        <div className="space-y-6">
                            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-6 md:p-8 shadow-sm space-y-6 md:space-y-8 h-fit lg:sticky lg:top-24">
                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Order Intelligence</h3>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between py-4 border-b border-slate-100">
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Subtotal</span>
                                        <span className="text-slate-900 font-black tracking-tight">${subtotal.toFixed(2)}</span>
                                    </div>

                                    <div className="flex items-center justify-between group cursor-pointer" onClick={() => setGiftWrap(!giftWrap)}>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded-md border-2 transition-all flex items-center justify-center ${giftWrap ? 'bg-indigo-600 border-indigo-600' : 'border-slate-200'}`}>
                                                {giftWrap && <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>}
                                            </div>
                                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Premium Gift Packing</span>
                                        </div>
                                        <span className="text-[10px] font-black text-slate-900">$10.00</span>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-black text-secondary uppercase tracking-tight">Invoice Total</span>
                                        <span className="text-2xl md:text-3xl font-black text-secondary tracking-tighter">${totalWithGift.toFixed(2)}</span>
                                    </div>
                                    <p className="text-[9px] font-bold text-secondary uppercase tracking-[0.3em] text-center">Taxes and Logistics calculated at next stage</p>
                                </div>

                                <div className="space-y-4 pt-4">
                                    <button
                                        onClick={checkoutHandler}
                                        className="w-full bg-secondary text-white py-4 md:py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-200 active:scale-95"
                                    >
                                        Proceed to Secure Checkout
                                    </button>
                                    <div className="flex items-center justify-center gap-6 py-4 px-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <img src="https://razorpay.com/assets/razorpay-glyph.svg" alt="Razorpay" className="h-4 opacity-50" />
                                        <span className="text-[9px] font-black text-secondary uppercase tracking-[0.2em]">Verified Secure Terminal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
