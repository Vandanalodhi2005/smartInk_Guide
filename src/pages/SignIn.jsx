import { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/userActions';
import { motion } from 'framer-motion';
import { Mail, Lock, CheckCircle, AlertCircle, ArrowRight, UserCheck } from 'lucide-react';
import './Auth.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdminLogin, setIsAdminLogin] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const [successMessage, setSuccessMessage] = useState('');

  // Parse query params safely
  const queryParams = new URLSearchParams(location.search);
  const redirect = queryParams.get('redirect');
  const messageParam = queryParams.get('message');

  useEffect(() => {
    if (messageParam) {
      setSuccessMessage(messageParam);
    }
  }, [messageParam]);

  useEffect(() => {
    if (userInfo) {
      setSuccessMessage('Logged In Successfully');
      const timer = setTimeout(() => {
        if (redirect) {
          navigate(`/${redirect}`);
        } else if (userInfo.isAdmin) {
          navigate('/admin/dashboard');
        } else {
          navigate('/');
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [userInfo, navigate, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    dispatch(login(email, password, isAdminLogin));
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-split-container">
        {/* Left Side: Visual */}
        <div className="auth-visual-side">
          <div className="auth-brand-logo">
            <UserCheck size={28} />
            SmartInk Guide
          </div>

          <div className="auth-visual-content">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Welcome Back.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Access your order history, track shipments, and manage your account details securely.
            </motion.p>
          </div>

          <div className="auth-visual-footer">
            © 2026 SmartInk Guide. All rights reserved.
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="auth-form-side">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="auth-header">
              <h1>{isAdminLogin ? 'Admin Portal' : 'Sign In'}</h1>
              <p>Please enter your credentials to continue.</p>
            </div>

            {successMessage && (
              <div className="message-box message-success">
                <CheckCircle size={20} />
                <span>{successMessage}</span>
              </div>
            )}

            {error && (
              <div className="message-box message-error">
                <AlertCircle size={20} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="auth-form-group">
                <label className="auth-label">Email Address</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                    <Mail size={20} />
                  </div>
                  <input
                    type="email"
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-700 font-medium placeholder:text-slate-400"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="auth-form-group">
                <label className="auth-label">Password</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                    <Lock size={20} />
                  </div>
                  <input
                    type="password"
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-700 font-medium placeholder:text-slate-400"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="auth-options">
                <label className="remember-me">
                  <input
                    type="checkbox"
                    checked={isAdminLogin}
                    onChange={(e) => setIsAdminLogin(e.target.checked)}
                    className="accent-blue-600 w-4 h-4"
                  />
                  Login as Admin
                </label>
                <Link to="/forgot-password" class="forgot-password">
                  Forgot Password?
                </Link>
              </div>

              <button type="submit" className="auth-submit-btn" disabled={loading}>
                {loading ? 'Signing In...' : 'Sign In'}
                {!loading && <ArrowRight size={18} />}
              </button>
            </form>

            <div className="auth-divider">
              <span>OR</span>
            </div>

            <div className="auth-footer">
              {!isAdminLogin ? (
                <p>New customer? <Link to="/signup">Create an account</Link></p>
              ) : (
                <p>Not an admin? <span className="text-blue-600 font-bold cursor-pointer" onClick={() => setIsAdminLogin(false)}>User Login</span></p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
