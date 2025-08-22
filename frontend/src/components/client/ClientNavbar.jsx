import React from 'react';
import '../../styles//Navbar.css'; // We'll define styles separately

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="/logo.png" // place your logo image in public/logo.png
          alt="Talikala Logo"
          className="navbar-logo"
        />
        <span className="navbar-title">Talikala Inc.</span>
      </div>
      <div className="navbar-center">
        <a href="#home" className="navbar-link">Home</a>
        <a href="#contact" className="navbar-link">Contact</a>
        <a href="#about" className="navbar-link">About</a>
      </div>
      <div className="navbar-right">
        <button className="donate-btn">Donate</button>
      </div>
    </nav>
  );
}