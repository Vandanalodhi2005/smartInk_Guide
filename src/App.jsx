import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

import "./App.css";

// Public pages
import Home from "./pages/Home";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import ShippingPolicy from "./pages/ShippingPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CookiePolicy from "./pages/CookiePolicy";
import DoNotSell from "./pages/DoNotSell";
import Accessibility from "./pages/Accessibility";
import Disclaimer from "./pages/Disclaimer";
import Printers from "./pages/Printers";
import InkToner from "./pages/InkToner";
import AboutUs from "./pages/AboutUs";
import ProductDetails from "./pages/ProductDetails";
import BrowsePrinters from "./pages/BrowsePrinters";
import RefundReturnPolicy from "./pages/RefundReturnPolicy";

// Auth pages
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

// Shop flow
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

// User & Admin
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import DashboardLayout from "./pages/Dashboard";
import DashboardHome from "./pages/DashboardHome";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/printers" element={<Printers />} />
            <Route path="/printers/:id" element={<ProductDetails />} />
            <Route path="/browse-printers" element={<BrowsePrinters />} />
            <Route path="/ink-toner" element={<InkToner />} />
            <Route path="/ink-toner/:id" element={<ProductDetails />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/refund-return-policy" element={<RefundReturnPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/do-not-sell" element={<DoNotSell />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/disclaimer" element={<Disclaimer />} />

            {/* Auth */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Shop */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />

            {/* User */}
            <Route path="/profile" element={<Profile />} />

            {/* Admin */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="products" element={<Products />} />
              <Route path="orders" element={<Orders />} />
              <Route path="customers" element={<Customers />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
