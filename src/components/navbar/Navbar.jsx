import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userActions";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  User,
  MapPin,
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  LogOut,
  Settings as SettingsIcon,
  Package,
  HelpCircle,
  FileText,
} from "lucide-react";

const logo = "/PrintsCartslogo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [printerOpen, setPrinterOpen] = useState(false);
  const [inkOpen, setInkOpen] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [mobilePrinterOpen, setMobilePrinterOpen] = useState(false);
  const [mobileInkOpen, setMobileInkOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { cartItems } = useSelector((state) => state.cart);
  const cartCount = cartItems.reduce((acc, item) => acc + Number(item.qty), 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    dispatch(logout());
    setShowAccountDropdown(false);
    setMobileOpen(false);
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/printers?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setMobileOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
          : "bg-white py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* ================= TOP ROW ================= */}
          <div className="flex items-center justify-between gap-4">

            {/* MOBILE MENU TOGGLE */}
            <button
              className="md:hidden p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={24} />
            </button>

            {/* LOGO */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="PrintsCarts Logo"
                className={`transition-all duration-300 object-contain ${isScrolled ? "h-8 md:h-10" : "h-10 md:h-12"
                  }`}
              />
            </Link>

            {/* SEARCH (Desktop) */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 mx-8 relative">
              <input
                type="text"
                placeholder="Search printers, ink, toner..."
                className="w-full border border-gray-200 bg-gray-50 rounded-full px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white focus:border-blue-500 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors">
                <Search size={18} />
              </button>
            </form>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-2 md:gap-6">

              {/* DELIVERY LOCATION (Desktop) */}
              <div className="hidden lg:flex items-center gap-2 cursor-pointer group">
                <div className="p-2 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors">
                  <MapPin size={18} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="text-xs leading-tight">
                  <p className="text-gray-400 font-medium">Deliver to</p>
                  <p className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">India</p>
                </div>
              </div>

              {/* CURRENCY (Desktop) */}
              <div className="hidden lg:block relative group">
                <div className="flex items-center gap-1.5 cursor-pointer text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">
                  <span>{currency}</span>
                  <ChevronDown size={14} />
                </div>
                {/* Realistically would be a real dropdown, keeping simple for now */}
              </div>

              {/* ACCOUNT (Desktop) */}
              <div
                className="relative group hidden md:block"
                onMouseEnter={() => setShowAccountDropdown(true)}
                onMouseLeave={() => setShowAccountDropdown(false)}
              >
                <div className="flex items-center gap-2 cursor-pointer py-2 group-hover:text-blue-600 transition-colors">
                  <div className="p-2 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors">
                    <User size={18} />
                  </div>
                  <div className="text-xs leading-tight">
                    <p className="text-gray-400 font-medium">{userInfo ? 'Welcome' : 'Sign in'}</p>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors truncate max-w-[80px]">
                        {userInfo ? userInfo.name.split(' ')[0] : 'Account'}
                      </span>
                      <ChevronDown size={12} className={`transition-transform duration-200 ${showAccountDropdown ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {showAccountDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-56 bg-white shadow-2xl rounded-2xl border border-gray-100 py-3 z-50 overflow-hidden"
                    >
                      {userInfo ? (
                        <>
                          <div className="px-4 py-3 mb-2 border-b border-gray-50 bg-gray-50/50">
                            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Account Profile</p>
                            <p className="text-sm font-black text-gray-800 truncate">{userInfo.email}</p>
                          </div>
                          <Link to="/profile" className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                            <User size={16} /> My Profile
                          </Link>
                          <Link to="/orders" className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                            <Package size={16} /> My Orders
                          </Link>
                          {userInfo.isAdmin && (
                            <Link to="/admin/dashboard" className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors border-t border-gray-50">
                              <SettingsIcon size={16} /> Admin Panel
                            </Link>
                          )}
                          <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 transition-colors border-t border-gray-50 mt-2"
                          >
                            <LogOut size={16} /> Sign Out
                          </button>
                        </>
                      ) : (
                        <div className="px-4 py-2">
                          <p className="text-xs text-center text-gray-400 mb-4 px-2">Sign in to track orders and save favorites.</p>
                          <Link to="/signin" className="block w-full py-2.5 text-center text-sm font-bold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all mb-2">Sign In</Link>
                          <Link to="/signup" className="block w-full py-2.5 text-center text-sm font-bold text-white bg-blue-600 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-none transition-all">
                            Create Account
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CART */}
              <Link to="/cart" className="relative group p-2 hover:bg-gray-50 rounded-full transition-colors">
                <ShoppingCart size={22} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-black border-2 border-white shadow-sm ring-2 ring-red-500/20">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* MOBILE SEARCH ICON */}
              <button
                className="md:hidden p-2 hover:bg-gray-50 rounded-full transition-colors"
                onClick={() => setMobileOpen(true)}
              >
                <Search size={22} className="text-gray-700" />
              </button>
            </div>
          </div>

          {/* ================= CATEGORY BAR (Desktop) ================= */}
          <nav className="category-bar hidden md:flex items-center gap-8 mt-4 text-sm font-bold text-gray-600 border-t border-gray-50 pt-4">
            <div
              className="relative"
              onMouseEnter={() => setPrinterOpen(true)}
              onMouseLeave={() => setPrinterOpen(false)}
            >
              <button className={`flex items-center gap-1.5 hover:text-blue-600 transition-colors ${printerOpen ? 'text-blue-600' : ''}`}>
                Printers
                <ChevronDown size={14} className={`transition-transform duration-200 ${printerOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {printerOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-4 w-[600px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-3xl p-8 grid grid-cols-3 gap-8 z-50 border border-gray-100"
                  >
                    <div>
                      <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-300 mb-5">Shop By Type</h4>
                      <div className="space-y-4">
                        <Link to="/printers?category=Inkjet Printer" className="block hover:text-blue-600 transition-colors">Inkjet Printers</Link>
                        <Link to="/printers?category=Laser Printer" className="block hover:text-blue-600 transition-colors">Laser Printers</Link>
                        <Link to="/printers?category=Office Printer" className="block hover:text-blue-600 transition-colors">All-in-One</Link>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-300 mb-5">Shop By Use</h4>
                      <div className="space-y-4">
                        <Link to="/printers?category=Home Printer" className="block hover:text-blue-600 transition-colors">Home Use</Link>
                        <Link to="/printers?category=Office Printer" className="block hover:text-blue-600 transition-colors">Professional</Link>
                        <Link to="/printers" className="block hover:text-blue-600 transition-colors">Business</Link>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-300 mb-5">Top Brands</h4>
                      <div className="space-y-4">
                        <Link to="/printers?brand=HP" className="block hover:text-blue-600 transition-colors">HP</Link>
                        <Link to="/printers?brand=Canon" className="block hover:text-blue-600 transition-colors">Canon</Link>
                        <Link to="/printers?brand=Epson" className="block hover:text-blue-600 transition-colors">Epson</Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setInkOpen(true)}
              onMouseLeave={() => setInkOpen(false)}
            >
              <button className={`flex items-center gap-1.5 hover:text-blue-600 transition-colors ${inkOpen ? 'text-blue-600' : ''}`}>
                Ink & Toner
                <ChevronDown size={14} className={`transition-transform duration-200 ${inkOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {inkOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-4 w-[400px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-3xl p-8 grid grid-cols-2 gap-8 z-50 border border-gray-100"
                  >
                    <div>
                      <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-300 mb-5">By Machine</h4>
                      <div className="space-y-4">
                        <Link to="/ink-toner?category=Ink" className="block hover:text-blue-600 transition-colors">Inkjet Cartridges</Link>
                        <Link to="/ink-toner?category=Toner" className="block hover:text-blue-600 transition-colors">Laser Toner</Link>
                        <Link to="/ink-toner" className="block hover:text-blue-600 transition-colors">Browse All</Link>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-300 mb-5">Top Brands</h4>
                      <div className="space-y-4">
                        <Link to="/ink-toner?brand=HP" className="block hover:text-blue-600 transition-colors">HP</Link>
                        <Link to="/ink-toner?brand=Canon" className="block hover:text-blue-600 transition-colors">Canon</Link>
                        <Link to="/ink-toner?brand=Brother" className="block hover:text-blue-600 transition-colors">Brother</Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to="/blogs" className="hover:text-blue-600 transition-colors">Blogs</Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
            <Link to="/faqs" className="hover:text-blue-600 transition-colors">Help Center</Link>
          </nav>
        </div>
      </header>

      {/* ================= MOBILE MENU DRAWER ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[340px] bg-white z-[101] shadow-2xl md:hidden overflow-y-auto flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-6 flex items-center justify-between border-b border-gray-50 sticky top-0 bg-white z-10">
                <img src={logo} alt="Logo" className="h-8 object-contain" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 p-6 space-y-8">
                {/* Search */}
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full bg-gray-50 border-none rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-blue-500/20"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" />
                </form>

                {/* Navigation Links */}
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-3 px-2">Main Menu</p>
                  <div className="space-y-1">
                    <button
                      onClick={() => setMobilePrinterOpen(!mobilePrinterOpen)}
                      className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 transition-colors group"
                    >
                      <span className="font-bold text-gray-800">Printers</span>
                      <ChevronDown
                        size={18}
                        className={`text-gray-300 transition-transform duration-300 ${mobilePrinterOpen ? 'rotate-180 text-blue-600' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobilePrinterOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden pl-4 space-y-1"
                        >
                          <Link to="/printers?category=Inkjet Printer" className="block p-3 text-sm font-semibold text-gray-600 hover:text-blue-600 border-l-2 border-transparent hover:border-blue-600 transition-all">Inkjet Printers</Link>
                          <Link to="/printers?category=Laser Printer" className="block p-3 text-sm font-semibold text-gray-600 hover:text-blue-600 border-l-2 border-transparent hover:border-blue-600 transition-all">Laser Printers</Link>
                          <Link to="/printers?category=Office Printer" className="block p-3 text-sm font-semibold text-gray-600 hover:text-blue-600 border-l-2 border-transparent hover:border-blue-600 transition-all">All-in-One</Link>
                          <Link to="/printers?category=Home Printer" className="block p-3 text-sm font-semibold text-gray-600 hover:text-blue-600 border-l-2 border-transparent hover:border-blue-600 transition-all">Home Use</Link>
                          <Link to="/printers" className="block p-3 text-sm font-bold text-blue-600 bg-blue-50/50 rounded-xl mt-2">View All Inventory</Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="space-y-1">
                    <button
                      onClick={() => setMobileInkOpen(!mobileInkOpen)}
                      className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 transition-colors group"
                    >
                      <span className="font-bold text-gray-800">Ink & Toner</span>
                      <ChevronDown
                        size={18}
                        className={`text-gray-300 transition-transform duration-300 ${mobileInkOpen ? 'rotate-180 text-blue-600' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileInkOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden pl-4 space-y-1"
                        >
                          <Link to="/ink-toner?category=Ink" className="block p-3 text-sm font-semibold text-gray-600 hover:text-blue-600 border-l-2 border-transparent hover:border-blue-600 transition-all">HP Ink</Link>
                          <Link to="/ink-toner?category=Ink" className="block p-3 text-sm font-semibold text-gray-600 hover:text-blue-600 border-l-2 border-transparent hover:border-blue-600 transition-all">Canon Ink</Link>
                          <Link to="/ink-toner?category=Toner" className="block p-3 text-sm font-semibold text-gray-600 hover:text-blue-600 border-l-2 border-transparent hover:border-blue-600 transition-all">Toner Cartridges</Link>
                          <Link to="/ink-toner" className="block p-3 text-sm font-bold text-blue-600 bg-blue-50/50 rounded-xl mt-2">Shop All Supplies</Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <Link to="/blogs" className="flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 transition-colors group">
                    <span className="font-bold text-gray-800">Blogs</span>
                    <ChevronRight size={18} className="text-gray-300 group-hover:text-blue-600 transition-colors" />
                  </Link>
                  <Link to="/about" className="flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 transition-colors group">
                    <span className="font-bold text-gray-800">About Us</span>
                    <ChevronRight size={18} className="text-gray-300 group-hover:text-blue-600 transition-colors" />
                  </Link>
                  <Link to="/faqs" className="flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 transition-colors group">
                    <span className="font-bold text-gray-800">Help Center</span>
                    <ChevronRight size={18} className="text-gray-300 group-hover:text-blue-600 transition-colors" />
                  </Link>
                </div>

                {/* Account Section */}
                <div className="pt-8 border-t border-gray-50">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4 px-2">Account</p>
                  {userInfo ? (
                    <div className="space-y-1">
                      <Link to="/profile" className="flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-50 transition-colors">
                        <div className="p-2 bg-blue-50 rounded-full text-blue-600"><User size={18} /></div>
                        <span className="font-bold text-gray-800 truncate">{userInfo.name}</span>
                      </Link>
                      <Link to="/orders" className="flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-50 transition-colors">
                        <div className="p-2 bg-gray-50 rounded-full text-gray-600"><Package size={18} /></div>
                        <span className="font-bold text-gray-800 text-sm">My Orders</span>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-red-50 transition-colors text-red-600"
                      >
                        <div className="p-2 bg-red-100/50 rounded-full"><LogOut size={18} /></div>
                        <span className="font-bold text-sm">Sign Out</span>
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-3">
                      <Link to="/signin" className="w-full py-3.5 text-center text-sm font-bold text-gray-700 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-all">Sign In</Link>
                      <Link to="/signup" className="w-full py-3.5 text-center text-sm font-bold text-white bg-blue-600 rounded-2xl shadow-lg shadow-blue-200">Create Account</Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 bg-gray-50 mt-auto">
                <div className="flex items-center gap-2 mb-4 text-xs font-bold text-gray-400">
                  <HelpCircle size={14} /> Need more help?
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px] font-bold text-gray-500">
                  <Link to="/shipping-policy" className="hover:text-blue-600 transition-colors">Shipping Info</Link>
                  <Link to="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
                  <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link>
                  <Link to="/terms-conditions" className="hover:text-blue-600 transition-colors">Terms of Use</Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
