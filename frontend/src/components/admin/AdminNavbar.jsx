import React from 'react';
import '../../styles/Navbar.css';

export default function AdminNavbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="/logo.png"
          alt="Talikala Logo"
          className="navbar-logo"
        />
        <span className="navbar-title">Admin Dashboard</span>
      </div>
      <div className="navbar-center">
        <a href="/dashboard" className="navbar-link">Dashboard</a>
        <a href="/donations" className="navbar-link">Donations</a>
        <a href="/campaigns" className="navbar-link">Campaigns</a>
      </div>
    </nav>
  );
}
