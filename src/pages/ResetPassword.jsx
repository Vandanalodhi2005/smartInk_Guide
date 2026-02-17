import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../redux/actions/userActions';
import PageContainer from '../components/common/PageContainer';
import '../styles/pages.css';

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email] = useState(location.state?.email || '');

  const userResetPassword = useSelector((state) => state.userResetPassword);
  const { loading, error, success } = userResetPassword;

  useEffect(() => {
    if (success) {
      setTimeout(() => navigate('/signin', { replace: true }), 2000);
    }
  }, [success, navigate]);

  useEffect(() => {
    if (!email) {
      // If no email in state, maybe redirect back to forgot password or let user type it?
      // For now, let's assume valid flow. Or redirect.
      // navigate('/forgot-password');
    }
  }, [email, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    dispatch(resetPassword(email, otp, password));
  };

  if (!email) {
    return (
      <>
        <PageContainer>
          <div className="auth-card mx-auto max-w-md">
            <p>Invalid access. Please initiate password reset again.</p>
            <Link to="/forgot-password" className="forgot-link">Forgot Password</Link>
          </div>
        </PageContainer>
      </>
    )
  }

  return (
    <>
      <PageContainer>
        <div className="auth-card mx-auto max-w-md">
          <h1>Reset Password</h1>
          <p className="auth-subtitle">Set a new password for <strong>{email}</strong></p>

          {error && <div className="error-message"><span>{error}</span></div>}
          {success && <div className="text-sm text-green-600 font-semibold mb-4">Password reset successfully! Redirecting...</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>Verification Code (OTP)</label>
              <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP sent to email" required />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter new password" required />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm new password" required />
            </div>

            <div className="pt-2">
              <button type="submit" className="auth-submit-btn" disabled={loading}>{loading ? 'Resetting...' : 'Reset Password'}</button>
            </div>
          </form>
        </div>
      </PageContainer>
    </>
  );
};

export default ResetPassword;
