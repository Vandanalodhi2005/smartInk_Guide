import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useFavorites } from '../context/useFavorites';
import '../styles/pages.css';

const Profile = () => {
    const { user, signOut } = useAuth();
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('profile');
    const profileImage = 'https://i.pravatar.cc/150?u=' + (user?.email || 'user');

    // Edit state
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: user?.phone || '+1 (555) 000-0000',
        address: user?.address || '123 Business Ave, Suite 100, New York, NY 10001'
    });

    // Local UI state for favorites add-to-cart feedback
    const [addedToCart, setAddedToCart] = useState({});

    const { favorites, removeFavorite } = useFavorites();

    const handleAddToCart = (item) => {
        addToCart({ ...item, quantity: 1 });
        setAddedToCart(prev => ({ ...prev, [item.id]: true }));
        setTimeout(() => setAddedToCart(prev => {
            const copy = { ...prev };
            delete copy[item.id];
            return copy;
        }), 2000);
    };

    const handleManagePreferences = () => {
        navigate('/settings');
    };

    useEffect(() => {
        if (!user) {
            navigate('/signin');
        }
    }, [user, navigate]);

    if (!user) return null;

    const handleSignOut = () => {
        signOut();
        navigate('/');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveProfile = () => {
        // Here you would normally call an API to update the user
        // For now we just exit edit mode and show a local update
        setIsEditing(false);
        // Since useAuth provides the user, in a real app the auth context would update
        console.log('Profile updated:', formData);
    };

    // Mock Data for Orders
    const mockOrders = [
        {
            id: 'ORD-7721',
            date: 'Oct 12, 2025',
            status: 'shipped',
            total: '$539.00',
            trackingStep: 2, // 0: Ordered, 1: Processing, 2: Shipped, 3: Delivered
            items: [
                { id: 1, name: 'HP LaserJet Pro M404', price: '$539', image: 'https://i.imgur.com/2nCt3Sbl.jpg', qty: 1 }
            ]
        },
        {
            id: 'ORD-6540',
            date: 'Sep 28, 2025',
            status: 'delivered',
            total: '$159.00',
            trackingStep: 3,
            items: [
                { id: 2, name: 'Canon Pixma G3000', price: '$159', image: 'https://i.imgur.com/FYFZ5PZ.jpg', qty: 1 }
            ]
        }
    ];

    // Favorites will be sourced from FavoritesContext
    // (persisted to localStorage by the provider)

    return (
        <>
            <Navbar />
            <div className="profile-dashboard">
                <div className="profile-container">
                    {/* Sidebar */}
                    <aside className="profile-sidebar">
                        <div className="profile-user-summary">
                            <div className="profile-image-container">
                                <img src={profileImage} alt="Profile" className="profile-image" />
                                <button className="edit-avatar-btn" title="Change Avatar">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                    </svg>
                                </button>
                            </div>
                            <h2>{formData.name || 'TechnoSky User'}</h2>
                            <p>{formData.email}</p>
                        </div>

                        <nav className="profile-nav">
                            <button
                                className={`profile-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                                onClick={() => setActiveTab('profile')}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" />
                                </svg>
                                My Account
                            </button>
                            <button
                                className={`profile-nav-item ${activeTab === 'orders' ? 'active' : ''}`}
                                onClick={() => setActiveTab('orders')}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3 6h18M16 10a4 4 0 0 1-8 0" />
                                </svg>
                                Order History
                            </button>
                            <button
                                className={`profile-nav-item ${activeTab === 'favorites' ? 'active' : ''}`}
                                onClick={() => setActiveTab('favorites')}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                                My Favorites
                            </button>
                            <button onClick={handleSignOut} className="profile-nav-item danger">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
                                </svg>
                                Logout
                            </button>
                        </nav>
                    </aside>

                    {/* Main Content Area */}
                    <main className="profile-content">
                        {activeTab === 'profile' && (
                            <div className="profile-section">
                                <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                                    <h2 style={{ margin: 0 }}>Account Information</h2>
                                    <button
                                        className="category-btn"
                                        onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                                        style={{ background: isEditing ? '#0f3d91' : 'transparent', color: isEditing ? '#fff' : '#0f3d91', border: '1px solid #0f3d91' }}
                                    >
                                        {isEditing ? 'Save Changes' : 'Edit Profile'}
                                    </button>
                                </div>

                                <div className="contact-details">
                                    <div className="contact-detail-item">
                                        <div className="contact-icon" style={{ background: '#f0f4ff', color: '#0f3d91' }}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" />
                                            </svg>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h3>Full Name</h3>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="search-input"
                                                    style={{ padding: '8px', marginTop: '4px' }}
                                                />
                                            ) : (
                                                <p>{formData.name || 'User'}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="contact-detail-item">
                                        <div className="contact-icon" style={{ background: '#f0f4ff', color: '#0f3d91' }}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" />
                                                <path d="M22 6L12 13L2 6" />
                                            </svg>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h3>Email Address</h3>
                                            {isEditing ? (
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="search-input"
                                                    style={{ padding: '8px', marginTop: '4px' }}
                                                />
                                            ) : (
                                                <p>{formData.email}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="contact-detail-item">
                                        <div className="contact-icon" style={{ background: '#f0f4ff', color: '#0f3d91' }}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21 15.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z" />
                                                <path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" />
                                                <path d="M5 20h14" />
                                                <path d="M12 12V6" />
                                                <path d="M12 6l-3 3m3-3l3 3" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3>Account Role</h3>
                                            <p style={{ textTransform: 'capitalize' }}>{user.role || 'Customer'}</p>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ marginTop: '40px' }}>
                                    <h3>Newsletter Subscription</h3>
                                    <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>You are currently subscribed to all promotional emails.</p>
                                    <button className="category-btn" style={{ padding: '8px 16px', fontSize: '14px' }} onClick={handleManagePreferences}>Manage Preferences</button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'orders' && (
                            <div className="profile-section">
                                <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                    <h2 style={{ margin: 0 }}>My Orders</h2>
                                    <button className="category-btn" onClick={() => navigate('/my-orders')}>View All Orders</button>
                                </div>

                                <div className="orders-list">
                                    {mockOrders.map((order) => (
                                        <div key={order.id} className="order-card">
                                            <div className="order-header">
                                                <div>
                                                    <span className="order-id">#{order.id}</span>
                                                    <span className="order-date"> • {order.date}</span>
                                                </div>
                                                <span className={`order-status ${order.status}`}>{order.status}</span>
                                            </div>

                                            <div className="order-items">
                                                {order.items.map(item => (
                                                    <div key={item.id} className="order-item">
                                                        <img src={item.image} alt={item.name} className="order-item-img" />
                                                        <div className="order-item-info">
                                                            <h4>{item.name}</h4>
                                                            <p>Quantity: {item.qty} • {item.price}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="tracking-container">
                                                <div className="tracking-bar">
                                                    <div className={`tracking-step ${order.trackingStep >= 0 ? (order.trackingStep > 0 ? 'completed' : 'active') : ''}`}>
                                                        <div className="step-circle">{order.trackingStep > 0 ? '✓' : ''}</div>
                                                        <span className="step-label">Ordered</span>
                                                    </div>
                                                    <div className={`tracking-step ${order.trackingStep >= 1 ? (order.trackingStep > 1 ? 'completed' : 'active') : ''}`}>
                                                        <div className="step-circle">{order.trackingStep > 1 ? '✓' : ''}</div>
                                                        <span className="step-label">Processing</span>
                                                    </div>
                                                    <div className={`tracking-step ${order.trackingStep >= 2 ? (order.trackingStep > 2 ? 'completed' : 'active') : ''}`}>
                                                        <div className="step-circle">{order.trackingStep > 2 ? '✓' : ''}</div>
                                                        <span className="step-label">Shipped</span>
                                                    </div>
                                                    <div className={`tracking-step ${order.trackingStep >= 3 ? (order.trackingStep > 3 ? 'completed' : 'active') : ''}`}>
                                                        <div className="step-circle">{order.trackingStep > 3 ? '✓' : ''}</div>
                                                        <span className="step-label">Delivered</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'favorites' && (
                            <div className="profile-section">
                                <h2>My Favorites</h2>
                                <div className="favorites-grid">
                                    {favorites.length === 0 ? (
                                        <div className="text-sm text-gray-500">You have no favorites yet — add products using the heart icon.</div>
                                    ) : (
                                        favorites.map((item) => (
                                            <div key={item.id} className="favorite-card">
                                                <div className="fav-img-container">
                                                    <img src={item.image} alt={item.name} />
                                                    <button className="remove-fav-btn" onClick={() => removeFavorite(item.id)}>
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="fav-info">
                                                    <h3>{item.name}</h3>
                                                    <div className="fav-price">${item.price}</div>
                                                    <button
                                                        className="add-to-cart-sm add-to-cart-btn"
                                                        onClick={() => handleAddToCart(item)}
                                                    >
                                                        {addedToCart[item.id] ? 'Added' : 'Add to Cart'}
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        )}
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Profile;
