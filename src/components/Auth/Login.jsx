import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.includes('@gmail.com')) {
      return setError('Please enter a valid email ending with @gmail.com');
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      return setError('Incorrect email or password');
    }

    // Save logged-in user
    localStorage.setItem('loggedInUser', email);
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="circle top-right" />
      <div className="circle bottom-left" />

      <div className="auth-box">
        <h2 className="auth-title">Sign In</h2>
        <p className="auth-subtitle">Sign in to your account</p>

        <form className="auth-form" onSubmit={handleLogin}>
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

          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

          <div className="auth-links">
            <Link to="/forgot-password" className="auth-link">Forgot password?</Link>
            <Link to="/signup" className="auth-link">Create your account</Link>
          </div>

          <button type="submit" className="auth-button">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
