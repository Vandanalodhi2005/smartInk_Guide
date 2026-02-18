import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../redux/actions/userActions';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Activity, CheckCircle, AlertCircle, LockKeyhole } from 'lucide-react';
import './Auth.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userForgotPassword = useSelector((state) => state.userForgotPassword);
  const { loading, error, success } = userForgotPassword;

  useEffect(() => {
    if (success) {
      navigate('/reset-password', { state: { email } });
    }
  }, [success, navigate, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      dispatch(forgotPassword(email));
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-split-container">
        {/* Left Side: Visual */}
        <div className="auth-visual-side bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900">
          <div className="auth-brand-logo">
            <LockKeyhole size={28} />
            SmartInk Guide
          </div>

          <div className="auth-visual-content">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Account Recovery.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Don't worry, it happens to the best of us. We'll get you back into your account in no time.
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
            className="w-full max-w-md"
          >
            <div className="auth-header">
              <h1>Forgot Password?</h1>
              <p>Enter your email address and we'll send you a code to reset your password.</p>
            </div>

            {error && (
              <div className="message-box message-error mb-6">
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

              <button type="submit" className="auth-submit-btn mt-6" disabled={loading}>
                {loading ? 'Sending OTP...' : 'Send Reset Code'}
                {!loading && <ArrowRight size={18} />}
              </button>
            </form>

            <div className="auth-footer mt-8 text-center">
              <Link to="/signin" className="text-slate-600 hover:text-blue-600 font-medium inline-flex items-center gap-2 transition-colors">
                <ArrowRight size={16} className="rotate-180" /> Back to Sign In
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
