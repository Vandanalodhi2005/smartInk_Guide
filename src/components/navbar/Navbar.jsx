import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userActions";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  User,
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  LogOut,
  ShoppingBag,
} from "lucide-react";

const logo = "/PrintsCartslogo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePrinterOpen, setMobilePrinterOpen] = useState(false);

  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { cartItems } = useSelector((state) => state.cart);
  const cartCount = cartItems.reduce((acc, item) => acc + Number(item.qty), 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else if (window.scrollY < 40) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobilePrinterOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/printers?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
          : "bg-white py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* TOP ROW */}
          <div className="flex items-center justify-between">

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>

            {/* LOGO */}
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className={`transition-all duration-300 ${isScrolled ? "h-8 md:h-10" : "h-20 md:h-22"
                  }`}
              />
            </Link>

            {/* DESKTOP SEARCH */}
            <form
              onSubmit={handleSearch}
              className="hidden md:flex flex-1 mx-8 relative"
            >
              <input
                type="text"
                placeholder="Search printers, ink, toner..."
                className="w-full border rounded-full px-5 py-2.5 bg-gray-50 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <Search size={18} />
              </button>
            </form>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-5">

              {/* ACCOUNT */}
              <div
                className="relative hidden md:block"
                onMouseEnter={() => setShowAccountDropdown(true)}
                onMouseLeave={() => setShowAccountDropdown(false)}
              >
                <div className="flex items-center gap-2 cursor-pointer">
                  <User size={18} />
                  <span className="text-sm font-bold">
                    {userInfo ? userInfo.name.split(" ")[0] : "Account"}
                  </span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${showAccountDropdown ? "rotate-180" : ""
                      }`}
                  />
                </div>

                <AnimatePresence>
                  {showAccountDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-3 w-52 bg-white shadow-xl rounded-xl border py-3"
                    >
                      {userInfo ? (
                        <>
                          <Link to="/profile" className="block px-4 py-2 hover:bg-blue-50">Profile</Link>
                          <Link to="/orders" className="block px-4 py-2 hover:bg-blue-50">Orders</Link>
                          <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                          >
                            Sign Out
                          </button>
                        </>
                      ) : (
                        <div className="px-4">
                          <Link to="/signin" className="block py-2 text-center bg-gray-100 rounded mb-2">Sign In</Link>
                          <Link to="/signup" className="block py-2 text-center bg-blue-600 text-white rounded">Create Account</Link>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CART */}
              <Link to="/cart" className="relative">
                <ShoppingCart size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden md:flex items-center justify-center gap-8 mt-4 text-sm font-semibold border-t pt-4">

            <Link to="/" className="hover:text-blue-600">Home</Link>

            {/* DIRECT LINKS (Previously Dropdown) */}
            <Link to="/home-printers" className="hover:text-blue-600">Home Printers</Link>
            <Link to="/office-printers" className="hover:text-blue-600">Office Printers</Link>
            <Link to="/laser-printers" className="hover:text-blue-600">Laser Printers</Link>
            <Link to="/inkjet-printers" className="hover:text-blue-600">Inkjet Printers</Link>

            <Link to="/ink-toner" className="hover:text-blue-600">Ink & Toner</Link>
            <Link to="/blogs" className="hover:text-blue-600">Blogs</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>

          </nav>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 left-0 w-80 h-full bg-white shadow-2xl z-50 p-6 md:hidden overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-lg">Menu</h2>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X size={22} />
                </button>
              </div>

              <nav className="flex flex-col font-medium">

                <Link to="/" className="py-3 border-b">Home</Link>

                <button
                  onClick={() => setMobilePrinterOpen(!mobilePrinterOpen)}
                  className="flex items-center justify-between py-3 border-b"
                >
                  Printers
                  <ChevronRight
                    size={18}
                    className={`transition-transform ${mobilePrinterOpen ? "rotate-90" : ""
                      }`}
                  />
                </button>

                <AnimatePresence>
                  {mobilePrinterOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden flex flex-col pl-4"
                    >
                      <Link to="/home-printers" className="py-2">Home Printer</Link>
                      <Link to="/office-printers" className="py-2">Office Printer</Link>
                      <Link to="/laser-printers" className="py-2">Laser Printers</Link>
                      <Link to="/inkjet-printers" className="py-2">Inkjet Printers</Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link to="/ink-toner" className="py-3 border-b">Ink & Toner</Link>
                <Link to="/blogs" className="py-3 border-b">Blogs</Link>
                <Link to="/about" className="py-3 border-b">About</Link>
                <Link to="/contact" className="py-3 border-b">Contact</Link>

                {/* Account Actions (Mobile) */}
                {userInfo ? (
                  <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-1">
                    <div className="px-2 mb-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Account ({userInfo.name.split(" ")[0]})
                    </div>

                    <Link
                      to="/profile"
                      className="flex items-center gap-3 py-3 px-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <User size={18} /> Profile
                    </Link>

                    <Link
                      to="/orders" // Assuming /orders maps to Profile tab or dedicated page. Profile.jsx handles activeTab.
                      state={{ activeTab: 'orders' }} // Pass state if routing to Profile with tab
                      className="flex items-center gap-3 py-3 px-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <ShoppingBag size={18} /> My Orders
                    </Link>

                    <button
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-3 py-3 px-2 text-red-500 hover:bg-red-50 rounded-lg w-full text-left transition-colors mt-2"
                    >
                      <LogOut size={18} /> Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="mt-6 flex flex-col gap-3">
                    <Link
                      to="/signin"
                      className="w-full text-center py-2 bg-gray-100 rounded-lg font-semibold text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="w-full text-center py-2 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}

              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
