// src/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landing.css'; // Ensure this CSS file is imported

const LandingPage = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to handle navigation to the login page
  const handleLearnMoreClick = () => {
    navigate('/signin');// Redirect to the login page
  };

  // Function to handle login/sign-up button click
  const handleLoginClick = () => {
    navigate('/signin'); // Redirect to the login page
  };

  return (
    <div className="landing-container">
      <header className="header">
        <nav className="navbar">
          <div className="logo">Sustainable Fertilizer Optimizer</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="login-btn" onClick={handleLoginClick}>
            Login / Sign Up
          </button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Optimize Fertilizer Usage for Higher Yield</h1>
          <p>Our sustainable fertilizer optimizer helps you maximize crop yield while reducing environmental impact.</p>
          <button className="cta-btn" onClick={handleLearnMoreClick}>
            Learn More
          </button>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Our Solution</h2>
        <p>We provide an intelligent system that recommends the optimal amount of fertilizer based on crop type, soil conditions, and environmental factors. Our solution is eco-friendly, ensuring the best balance between productivity and sustainability.</p>
      </section>

      <section id="features" className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Smart Recommendations</h3>
            <p>Get precise fertilizer recommendations for each crop.</p>
          </div>
          <div className="feature-item">
            <h3>Eco-friendly</h3>
            <p>Minimize environmental impact while improving yield.</p>
          </div>
          <div className="feature-item">
            <h3>Real-time Analysis</h3>
            <p>Analyze soil data and conditions in real-time for optimal fertilization.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Have any questions? Reach out to us for more information.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Sustainable Fertilizer Optimizer. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
