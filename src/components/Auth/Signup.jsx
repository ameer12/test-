import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/auth.css';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email.includes('@gmail.com')) {
      return setError('Please enter a valid email ending with @gmail.com');
    }

    if (password !== confirm) {
      return setError('Passwords do not match');
    }

    // Save user to localStorage
    localStorage.setItem('user', JSON.stringify({ fullName, email, password }));

    // Redirect to login
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="circle top-right" />
      <div className="circle bottom-left" />

      <div className="auth-box">
        <h2 className="auth-title">Sign Up</h2>
        <p className="auth-subtitle">Create your account</p>

        <form className="auth-form" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            className="auth-input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="auth-input"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

          <div className="auth-links">
            <span className="auth-link">Already have an account?</span>
            <Link to="/login" className="auth-link">Sign In</Link>
          </div>

          <button type="submit" className="auth-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
