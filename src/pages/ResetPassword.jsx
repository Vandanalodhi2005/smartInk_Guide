import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import PageContainer from '../components/common/PageContainer';
import '../styles/pages.css';
import { useAuth } from '../context/AuthContext';

const ResetPassword = () => {
  const { token } = useParams();
  const [valid, setValid] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();
  const { signIn } = useAuth();

  useEffect(() => {
    // Synchronously compute validity, but defer state updates to avoid cascading renders
    let shouldError = null;
    let toSet = null;
    try {
      const raw = localStorage.getItem(`pwreset:${token}`);
      if (!raw) {
        shouldError = 'Invalid or expired reset link.';
      } else {
        const payload = JSON.parse(raw);
        if (payload.expires && payload.expires < Date.now()) {
          shouldError = 'This reset link has expired.';
          localStorage.removeItem(`pwreset:${token}`);
        } else {
          // collect state updates to apply after effect body
          toSet = { valid: true, email: payload.identifier || '' };
        }
      }
    } catch {
      shouldError = 'Invalid reset link.';
    }

    if (shouldError) {
      // defer to next tick to avoid sync setState in effect body
      setTimeout(() => setError(shouldError), 0);
    }

    if (toSet) {
      setTimeout(() => {
        setValid(!!toSet.valid);
        setEmail(toSet.email || '');
      }, 0);
    }
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!password || !confirm) {
      setError('Please provide and confirm your new password.');
      return;
    }
    if (password.length < 6) {
      setError('Password should be at least 6 characters.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    // Simulate updating password
    setTimeout(() => {
      // read payload again to know identifier type
      const raw = localStorage.getItem(`pwreset:${token}`);
      let payload = null;
      try { payload = raw ? JSON.parse(raw) : null; } catch { payload = null; }

      // remove token
      localStorage.removeItem(`pwreset:${token}`);
      setSuccess(true);

      // Sign user in for demo: email if email-based, otherwise use phone fallback address
      if (payload && payload.identifierType === 'email') {
        signIn(payload.identifier, password);
      } else if (payload && payload.identifierType === 'phone') {
        // create a fallback email using phone so demo auth works
        signIn(`${payload.identifier}@phone.local`, password);
      } else {
        signIn(email, password);
      }

      setLoading(false);
      setTimeout(() => navigate('/profile'), 1400);
    }, 800);
  };

  return (
    <>
      <Navbar />
      <PageContainer>
        <div className="auth-card mx-auto max-w-md">
          <h1>Reset Password</h1>
          <p className="auth-subtitle">Set a new password for <strong>{email || 'your account'}</strong></p>

          {error && <div className="error-message"><span>{error}</span></div>}

          {!valid ? (
            <div className="p-4 bg-yellow-50 rounded-2xl border border-yellow-100">
              <p className="text-sm text-yellow-800">This reset link is invalid or expired. You can request a new one.</p>
              <p className="mt-3"><Link to="/forgot-password" className="forgot-link">Request a new reset link</Link></p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label>New Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter new password" />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="Confirm new password" />
              </div>

              <div className="pt-2">
                <button type="submit" className="auth-submit-btn" disabled={loading}>{loading ? 'Resetting...' : 'Reset Password'}</button>
              </div>
            </form>
          )}

          {success && <div className="text-sm text-green-600 font-semibold mt-4">Password reset successfully — signing you in...</div>}
        </div>
      </PageContainer>
      <Footer />
    </>
  );
};

export default ResetPassword;
