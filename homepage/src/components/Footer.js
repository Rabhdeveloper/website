// Footer.js
import React, { useState } from 'react';
// import React from 'react';
// import './Footer.css'; // Import CSS for styling
import './Footer2.css'; 
// import FooterSection from './components/footerSection';
function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example validation
    if (!email) {
      setMessage('Please enter a valid email.');
      return;
    }

    // Here, you can send the email to a real backend or external service like EmailJS, etc.
    // For now, let's just simulate a successful submission:
    setMessage('Thank you for subscribing!');
    setEmail('');
  };
  return (
    <footer class="footer">
  <div class="footer-section">
    <h3>Contact</h3>
    <ul>
      <li>
        Email: <a href="mailto:saurabhsk4u@gmail.com">rsengineering@gmail.com</a>
      </li>
      <li>
        Phone: <a href="tel:+911125532553">011-25532553</a>
      </li>
    </ul>
  </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Catalogue</h3>
        <ul>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer-section3">
  <h3>Subscribe to Our Newsletter</h3>
  <form  action="submit-query">
    <label htmlFor="email" className="sr-only">Email Address</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Enter your email"
      required
      aria-label="Email address"
    />
    <button type="submit">Subscribe</button>
  </form>
  {message && <p>{message}</p>}
</div>

      <div className="footer-section">
        <h3>Address</h3>
        <p>87 Badli Rohini</p>
        <p>Narela</p>
      </div>
      <div className="footer-section">
        <h3>Support</h3>
        <ul>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/support">Support Center</a></li>
        </ul>
      </div>
      
      <div className="footer-section">
        <h3>Partners</h3>
        <ul>
        <li>
      <a 
        href="https://www.chnt.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        CHNT 
      </a>
    </li>
    <li>
      <a 
        href="https://www.se.com/in/en/product-category/1500-contactors-and-protection-relays/?filter=business-1-industrial-automation-and-control" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Schneider electric
      </a>
    </li>

        </ul>
      </div>
      <div className="footer-section">
        <h3>Newsletter</h3>
        <p> our newsletter is coming soon</p>
      </div>
    </footer>
  );
}

export default Footer;
