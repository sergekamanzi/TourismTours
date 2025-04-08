import React, { useState } from 'react';
import "./navbar.css";
import logo from "/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='main-navbar'>
      <div className='logo1'>
        <img src={logo} alt="Logo" />
      </div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <div 
          className={`close-icon ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        ></div>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about-us" onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/destinations" onClick={toggleMenu}>Destinations</Link></li>
          <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
        </ul>
      </div>

      <div className="nav-right">
        <button className="call-button">Call Us here</button>
        <div className="menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
