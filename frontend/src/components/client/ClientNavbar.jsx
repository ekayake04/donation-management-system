import React from 'react';
import '../../styles//Navbar.css'; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="/logo.png"
          alt="Talikala Logo"
          className="navbar-logo"
        />
        <span className="navbar-title">Talikala Inc.</span>
      </div>

      {/* Wrap center + right */}
      <div className="navbar-right-wrapper">
        <div className="navbar-center">
          <a href="#home" className="navbar-link">Home</a>
          <a href="#contact" className="navbar-link">Contact</a>
          <a href="#about" className="navbar-link">About</a>
        </div>
        <div className="navbar-right">
          <button className="donate-btn">Donate</button>
        </div>
      </div>
    </nav>
  );
}
