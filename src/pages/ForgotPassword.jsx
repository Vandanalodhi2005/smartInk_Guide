import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import PageContainer from '../components/common/PageContainer';
import '../styles/pages.css';

const ForgotPassword = () => {
  const [identifier, setIdentifier] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(null);

  const validateEmail = (value) => /\S+@\S+\.\S+/.test(value);
  const validatePhone = (value) => {
    const digits = (value || '').replace(/\D/g, '');
    return digits.length >= 7 && digits.length <= 15;
  };

  const detectIdentifierType = (value) => {
    if (validateEmail(value)) return 'email';
    if (validatePhone(value)) return 'phone';
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!identifier) {
      setError('Please enter your email address or phone number.');
      setLoading(false);
      return;
    }

    const type = detectIdentifierType(identifier);
    if (!type) {
      setError('Please enter a valid email address or phone number.');
      setLoading(false);
      return;
    }

    const normalized =
      type === 'phone'
        ? identifier.replace(/\D/g, '')
        : identifier.toLowerCase().trim();

    const token =
      Math.random().toString(36).slice(2, 10) +
      Date.now().toString(36);

    try {
      localStorage.setItem(
        `pwreset:${token}`,
        JSON.stringify({
          identifierType: type,
          identifier: normalized,
          token,
          expires: Date.now() + 1000 * 60 * 60,
        })
      );
      setSent({ token, identifier: normalized, type });
    } catch {
      setError('Failed to start reset process. Please try again.');
    } finally {
      setLoading(false);
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
              Enter your email or phone number and we’ll send you a reset link.
            </p>

            {error && <div className="error-message">{error}</div>}

            {!sent ? (
              <form onSubmit={handleSubmit} className="auth-form">
                <div className="form-group">
                  <label>Email or phone</label>
                  <input
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="you@example.com or +1 555 555 5555"
                  />
                </div>

                <button
                  type="submit"
                  className="auth-submit-btn"
                  disabled={loading}
                >
                  {loading ? 'Sending…' : 'Send reset link'}
                </button>

                <p className="auth-switch">
                  Remembered your password? <Link to="/signin">Sign in</Link>
                </p>
              </form>
            ) : (
              <div className="success-box">
                <h4>Reset link created</h4>
                <p>
                  A reset link was generated for{' '}
                  <strong>{sent.identifier}</strong>.
                </p>
                <p className="hint">
                  Demo mode only — normally sent via{' '}
                  {sent.type === 'phone' ? 'SMS' : 'email'}.
                </p>
                <Link
                  to={`/reset-password/${sent.token}`}
                  className="reset-link"
                >
                  Open reset link
                </Link>
              </div>
            )}
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
  border-color: #0f3d91;
}

/* Button */
.auth-submit-btn {
  margin-top: 10px;
  padding: 14px;
  border-radius: 12px;
  border: none;
  background: #0f3d91;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}

.auth-submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.auth-submit-btn:hover:not(:disabled) {
  background: #0f3d91;
}

/* Links */
.auth-switch {
  text-align: center;
  font-size: 13px;
  color: #6b7280;
}

.auth-switch a {
  color: #0f3d91;
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
  color: #0f3d91;
  font-weight: 600;
}
`}
      </style>
    </>
    
  );
};

export default ForgotPassword;
