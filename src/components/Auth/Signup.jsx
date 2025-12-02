import { Link } from 'react-router-dom';
import '../../styles/auth.css';

function Signup() {
  return (
    <div className="auth-container">
      <div className="circle top-right" />
      <div className="circle bottom-left" />

      <div className="auth-box">
        <h2 className="auth-title">Sign Up</h2>
        <p className="auth-subtitle">Create your account</p>

        <form className="auth-form">
          <input type="text" placeholder="Full Name" className="auth-input" />
          <input type="email" placeholder="Email" className="auth-input" />
          <input type="password" placeholder="Password" className="auth-input" />
          <input type="password" placeholder="Confirm Password" className="auth-input" />

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
