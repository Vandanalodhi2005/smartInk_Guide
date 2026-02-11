import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userActions';
import axios from 'axios';
const logo = "/PrintsCartslogo.png"; // Ensure you have a logo image in the same directory or adjust the path accordingly

const Navbar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Responsive state
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Search State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  
  const user = userInfo;
  const isAdmin = userInfo && userInfo.isAdmin;

  // Cart from Redux
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const cartCount = cartItems.reduce((acc, item) => acc + Number(item.qty), 0);

  const navigate = useNavigate();
  const menuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const searchRef = useRef(null);
  
  // Search Logic
  const handleSearchChange = async (e) => {
      const query = e.target.value;
      setSearchQuery(query);

      if (query.length >= 2) {
          try {
              const { data } = await axios.get(
                  `${import.meta.env.VITE_API_URL}/products/search/suggestions`,
                  { params: { q: query } }
              );
              setSuggestions(data);
              setShowSuggestions(true);
          } catch (error) {
              console.error("Error fetching suggestions:", error);
              setSuggestions([]);
              setShowSuggestions(false);
          }
      } else {
          setSuggestions([]);
          setShowSuggestions(false);
      }
  };

  const handleSearchSubmit = (e) => {
      e.preventDefault();
      if (searchQuery.trim()) {
          // Navigate to search results page (assuming /printers handles search or create /search route)
          // For now, let's assume /printers?search=... or just stay on same page if implemented
          // But smartEprinting uses: navigate(`/?search=${encodeURIComponent(searchQuery)}`);
          // Let's implement similar:
          navigate(`/printers?search=${encodeURIComponent(searchQuery)}`);
          setIsSearchOpen(false);
          setShowSuggestions(false);
      }
  };
  
    const handleSuggestionClick = (suggestion) => {
        setIsSearchOpen(false);
        setShowSuggestions(false);
        setSearchQuery('');
        
        if (suggestion.slug) {
            navigate(`/product/${suggestion.slug}`);
        } else {
            navigate(`/printers?search=${encodeURIComponent(suggestion.title)}`);
        }
    };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.mobile-toggle')) {
        setIsMobileMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target) && !event.target.closest('.search-btn')) {
          // Don't close immediately if clicking inside suggestion
          // handled by click handlers
      }
    };

    if (showUserMenu || isMobileMenuOpen || isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserMenu, isMobileMenuOpen, isSearchOpen]);

  const handleSignOut = () => {
    dispatch(logout());
    setShowUserMenu(false);
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="PrintsCarts Logo" className="h-10 md:h-20 w-auto object-contain" />
          </Link>

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/printers">Printers</Link></li>
            <li><Link to="/ink-toner">Ink & Toner</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <div className="nav-icons">
             {/* Search Button */}
             <div className="search-container" ref={searchRef}>
                <button className="icon-btn search-btn" aria-label="Search" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
                
                {isSearchOpen && (
                    <div className="search-dropdown">
                        <form onSubmit={handleSearchSubmit}>
                            <input 
                                type="text" 
                                placeholder="Search products..." 
                                value={searchQuery}
                                onChange={handleSearchChange}
                                autoFocus
                            />
                            <button type="submit">Go</button>
                        </form>
                        {showSuggestions && suggestions.length > 0 && (
                            <ul className="search-suggestions">
                                {suggestions.map((s) => (
                                    <li key={s._id} onClick={() => handleSuggestionClick(s)}>
                                        <div className="suggestion-item">
                                            {s.image && <img src={s.image.startsWith('http') ? s.image : `${import.meta.env.VITE_API_URL.replace('/api', '')}${s.image}`} alt="" />}
                                            <span>{s.title}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
             </div>

            <Link to="/cart" className="icon-btn cart-btn" aria-label="Shopping Cart">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7H15L14 13H6L5 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="7.5" cy="16.5" r="1.5" fill="currentColor" />
                <circle cx="13.5" cy="16.5" r="1.5" fill="currentColor" />
                <path d="M3 5H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
            <div className="user-menu-container" ref={menuRef}>
              {user ? (
                  <button className="user-profile-trigger flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white hover:shadow-md transition-all" onClick={() => setShowUserMenu(!showUserMenu)}>
                    <div className="user-avatar-circle bg-blue-100 text-blue-700 font-bold flex items-center justify-center w-8 h-8 rounded-full text-lg">
                      {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <span className="user-name-text font-semibold text-slate-800 text-base">{user.name?.split(' ')[0]}</span>
                  </button>
              ) : (
                <button
                    className="icon-btn user-btn"
                    aria-label="User Account"
                    onClick={() => setShowUserMenu(!showUserMenu)}
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 17C5 14 7 12 10 12C13 12 15 14 15 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
              )}
              
              {showUserMenu && (
                <div className="user-menu">
                  {user ? (
                    <>
                      <div className="user-menu-header">
                        <p className="signed-in-label">Signed in as</p>
                        <p className="signed-in-email">{user.email}</p>
                      </div>
                      
                      <div className="user-menu-divider"></div>
                      
                      {isAdmin && (
                        <Link to="/admin/dashboard" className="user-menu-item admin-link" onClick={() => setShowUserMenu(false)}>
                          Admin Dashboard
                        </Link>
                      )}
                      
                      <Link to="/profile" className="user-menu-item" onClick={() => setShowUserMenu(false)}>
                        My Profile
                      </Link>
                      <Link to="/profile" state={{ activeTab: 'orders' }} className="user-menu-item" onClick={() => setShowUserMenu(false)}>
                        My Orders
                      </Link>

                      <button className="user-menu-item sign-out" onClick={handleSignOut}>
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/signin" className="user-menu-item" onClick={() => setShowUserMenu(false)}>
                        Sign In
                      </Link>
                      <Link to="/signup" className="user-menu-item" onClick={() => setShowUserMenu(false)}>
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
            <button
              className="icon-btn mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Only render mobile menu and profile bottom on mobile screens */}
        {windowWidth <= 1024 && (
          <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} ref={mobileMenuRef} style={{display:'flex', flexDirection:'column', height:'100vh', minHeight:'100dvh'}}>
            <div style={{flex:'1 1 auto', overflowY:'auto', display:'flex', flexDirection:'column'}}>
              <ul className="mobile-nav-links">
                <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
                <li><Link to="/printers" onClick={closeMobileMenu}>Printers</Link></li>
                <li><Link to="/ink-toner" onClick={closeMobileMenu}>Ink & Toner</Link></li>
                <li><Link to="/blogs" onClick={closeMobileMenu}>Blogs</Link></li>
                <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
                <li><Link to="/faqs" onClick={closeMobileMenu}>FAQs</Link></li>
                <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
              </ul>
              <div className="mobile-auth-section">
                 {user ? (
                    <>
                       <Link to="/profile" className="mobile-user-header profile-link flex items-center gap-3 p-2 rounded-lg border border-slate-200 bg-white mb-2" onClick={closeMobileMenu}>
                          <div className="user-avatar-circle small bg-blue-100 text-blue-700 font-bold flex items-center justify-center w-8 h-8 rounded-full text-lg">
                              {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                          </div>
                          <div className="mobile-user-details flex flex-col">
                              <span className="mobile-user-name font-semibold text-slate-800">{user.name?.split(' ')[0]}</span>
                              <span className="mobile-user-email text-xs text-slate-500">{user.email}</span>
                          </div>
                          <div className="mobile-user-arrow ml-auto">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                          </div>
                       </Link>
                       <div className="mobile-user-links">
                           {isAdmin && (
                              <Link to="/admin/dashboard" className="mobile-link admin" onClick={closeMobileMenu}>
                                  Admin Dashboard
                              </Link>
                           )}
                           <Link to="/profile" state={{ activeTab: 'orders' }} className="mobile-link" onClick={closeMobileMenu}>My Orders</Link>
                           <button className="mobile-link logout-btn" onClick={handleSignOut}>Logout</button>
                       </div>
                    </>
                 ) : (
                    <div className="mobile-auth-buttons">
                        <Link to="/signin" className="mobile-auth-btn signin" onClick={closeMobileMenu}>Sign In</Link>
                        <Link to="/signup" className="mobile-auth-btn signup" onClick={closeMobileMenu}>Sign Up</Link>
                    </div>
                 )}
              </div>
            </div>
            {/* Profile icon always at the bottom */}
            {user && (
              <div className="mobile-profile-bottom w-full bg-white border-t border-slate-200 flex items-center gap-3 px-4 py-3" style={{boxShadow:'0 -2px 8px rgba(0,0,0,0.04)'}}>
                <Link to="/profile" className="flex items-center gap-2 w-full" onClick={closeMobileMenu}>
                  <div className="user-avatar-circle bg-blue-100 text-blue-700 font-bold flex items-center justify-center w-9 h-9 rounded-full text-lg">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <span className="font-semibold text-slate-800 text-base">{user.name?.split(' ')[0]}</span>
                  <span className="ml-auto text-xs text-slate-400">Profile</span>
                </Link>
              </div>
            )}
          </div>
        )}
      </nav>

      <div className="navbar-spacer"></div>

      <style>{`
        .navbar-spacer {
          height: 72px;
        }
        @media (min-width: 768px) {
          .navbar-spacer {
            height: 112px;
          }
        }

        .navbar {
          background: #fff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          width: 100%;
        }

        .navbar-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .nav-logo:hover {
          transform: scale(1.05);
        }

        .logo-icon {
          display: flex;
          align-items: center;
        }

        .logo-text {
          font-size: 24px;
          font-weight: 700;
          color: #0f3d91;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 32px;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: all 0.3s;
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #0f3d91;
          transition: width 0.3s ease;
        }

        .nav-links a:hover {
          color: #0f3d91;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-icons {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #333;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.3s;
          text-decoration: none;
          position: relative;
        }

        .icon-btn:hover {
          color: #0f3d91;
        }

        .cart-btn {
          position: relative;
        }

        .cart-badge {
          position: absolute;
          top: 0;
          right: 0;
          background: #ef4444;
          color: #fff;
          font-size: 10px;
          font-weight: 600;
          padding: 2px 6px;
          border-radius: 10px;
          min-width: 18px;
          text-align: center;
          line-height: 1.4;
        }

        .user-menu-container {
          position: relative;
        }
        
        /* New Profile Trigger Style */
        .user-profile-trigger {
            display: flex;
            align-items: center;
            gap: 8px;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 4px 12px 4px 4px;
            border-radius: 50px;
            transition: background 0.2s;
        }
        .user-profile-trigger:hover {
            background: #f3f4f6;
        }
        .user-avatar-circle {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: #0f3d91;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 14px;
            text-transform: uppercase;
        }
        .user-name-text {
            font-size: 14px;
            font-weight: 600;
            color: #4b5563;
        }

        .user-menu {
          position: absolute;
          top: calc(100% + 12px);
          right: 0;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          min-width: 220px;
          z-index: 1000;
          border: 1px solid #f3f4f6;
          padding: 8px 0;
          animation: fadeInDown 0.2s ease-out;
        }

        .user-menu-header {
           padding: 12px 16px;
           background-color: #f9fafb;
           border-bottom: 1px solid #e5e7eb;
           margin-bottom: 4px;
        }
        .signed-in-label {
           font-size: 11px;
           color: #6b7280;
           margin: 0;
        }
        .signed-in-email {
           font-size: 13px;
           font-weight: 600;
           color: #1f2937;
           margin: 0;
           white-space: nowrap;
           overflow: hidden;
           text-overflow: ellipsis;
        }

        .user-menu-divider {
          height: 1px;
          background: #e5e7eb;
          margin: 4px 0;
        }

        .user-menu-item {
          display: block;
          padding: 10px 16px;
          color: #374151;
          text-decoration: none;
          font-size: 14px;
          transition: background 0.2s;
          border: none;
          background: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
        }

        .user-menu-item:hover {
          background: #f3f4f6;
          color: #111827;
        }

        .user-menu-item.admin-link {
          color: #0f3d91;
          font-weight: 700;
        }

        .user-menu-item.sign-out {
          color: #ef4444;
          margin-top: 4px;
          border-top: 1px solid #f3f4f6;
        }
        
        /* Mobile Auth Section Styles */
        .mobile-auth-section {
            padding: 20px;
            border-top: 1px solid #f0f0f0;
            background: #fcfcfc;
        }
        .mobile-user-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
            background: white;
            padding: 12px;
            border-radius: 12px;
            border: 1px solid #eee;
            text-decoration: none; /* Ensure Link doesn't have underline */
            transition: all 0.2s;
            cursor: pointer;
        }
        .mobile-user-header:hover {
            border-color: #0f3d91;
            background: #fcfcfc;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .user-avatar-circle.small {
            width: 40px;
            height: 40px;
            font-size: 16px;
            flex-shrink: 0;
        }
        .mobile-user-details {
            display: flex;
            flex-direction: column;
            flex: 1; /* Take remaining width */
        }
        .mobile-user-arrow {
            color: #9ca3af;
        }
        .mobile-user-name {
            font-weight: 700;
            color: #1f2937;
            font-size: 15px;
        }
        .mobile-user-email {
            font-size: 12px;
            color: #6b7280;
        }
        .mobile-user-links {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .mobile-link {
            padding: 10px 12px;
            font-size: 14px;
            color: #4b5563;
            text-decoration: none;
            border-radius: 8px;
            transition: background 0.2s;
            font-weight: 500;
        }
        .mobile-link:hover {
            background: #f3f4f6;
            color: #0f3d91;
        }
        .mobile-link.admin {
            color: #0f3d91;
            font-weight: 700;
            background: #eff6ff;
        }
        .mobile-link.logout-btn {
            background: none;
            border: none;
            text-align: left;
            color: #ef4444;
            cursor: pointer;
            margin-top: 8px;
            border-top: 1px solid #eee;
            padding-top: 16px;
        }
        
        .mobile-auth-buttons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }
        .mobile-auth-btn {
            text-align: center;
            padding: 12px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
        }
        .mobile-auth-btn.signin {
            background: white;
            border: 1px solid #e5e7eb;
            color: #374151;
        }
        .mobile-auth-btn.signup {
            background: #0f3d91;
            color: white;
            border: 1px solid #0f3d91;
        }

        /* Search Styles */
        .search-container {
            position: relative;
        }
        .search-btn {
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px;
            color: #374151; /* Dark gray */
            border-radius: 50%;
            transition: background 0.2s;
        }
        .search-btn:hover {
            background-color: #f3f4f6;
        }
        .search-dropdown {
            position: absolute;
            top: 100%;
            right: 0;
            width: 300px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            padding: 12px;
            z-index: 50;
            border: 1px solid #e5e7eb;
            margin-top: 8px;
        }
        @media (max-width: 640px) {
          .search-dropdown {
            position: fixed;
            top: 72px;
            left: 0;
            right: 0;
            width: 100vw;
            max-width: 100vw;
            border-radius: 0 0 12px 12px;
            margin-top: 0;
            padding: 16px 12px 16px 12px;
            box-shadow: 0 8px 24px 0 rgba(0,0,0,0.10);
          }
        }
        .search-dropdown form {
            display: flex;
            gap: 8px;
        }
        .search-dropdown input {
            flex: 1;
            padding: 8px 12px;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            font-size: 14px;
            outline: none;
        }
        .search-dropdown input:focus {
             border-color: #0f3d91;
             box-shadow: 0 0 0 2px rgba(15, 61, 145, 0.1);
        }
        .search-dropdown button[type="submit"] {
            background: #0f3d91;
            color: white;
            border: none;
            border-radius: 6px;
            padding: 8px 16px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
        }
        .search-suggestions {
            list-style: none;
            margin: 10px 0 0 0;
            padding: 0;
            border-top: 1px solid #eee;
        }
        .search-suggestions li {
            padding: 8px 4px;
            cursor: pointer;
            transition: background 0.1s;
            border-bottom: 1px solid #f9fafb;
        }
        .search-suggestions li:last-child {
            border-bottom: none;
        }
        .search-suggestions li:hover {
            background: #f3f4f6;
            border-radius: 4px;
        }
        .suggestion-item {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .suggestion-item img {
            width: 32px;
            height: 32px;
            object-fit: contain;
            border-radius: 4px;
            background: #f9fafb;
        }
        .suggestion-item span {
            font-size: 13px;
            color: #374151;
            font-weight: 500;
            line-height: 1.2;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Default states for mobile elements */
        .mobile-toggle {
          display: none;
        }

        .mobile-menu {
          display: none;
        }

        @media (max-width: 1024px) {
                  @media (min-width: 1025px) {
                    .mobile-menu, .mobile-profile-bottom {
                      display: none !important;
                    }
                  }
          .nav-links {
            display: none;
          }

          .mobile-toggle {
            display: flex;
          }

          .mobile-menu {
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #ffffff;
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            z-index: 10000;
          }

          .mobile-menu.open {
            max-height: 400px;
            opacity: 1;
            border-top: 1px solid #f0f0f0;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          .mobile-nav-links {
            list-style: none;
            padding: 20px;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .mobile-nav-links a {
            text-decoration: none;
            color: #333;
            font-weight: 500;
            font-size: 16px;
            display: block;
            padding: 8px 0;
          }

          .mobile-nav-links a:hover {
            color: #0f3d91;
          }
          
          /* Hide desktop user menu on mobile */
          .user-menu-container {
             display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;

