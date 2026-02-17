import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendRegistrationOTP, verifyRegistrationOTP } from '../redux/actions/userActions';
import { motion } from 'framer-motion';
import { UserPlus, Mail, Lock, CheckCircle, AlertCircle, ArrowRight, ShieldCheck, User } from 'lucide-react';
import './Auth.css';

const SignUp = () => {
  const [step, setStep] = useState(1); // 1: Details, 2: Verification
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userSendOTP = useSelector((state) => state.userSendOTP);
  const { loading: loadingSendOTP, error: errorSendOTP, success: successSendOTP } = userSendOTP;

  const userVerifyOTP = useSelector((state) => state.userVerifyOTP);
  const { loading: loadingVerifyOTP, error: errorVerifyOTP, success: successVerifyOTP } = userVerifyOTP;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo: userLoginInfo } = userLogin;

  useEffect(() => {
    if (userLoginInfo) {
      navigate('/');
    }
  }, [navigate, userLoginInfo]);

  useEffect(() => {
    if (successSendOTP) {
      setStep(2);
    }
  }, [successSendOTP]);

  useEffect(() => {
    if (successVerifyOTP) {
      navigate('/signin?message=Successfully Verified. Please Login.');
    }
  }, [successVerifyOTP, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (step === 1) {
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      const nameParts = name.trim().split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
      dispatch(sendRegistrationOTP(firstName, lastName, email, password));
    } else {
      dispatch(verifyRegistrationOTP(email, otp));
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-split-container">
        {/* Left Side: Visual */}
        <div className="auth-visual-side">
          <div className="auth-brand-logo">
            <UserPlus size={28} />
            SmartInk Guide
          </div>

          <div className="auth-visual-content">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Start Your Journey.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join thousands of smart printers. Create an account to get exclusive deals, faster checkout, and expert support.
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
              <h1>{step === 1 ? 'Create Account' : 'Verify Email'}</h1>
              <p>
                {step === 1
                  ? 'Fill in your details to get started.'
                  : `We've sent a 6-digit code to ${email}`}
              </p>
            </div>

            {(errorSendOTP || errorVerifyOTP) && (
              <div className="message-box message-error">
                <AlertCircle size={20} />
                <span>{step === 1 ? errorSendOTP : errorVerifyOTP}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <>
                  <div className="auth-form-group">
                    <label className="auth-label">Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        className="auth-input pl-10"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>

                  <div className="auth-form-group">
                    <label className="auth-label">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        className="auth-input pl-10"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>

                  <div className="auth-form-group">
                    <label className="auth-label">Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        className="auth-input pl-10"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>

                  <div className="auth-form-group">
                    <label className="auth-label">Confirm Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        className="auth-input pl-10"
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                      <ShieldCheck size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>
                </>
              ) : (
                <div className="auth-form-group">
                  <label className="auth-label">Verification Code</label>
                  <div className="relative">
                    <input
                      type="text"
                      className="auth-input text-center text-2xl tracking-widest"
                      placeholder="000000"
                      maxLength="6"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="mt-2 text-sm text-blue-600 font-semibold hover:underline"
                  >
                    Wrong email? Change details
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="auth-submit-btn mt-6"
                disabled={loadingSendOTP || loadingVerifyOTP}
              >
                {loadingSendOTP || loadingVerifyOTP ? 'Processing...' : (step === 1 ? 'Create Account' : 'Verify & Sign Up')}
                {!(loadingSendOTP || loadingVerifyOTP) && <ArrowRight size={18} />}
              </button>
            </form>

            <div className="auth-divider">
              <span>OR</span>
            </div>

            <div className="auth-footer">
              <p>Already have an account? <Link to="/signin">Sign In</Link></p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
