import { Link } from 'react-router-dom';
import '../../styles/auth.css';

function Login() {
  return (
    <div className="auth-container">
      <div className="circle top-right" />
      <div className="circle bottom-left" />

      <div className="auth-box">
        <h2 className="auth-title">Sign In</h2>
        <p className="auth-subtitle">Sign in to your account</p>

        <form className="auth-form">
          <input type="email" placeholder="Email" className="auth-input" />
          <input type="password" placeholder="Password" className="auth-input" />

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
