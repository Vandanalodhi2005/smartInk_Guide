import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendRegistrationOTP, verifyRegistrationOTP } from '../redux/actions/userActions';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
const logo = "/PrintsCartslogo.png";
import '../styles/pages.css';

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
      navigate('/signin?message=Successfully Verified, Please Login');
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
    <>
      <Navbar />
      <div className="auth-page">
        <div className="auth-container">
          <div className="auth-card">
            <div className="flex justify-center mb-6">
                <img src={logo} alt="SmartInk Guide" className="h-12 md:h-24 w-auto object-contain" />
            </div>
            <h1>{step === 1 ? 'Sign Up' : 'Verify Email'}</h1>
            <p className="auth-subtitle">
              {step === 1 
                ? 'Create your account to start shopping.' 
                : `We've sent a verification code to ${email}`}
            </p>

            {(errorSendOTP || errorVerifyOTP) && (
              <div className="error-message">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" fill="#ef4444"/>
                  <path d="M10 6V10M10 14H10.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>{step === 1 ? errorSendOTP : errorVerifyOTP}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="auth-form">
              {step === 1 ? (
                <>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                </>
              ) : (
                <div className="form-group">
                  <label htmlFor="otp">Verification Code</label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter the 6-digit code"
                    required
                  />
                  <button 
                    type="button" 
                    className="resend-link" 
                    onClick={() => setStep(1)}
                    style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', marginTop: '0.5rem', padding: 0, textDecoration: 'underline' }}
                  >
                    Change Email / Resend
                  </button>
                </div>
              )}

              <button type="submit" className="auth-submit-btn" disabled={loadingSendOTP || loadingVerifyOTP}>
                {loadingSendOTP || loadingVerifyOTP ? 'Processing...' : (step === 1 ? 'Sign Up' : 'Verify & Create Account')}
              </button>
            </form>

            <div className="auth-divider">
              <span>OR</span>
            </div>

            <p className="auth-redirect">
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
