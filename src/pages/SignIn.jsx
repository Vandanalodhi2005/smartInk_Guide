import { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/userActions';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
const logo = "/PrintsCartslogo.png";
import '../styles/pages.css';

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
    if (!email || !password) {
       return; 
    }

    dispatch(login(email, password, isAdminLogin));
  };

  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="auth-container">
          <div className="auth-card">
            <div className="flex justify-center mb-6">
                <img src={logo} alt="PrintsCarts" className="h-12 md:h-24 w-auto object-contain" />
            </div>
            <h1>{isAdminLogin ? 'Admin Sign In' : 'Sign In'}</h1>
            <p className="auth-subtitle">Welcome back! Please sign in to your account.</p>

            {successMessage && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{successMessage}</span>
              </div>
            )}

            {error && (
              <div className="error-message">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" fill="#ef4444"/>
                  <path d="M10 6V10M10 14H10.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="auth-form">
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

              <div className="form-options">
                <label className="checkbox-label">
                  <input 
                      type="checkbox" 
                      onChange={(e) => setIsAdminLogin(e.target.checked)}
                      checked={isAdminLogin}
                  />
                  <span>Login as Admin</span>
                </label>
                <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
              </div>

              <button type="submit" className="auth-submit-btn" disabled={loading}>
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>

            <div className="auth-divider">
              <span>OR</span>
            </div>
            
             <center>
             {!isAdminLogin ? (
                <p>New customer? <Link to="/signup" className="text-indigo-600 font-semibold">Create an account</Link></p>
             ) : (
                <p>Not an admin? <span className="text-indigo-600 font-semibold cursor-pointer" onClick={() => setIsAdminLogin(false)}>User Login</span></p>
             )}
             </center>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;

