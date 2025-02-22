import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Ibadan Markets</h2>
      <ul>
        <li><Link to="/find-products">Find Products</Link></li>
        <li><Link to="/">Find Market</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/news">News & Updates</Link></li>
        <li><Link to="/profile">List Shop</Link></li>
        <li><Link to="/login">Sign In</Link></li>
      </ul>
      <style jsx>{`
        .navbar {
          background-color: #4A2C2A; /* Slightly lighter dark brown */
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        h2 {
          margin: 0;
          color: #F5E8C7;
        }
        ul {
          list-style: none;
          display: flex;
          gap: 20px;
          margin: 0;
          padding: 0;
        }
        li {
          font-size: 18px;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;