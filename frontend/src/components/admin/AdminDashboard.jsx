import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavbar from './AdminNavbar'; // correct path & name

function AdminDashboard() {
  return (
    <>
      <AdminNavbar /> {/* Navbar at the top */}
      <div className="container py-5">
        <h1 className="mb-4" style={{ color: "#513351", fontWeight: "bold" }}>
          Dashboard
        </h1>
        <p>Welcome! You are logged in.</p>
        {/* Add dashboard content here */}
      </div>
    </>
  );
}

export default AdminDashboard;
