// src/SignIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Inline CSS styles for the component
const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f3f4f6',
  },
  container: {
    width: '420px',
    padding: '30px',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e0e0e0',
    background: 'linear-gradient(135deg, #f3f4f6, #ffffff)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '28px',
    color: '#333',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #ff7e5f, #feb47b)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    fontFamily: 'Arial, sans-serif',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    color: '#555',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    padding: '14px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxSizing: 'border-box',
    fontSize: '14px',
    color: '#333',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  },
  inputFocus: {
    borderColor: '#007bff',
    boxShadow: '0 0 0 3px rgba(38, 143, 255, 0.2)',
  },
  button: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)',
  },
  error: {
    color: '#ff4d4d',
    fontSize: '12px',
    marginTop: '5px',
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#007bff',
    cursor: 'pointer',
    marginTop: '15px',
    fontSize: '14px',
    fontWeight: '500',
    textDecoration: 'underline',
  },
  signUp: {
    textAlign: 'center',
    color: '#007bff',
    cursor: 'pointer',
    marginTop: '15px',
    fontSize: '14px',
    fontWeight: '500',
    textDecoration: 'underline',
  },
};

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [isButtonHovered, setButtonHovered] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError('Email is required');
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }

    if (email && password) {
      // Add sign-in logic here
      // On successful sign-in, redirect to Home page
      navigate('/home');
    }
  };

  const handleForgotPassword = () => {
    alert('Forgot Password clicked');
  };

  const handleSignUp = () => {
    alert('Sign Up clicked');
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.header}>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email ID</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                ...styles.input,
                ...(isEmailFocused && styles.inputFocus),
              }}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
            {emailError && <p style={styles.error}>{emailError}</p>}
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                ...styles.input,
                ...(isPasswordFocused && styles.inputFocus),
              }}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            />
            {passwordError && <p style={styles.error}>{passwordError}</p>}
          </div>
          <button
            type="submit"
            style={{
              ...styles.button,
              ...(isButtonHovered && styles.buttonHover),
            }}
            onMouseOver={() => setButtonHovered(true)}
            onMouseOut={() => setButtonHovered(false)}
          >
            Sign In
          </button>
        </form>
        <p style={styles.forgotPassword} onClick={handleForgotPassword}>
          Forgot Password?
        </p>
        <p style={styles.signUp} onClick={handleSignUp}>
          Don't have an account? Sign Up
        </p>
      </div>
    </div>
  );
};

export default SignIn;
