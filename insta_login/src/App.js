import React from 'react';
import './style/LoginPage.css';

function App() {
  return (
    <div className="login-page">
      <div className="login-container">
      <img
          src={require('./image/instagram.png')}
          alt="Instagram"
          className="instagram-logo"
        />
        <button className="facebook-login">
          <i className="fab fa-facebook-square"></i> Continue with Facebook
        </button>
        <div className="divider">
          <span>OR</span>
        </div>
        <form className="login-form">
          <input type="text" placeholder="Phone number, username, or email" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="login-button">Log in</button>
        </form>
        <a href="/" className="forgot-password">Forgot password?</a>
      </div>
      <div className="signup-container">
        <p>
          Don't have an account? <a href="/">Sign up</a>
        </p>
      </div>
      <footer className="footer">
        <p>
          You can also <a href="/">report content</a> you believe is unlawful in your country without logging in.
        </p>
      </footer>
    </div>
  );
}

export default App;
