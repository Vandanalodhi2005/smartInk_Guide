import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../redux/actions/userActions';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import PageContainer from '../components/common/PageContainer';
import '../styles/pages.css';

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
    <>
      <Navbar />
      <PageContainer>
        <div className="auth-wrapper">
          <div className="auth-card">
            <h1>Forgot password</h1>
            <p className="auth-subtitle">
              Enter your email address and we’ll send you an OTP to reset your password.
            </p>

            {error && (
              <div className="error-message">{error}</div>
            )}

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                />
              </div>

              <button
                type="submit"
                className="auth-submit-btn"
                disabled={loading}
              >
                {loading ? 'Sending OTP...' : 'Send OTP'}
              </button>

              <div className="auth-switch">
                Remembered your password? <Link to="/signin">Sign in</Link>
              </div>
            </form>
          </div>
        </div>
      </PageContainer>
      <Footer />

      <style>
        {`/* Center wrapper */
.auth-wrapper {
  min-height: calc(100vh - 160px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
}

/* Card */
.auth-card {
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  border-radius: 18px;
  padding: 36px 32px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

/* Headings */
.auth-card h1 {
  margin-bottom: 8px;
  font-size: 26px;
  font-weight: 700;
}

.auth-subtitle {
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 28px;
}

/* Form */
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-group label {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 6px;
}

.form-group input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  font-size: 14px;
}

.form-group input:focus {
  outline: none;
  border-color: #60a5fa;
}

/* Button */
.auth-submit-btn {
  margin-top: 10px;
  padding: 14px;
  border-radius: 12px;
  border: none;
  background: #60a5fa;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}

.auth-submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.auth-submit-btn:hover:not(:disabled) {
  background: #60a5fa;
}

/* Links */
.auth-switch {
  text-align: center;
  font-size: 13px;
  color: #6b7280;
}

.auth-switch a {
  color: #60a5fa;
  font-weight: 500;
  text-decoration: none;
}

/* Error */
.error-message {
  background: #fef2f2;
  color: #b91c1c;
  padding: 12px 14px;
  border-radius: 10px;
  font-size: 13px;
  margin-bottom: 18px;
}

/* Success */
.success-box {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 14px;
  padding: 20px;
}

.success-box h4 {
  margin-bottom: 6px;
  color: #15803d;
}

.success-box p {
  font-size: 13px;
  color: #166534;
}

.success-box .hint {
  margin-top: 8px;
  color: #4b5563;
}

.reset-link {
  display: inline-block;
  margin-top: 14px;
  color: #60a5fa;
  font-weight: 600;
}
`}
      </style>
    </>
    
  );
};

export default ForgotPassword;
