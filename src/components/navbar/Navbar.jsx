import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userActions";

const logo = "/PrintsCartslogo.png";

const Navbar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const searchRef = useRef(null);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const user = userInfo;
  const isAdmin = userInfo && userInfo.isAdmin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const cartCount = cartItems.reduce(
    (acc, item) => acc + Number(item.qty),
    0
  );

  const handleSignOut = () => {
    dispatch(logout());
    setShowUserMenu(false);
    navigate("/");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/printers?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowUserMenu(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo (KEPT) */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="SmartInk Guide Logo"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
            <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
            <li><Link to="/printers" className="hover:text-blue-600 transition">Printers</Link></li>
            <li><Link to="/ink-toner" className="hover:text-blue-600 transition">Ink & Toner</Link></li>
            <li><Link to="/blogs" className="hover:text-blue-600 transition">Blogs</Link></li>
            <li><Link to="/about" className="hover:text-blue-600 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-4">

            {/* Expanding Search */}
            <div ref={searchRef} className="relative flex items-center">
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`transition-all duration-300 ease-in-out bg-gray-100 border border-gray-200 rounded-full text-sm px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400 ${
                    isSearchOpen
                      ? "w-48 md:w-64 opacity-100 mr-2"
                      : "w-0 opacity-0 p-0 border-0"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                  {/* New Search Icon */}
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 rounded-full hover:bg-gray-100 transition"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="7" cy="21" r="1" />
                <circle cx="17" cy="21" r="1" />
              </svg>

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-semibold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                {/* Different Modern User Icon */}
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 22c0-4 4-6 8-6s8 2 8 6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                  {user ? (
                    <>
                      <div className="px-4 py-2 border-b text-sm text-gray-600">
                        Signed in as <br />
                        <span className="font-semibold text-gray-800">
                          {user.email}
                        </span>
                      </div>

                      <Link to="/profile" className="block px-4 py-2 hover:bg-gray-50 text-sm">
                        My Profile
                      </Link>

                      <Link
                        to="/profile"
                        state={{ activeTab: "orders" }}
                        className="block px-4 py-2 hover:bg-gray-50 text-sm"
                      >
                        My Orders
                      </Link>

                      {isAdmin && (
                        <Link
                          to="/admin/dashboard"
                          className="block px-4 py-2 hover:bg-blue-50 text-blue-600 font-medium text-sm"
                        >
                          Admin Dashboard
                        </Link>
                      )}

                      <button
                        onClick={handleSignOut}
                        className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 text-sm"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/signin" className="block px-4 py-2 hover:bg-gray-50 text-sm">
                        Sign In
                      </Link>
                      <Link to="/signup" className="block px-4 py-2 hover:bg-gray-50 text-sm">
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
            <ul className="flex flex-col gap-4 px-6 py-6 text-gray-700 font-medium">
              <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
              <li><Link to="/printers" onClick={() => setIsMobileMenuOpen(false)}>Printers</Link></li>
              <li><Link to="/ink-toner" onClick={() => setIsMobileMenuOpen(false)}>Ink & Toner</Link></li>
              <li><Link to="/blogs" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link></li>
              <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
              <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>

      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
