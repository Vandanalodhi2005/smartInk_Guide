import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";

import "./App.css";

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
import HomePrinter from "./components/products/HomePrinter";
import OfficePrinter from "./components/products/OfficePrinter";
import InkToner from "./pages/InkToner";
import AboutUs from "./pages/AboutUs";
import ProductDetails from "./pages/ProductDetails";
import RefundReturnPolicy from "./pages/RefundReturnPolicy";
import PolicyHub from "./pages/PolicyHub";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
// import TopHomePrinters2026 from "./pages/blogs/TopHomePrinters2026";
// import InkjetVsLaserGuide from "./pages/blogs/InkjetVsLaserGuide"; 
// import PrinterOfflineFixGuide from './pages/blogs/PrinterOfflineFixGuide'; 
// import SaveMoneyInkGuide from "./pages/blogs/SaveMoneyInkGuide";
// import PrinterSetupGuide from "./pages/blogs/PrinterSetupGuide";
// import EcoFriendlyPrintingGuide from "./pages/blogs/EcoFriendlyPrintingGuide";

// Auth pages
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

// Shop flow
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

// User & Admin
import Profile from "./pages/Profile";
import AdminDashboard from "./components/admin/Pages/AdminDashboard";
import AdminProducts from "./components/admin/Pages/AdminProducts";
import AdminOrders from "./components/admin/Pages/AdminOrders";
import AdminCustomers from "./components/admin/Pages/AdminCustomers";
import AdminCategories from "./components/admin/Pages/AdminCategories";
import AdminSettings from "./components/admin/Pages/AdminSettings";
import AdminChat from "./components/admin/Pages/AdminChat";
import AdminAnalytics from "./components/admin/Pages/AdminAnalytics";
import AdminLayout from "./components/admin/Layout/AdminLayout";
// import Products from "./pages/Products";
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customers";
import Settings from "./pages/Settings";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import MyOrders from "./pages/MyOrders";
import OrderDetails from "./pages/OrderDetails";
import TrackOrder from "./pages/TrackOrder";

import AdminRoute from "./components/admin/AdminRoute";
import ScrollToTop from "./components/common/ScrollToTop";
import PublicLayout from './components/layout/PublicLayout';

function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <Router>
          <ScrollToTop />

          <Routes>
            {/* Public & Auth Routes with Global Layout */}
            <Route element={<PublicLayout />}>
              {/* Public */}
              <Route path="/" element={<Home />} />
              <Route path="/printers" element={<Printers />} />
              <Route path="/home-printers" element={<HomePrinter />} />
              <Route path="/office-printers" element={<OfficePrinter />} />
              <Route path="/laser-printers" element={<Printers forcedCategory="Laser Printer" />} />
              <Route path="/inkjet-printers" element={<Printers forcedCategory="Inkjet Printer" />} />

              <Route path="/product/:slug" element={<ProductDetails />} />

              <Route path="/ink-toner" element={<InkToner />} />
              <Route path="/ink-toner/home-printer-ink" element={
                <InkToner
                  forcedCategory="Ink"
                  forcedTitle="Home Printer Ink"
                  forcedDescription="Explore affordable and reliable ink cartridges perfect for everyday home documents and school projects."
                />
              } />
              <Route path="/ink-toner/office-printer-ink" element={
                <InkToner
                  forcedCategory="Ink"
                  forcedTitle="Office Printer Ink"
                  forcedDescription="Professional-grade ink for high-volume office printing. Sharp black text and vibrant professional colors."
                />
              } />
              <Route path="/ink-toner/laser-printer-toner" element={
                <InkToner
                  forcedCategory="Toner"
                  forcedTitle="Laser Printer Toner"
                  forcedDescription="High-yield laser toner cartridges for crisp, professional documents and unbeatable reliability."
                />
              } />
              <Route path="/ink-toner/inkjet-printer-ink" element={
                <InkToner
                  forcedCategory="Ink"
                  forcedTitle="Inkjet Printer Ink"
                  forcedDescription="Premium photo-quality ink for stunning results on every page. Perfect for high-resolution graphics and images."
                />
              } />
              <Route path="/ink-toner/:id" element={<ProductDetails />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogDetails />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/policies" element={<PolicyHub />} />
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
              <Route path="/settings" element={<Settings />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/orders" element={<MyOrders />} />
              <Route path="/order/:id" element={<OrderDetails />} />
              <Route path="/track-order" element={<TrackOrder />} />
            </Route>

            {/* Admin Routes with Separate Layout */}
            <Route path="/admin" element={
              <AdminRoute>
                <AdminLayout />
              </AdminRoute>
            }>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="orders" element={<AdminOrders />} />
              <Route path="customers" element={<AdminCustomers />} />
              <Route path="categories" element={<AdminCategories />} />
              <Route path="chat" element={<AdminChat />} />
              <Route path="analytics" element={<AdminAnalytics />} />
              <Route path="settings" element={<AdminSettings />} />
              <Route index element={<Navigate to="dashboard" replace />} />
            </Route>
          </Routes>
        </Router>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;
