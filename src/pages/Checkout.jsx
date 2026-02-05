import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../redux/actions/cartActions';
import axios from 'axios';
import { Loader2, ShieldCheck, Truck, CreditCard, ChevronRight, Lock, MapPin, Phone, Globe } from 'lucide-react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart);
    const { cartItems, shippingAddress } = cart;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const [address, setAddress] = useState(shippingAddress.address || '');
    const [city, setCity] = useState(shippingAddress.city || '');
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '');
    const [country, setCountry] = useState(shippingAddress.country || '');
    const [phone, setPhone] = useState(shippingAddress.phone || '');

    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [clover, setClover] = useState(null);

    // Style configuration to differentiate from smartEprinting
    const inputStyle = "w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-slate-700 placeholder:text-slate-400";
    const labelStyle = "block text-sm font-medium text-slate-700 mb-2";

    useEffect(() => {
        if (cartItems.length === 0) {
            navigate('/cart');
        } else if (!userInfo) {
             navigate('/signin?redirect=checkout');
        } else if (step === 2 && window.Clover) {
             setTimeout(() => {
                const numberEl = document.querySelector('#card-number');
                const dateEl = document.querySelector('#card-date');
                const cvvEl = document.querySelector('#card-cvv');
                const zipEl = document.querySelector('#card-postal-code');

                if (numberEl && !numberEl.hasChildNodes()) {
                     try {
                        const cloverInstance = new window.Clover(import.meta.env.VITE_CLOVER_PUBLIC_KEY);
                        const elements = cloverInstance.elements();
                        
                        const styles = { 
                            body: { 
                                fontFamily: 'system-ui, -apple-system, sans-serif', 
                                fontSize: '16px',
                                color: '#334155', 
                                fontWeight: '400', 
                            },
                            input: {
                                padding: '12px',
                                borderRadius: '8px',
                            }
                        };
    
                        const cardNumber = elements.create('CARD_NUMBER', { styles });
                        const cardDate = elements.create('CARD_DATE', { styles });
                        const cardCvv = elements.create('CARD_CVV', { styles });
                        const cardPostalCode = elements.create('CARD_POSTAL_CODE', { styles });
    
                        cardNumber.mount('#card-number');
                        cardDate.mount('#card-date');
                        cardCvv.mount('#card-cvv');
                        cardPostalCode.mount('#card-postal-code');
    
                        setClover(cloverInstance);
                     } catch (err) {
                         console.error("Clover initialization error:", err);
                     }
                }
             }, 300);
        }
    }, [userInfo, cartItems, navigate, step]);

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    const taxPrice = Number((0.15 * subtotal).toFixed(2));
    const shippingPrice = subtotal > 500 ? 0 : 50;
    const totalPrice = subtotal + taxPrice + shippingPrice;

    const submitShippingHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, postalCode, country, phone }));
        setStep(2);
        window.scrollTo(0, 0);
    };

    const initPayment = async () => {
        try {
            setLoading(true);
            if (!clover) {
                alert('Payment gateway is loading. Please try again in a few seconds.');
                setLoading(false);
                return;
            }

            const result = await clover.createToken();
            if (result.errors) {
                 alert('Payment Error: ' + Object.values(result.errors).join(', '));
                 setLoading(false);
                 return;
            }

            const orderData = {
                orderItems: cartItems,
                shippingAddress: { address, city, postalCode, country, phone },
                paymentMethod: 'Clover',
                itemsPrice: subtotal,
                taxPrice,
                shippingPrice,
                totalPrice,
            };

            const { data: createdOrder } = await axios.post(
                `${import.meta.env.VITE_API_URL}/orders`,
                orderData,
                { headers: { Authorization: `Bearer ${userInfo.token}` } }
            );

            await axios.post(
                `${import.meta.env.VITE_API_URL}/orders/clover/pay`,
                {
                    amount: totalPrice,
                    orderId: createdOrder._id,
                    source: result.token
                },
                { headers: { Authorization: `Bearer ${userInfo.token}` } }
            );

            navigate('/orders'); 

        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || 'Payment failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if(cartItems.length === 0) return null;

    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 py-8 lg:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="mb-8 lg:mb-10">
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Checkout</h1>
                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                        <span className={step >= 1 ? "text-blue-600 font-medium" : ""}>Shipping</span>
                        <ChevronRight size={16} />
                        <span className={step >= 2 ? "text-blue-600 font-medium" : ""}>Payment</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    
                    {/* Main Content */}
                    <div className="lg:col-span-7">
                        {step === 1 ? (
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                        <Truck size={24} />
                                    </div>
                                    <h2 className="text-xl font-semibold text-gray-900">Shipping Address</h2>
                                </div>

                                <form onSubmit={submitShippingHandler} className="space-y-6">
                                    <div>
                                        <label className={labelStyle}>Street Address</label>
                                        <input 
                                            value={address} 
                                            onChange={(e) => setAddress(e.target.value)} 
                                            required 
                                            placeholder="123 Main St" 
                                            className={inputStyle}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className={labelStyle}>City</label>
                                            <input 
                                                value={city} 
                                                onChange={(e) => setCity(e.target.value)} 
                                                required 
                                                placeholder="New York" 
                                                className={inputStyle}
                                            />
                                        </div>
                                        <div>
                                            <label className={labelStyle}>Postal Code</label>
                                            <input 
                                                value={postalCode} 
                                                onChange={(e) => setPostalCode(e.target.value)} 
                                                required 
                                                placeholder="10001" 
                                                className={inputStyle}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className={labelStyle}>Country</label>
                                            <input 
                                                value={country} 
                                                onChange={(e) => setCountry(e.target.value)} 
                                                required 
                                                placeholder="United States" 
                                                className={inputStyle} 
                                            />
                                        </div>
                                        <div>
                                            <label className={labelStyle}>Phone Number</label>
                                            <input 
                                                value={phone} 
                                                onChange={(e) => setPhone(e.target.value)} 
                                                required 
                                                placeholder="+1 (555) 000-0000" 
                                                className={inputStyle}
                                            />
                                        </div>
                                    </div>

                                    <button type="submit" className="w-full mt-6 bg-blue-900 text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                                        Continue to Payment <ChevronRight size={18} />
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                            <CreditCard size={24} />
                                        </div>
                                        <h2 className="text-xl font-semibold text-gray-900">Payment Details</h2>
                                    </div>
                                    <button onClick={() => setStep(1)} className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                                        Edit Shipping
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                        <p className="text-sm text-gray-600 mb-2">Total Amount</p>
                                        <p className="text-2xl font-bold text-gray-900">${totalPrice.toFixed(2)}</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="border border-gray-300 rounded-lg p-3 sm:p-4 focus-within:ring-2 focus-within:ring-blue-600 focus-within:border-transparent">
                                            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Card Number</label>
                                            <div id="card-number" className="h-6"></div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="border border-gray-300 rounded-lg p-3 sm:p-4 focus-within:ring-2 focus-within:ring-blue-600 focus-within:border-transparent">
                                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Expires</label>
                                                <div id="card-date" className="h-6"></div>
                                            </div>
                                            <div className="border border-gray-300 rounded-lg p-3 sm:p-4 focus-within:ring-2 focus-within:ring-blue-600 focus-within:border-transparent">
                                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">CVV</label>
                                                <div id="card-cvv" className="h-6"></div>
                                            </div>
                                        </div>
                                        
                                        <div className="border border-gray-300 rounded-lg p-3 sm:p-4 focus-within:ring-2 focus-within:ring-blue-600 focus-within:border-transparent">
                                            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Zip Code</label>
                                            <div id="card-postal-code" className="h-6"></div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-4">
                                        <Lock size={12} />
                                        <span>Your transaction is secured with TLS encryption.</span>
                                    </div>

                                    <button
                                        onClick={initPayment}
                                        disabled={loading}
                                        className="w-full bg-blue-900 text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {loading ? <Loader2 className="animate-spin" size={20} /> : 'Pay Now'}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-5">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:sticky lg:top-24">
                            <h3 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h3>
                            
                            <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                                {cartItems.map((item, i) => (
                                    <div key={i} className="flex gap-4 py-2">
                                        <div className="h-16 w-16 bg-gray-50 rounded-md border border-gray-100 p-1 flex-shrink-0">
                                            <img
                                                src={item.image ? (item.image.startsWith('http') ? item.image : `${import.meta.env.VITE_API_URL?.replace('/api', '') || ''}${item.image}`) : "https://placehold.co/100"}
                                                alt={item.title}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 line-clamp-2">{item.title}</p>
                                            <p className="text-sm text-gray-500 mt-1">Qty: {item.qty}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-semibold text-gray-900">${(item.price * item.qty).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 pt-6 border-t border-gray-100">
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Shipping</span>
                                    <span>{shippingPrice === 0 ? 'Free' : `$${shippingPrice.toFixed(2)}`}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Tax (Est. 15%)</span>
                                    <span>${taxPrice.toFixed(2)}</span>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100">
                                <span className="text-base font-bold text-gray-900">Total</span>
                                <span className="text-2xl font-bold text-blue-900">${totalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Checkout;

