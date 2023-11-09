import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <a href="/">Your Logo</a>
        </div>
        <div className="footer-info">
          <p>&copy; 2023 Your Company</p>
          <p>123 Main Street, City, Country</p>
          <p>Email: contact@yourcompany.com</p>
        </div>
        <div className="footer-social">
        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
<a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
<a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
