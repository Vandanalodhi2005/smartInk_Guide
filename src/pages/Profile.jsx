import { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, updateUserProfile } from '../redux/actions/userActions';
import { listMyOrders } from '../redux/actions/orderActions';
import { addToCart } from '../redux/actions/cartActions';
import { useFavorites } from '../context/useFavorites';
import {
    Package, Truck, CheckCircle, Clock, AlertCircle,
    User, ShoppingBag, LogOut, Edit2, Save, X, Mail, Phone, MapPin, Shield
} from 'lucide-react';
import { motion } from 'framer-motion';
import './Profile.css';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo: user } = userLogin;

    const orderListMy = useSelector((state) => state.orderListMy);
    const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

    const [activeTab, setActiveTab] = useState('profile');

    // Edit state
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: user?.phone || '+1 (555) 000-0000',
        address: user?.address || '123 Business Ave, Suite 100, New York, NY 10001'
    });

    useEffect(() => {
        if (!user) {
            navigate('/signin');
        } else {
            setFormData({
                name: user.name || '',
                email: user.email || '',
                phone: '+1 (555) 000-0000',
                address: '123 Business Ave, Suite 100, New York, NY 10001'
            });
            if (location.state?.activeTab) {
                setActiveTab(location.state.activeTab);
                window.history.replaceState({}, document.title);
            }
            dispatch(listMyOrders());
        }
    }, [user, navigate, dispatch, location]);

    if (!user) return null;

    const handleSignOut = () => {
        dispatch(logout());
        navigate('/');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveProfile = () => {
        setIsEditing(false);
        // Dispatch update action here
        console.log('Profile updated:', formData);
    };

    return (
        <div className="profile-dashboard-wrapper">
            <div className="profile-layout">
                {/* Sidebar */}
                <aside className="profile-sidebar-premium">
                    <div className="user-summary">
                        <div className="user-avatar-wrapper">
                            <User size={48} />
                        </div>
                        <h3>{formData.name}</h3>
                        <p>{formData.email}</p>
                    </div>

                    <nav className="profile-nav-premium">
                        <button
                            className={`nav-item-premium ${activeTab === 'profile' ? 'active' : ''}`}
                            onClick={() => setActiveTab('profile')}
                        >
                            <User size={20} />
                            My Account
                        </button>
                        <button
                            className={`nav-item-premium ${activeTab === 'orders' ? 'active' : ''}`}
                            onClick={() => setActiveTab('orders')}
                        >
                            <ShoppingBag size={20} />
                            Order History
                        </button>
                        <button onClick={handleSignOut} className="nav-item-premium danger">
                            <LogOut size={20} />
                            Sign Out
                        </button>
                    </nav>
                </aside>

                {/* Main Content Area */}
                <main className="profile-content-area">
                    {/* Account Tab */}
                    {activeTab === 'profile' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="page-header">
                                <h2>Account Settings</h2>
                                <button
                                    className={`edit-btn ${isEditing ? 'saving' : ''}`}
                                    onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                                >
                                    {isEditing ? (
                                        <span className="flex items-center gap-2"><Save size={16} /> Save Changes</span>
                                    ) : (
                                        <span className="flex items-center gap-2"><Edit2 size={16} /> Edit Profile</span>
                                    )}
                                </button>
                            </div>

                            <div className="info-grid">
                                <div className="info-card-premium">
                                    <div className="info-icon">
                                        <User size={24} />
                                    </div>
                                    <div className="info-details">
                                        <h4>Full Name</h4>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="info-input"
                                            />
                                        ) : (
                                            <p className="info-value">{formData.name}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="info-card-premium">
                                    <div className="info-icon">
                                        <Mail size={24} />
                                    </div>
                                    <div className="info-details">
                                        <h4>Email Address</h4>
                                        {isEditing ? (
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="info-input"
                                            />
                                        ) : (
                                            <p className="info-value">{formData.email}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="info-card-premium">
                                    <div className="info-icon">
                                        <Phone size={24} />
                                    </div>
                                    <div className="info-details">
                                        <h4>Phone Number</h4>
                                        {isEditing ? (
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="info-input"
                                            />
                                        ) : (
                                            <p className="info-value">{formData.phone}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="info-card-premium">
                                    <div className="info-icon">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="info-details">
                                        <h4>Shipping Address</h4>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                className="info-input"
                                            />
                                        ) : (
                                            <p className="info-value">{formData.address}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="info-card-premium">
                                    <div className="info-icon">
                                        <Shield size={24} />
                                    </div>
                                    <div className="info-details">
                                        <h4>Account Role</h4>
                                        <p className="info-value capitalize">{user.role || 'Customer'}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Orders Tab */}
                    {activeTab === 'orders' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="page-header">
                                <h2>My Orders</h2>
                            </div>

                            {loadingOrders ? (
                                <div className="flex flex-col items-center justify-center py-20">
                                    <div className="w-12 h-12 border-4 border-slate-200 border-t-blue-500 rounded-full animate-spin mb-4"></div>
                                    <p className="text-slate-500 font-medium">Loading your orders...</p>
                                </div>
                            ) : errorOrders ? (
                                <div className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center">
                                    <AlertCircle className="mx-auto text-red-500 text-3xl mb-2" />
                                    <h3 className="text-red-800 font-bold text-lg mb-1">Error Loading Orders</h3>
                                    <p className="text-red-600">{errorOrders}</p>
                                </div>
                            ) : orders && orders.length === 0 ? (
                                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Package className="text-slate-400 text-4xl" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-800 mb-2">No orders found</h2>
                                    <p className="text-slate-500 mb-6">Looks like you haven't bought anything from us yet.</p>
                                    <Link to="/printers" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all">
                                        Start Shopping
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {orders.map((order) => (
                                        <div key={order._id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                                            {/* Order Header */}
                                            <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
                                                <div className="flex items-center gap-8">
                                                    <div>
                                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Order Placed</p>
                                                        <p className="text-sm font-bold text-slate-800">
                                                            {new Date(order.createdAt).toLocaleDateString()}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total</p>
                                                        <p className="text-sm font-bold text-slate-800">${order.totalPrice.toFixed(2)}</p>
                                                    </div>
                                                    <div className="hidden sm:block">
                                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Order ID</p>
                                                        <p className="text-sm font-mono text-slate-600">#{order._id.slice(-8).toUpperCase()}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    {order.isDelivered ? (
                                                        <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase">
                                                            <CheckCircle size={14} /> Delivered
                                                        </span>
                                                    ) : order.isPaid ? (
                                                        <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
                                                            <Truck size={14} /> Processing
                                                        </span>
                                                    ) : (
                                                        <span className="flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase">
                                                            <Clock size={14} /> Pending
                                                        </span>
                                                    )}
                                                    <Link to={`/order/${order._id}`} className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-lg hover:text-blue-600 hover:border-blue-200 transition-colors">
                                                        Details
                                                    </Link>
                                                </div>
                                            </div>

                                            {/* Order Body */}
                                            <div className="p-6">
                                                <div className="flex gap-4 overflow-x-auto pb-2">
                                                    {order.orderItems.map((item, idx) => (
                                                        <div key={idx} className="flex-shrink-0 w-20 h-20 bg-white border border-slate-100 rounded-lg p-2 relative group" title={item.name}>
                                                            <img
                                                                src={item.image.startsWith('http') ? item.image : `${import.meta.env.VITE_API_URL?.replace('/api', '') || ''}${item.image}`}
                                                                alt={item.name}
                                                                className="w-full h-full object-contain mix-blend-multiply"
                                                            />
                                                            <span className="absolute bottom-0 right-0 bg-slate-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-tl-md rounded-br-md">
                                                                x{item.qty}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Profile;
