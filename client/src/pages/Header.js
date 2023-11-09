import React, { useState } from 'react';
import './Header.css'; // Import your CSS styles here

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">Your Logo</a>
        </div>

        <nav className={`main-navigation ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/account">Account</a></li>
          </ul>
        </nav>

        <div className="user-actions">
          <div className="search-bar">
            <input type="text" placeholder="Search products" />
            <button>Search</button>
          </div>

          <div className="user-menu">
            <a href="/login">Login</a>
            <a href="/register">Sign Up</a>
          </div>

          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <i className={`fa fa-bars ${isMobileMenuOpen ? 'open' : ''}`}></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
