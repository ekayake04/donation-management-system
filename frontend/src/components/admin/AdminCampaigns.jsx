import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavbar from './AdminNavbar'; // correct path & name

function AdminCampaigns() {
  return (
    <>
      <AdminNavbar /> {/* Navbar at the top */}
      <div className="container py-5">
        <h1 className="mb-4" style={{ color: "#513351", fontWeight: "bold" }}>
          Campaigns
        </h1>
        <p>Welcome to the Campaigns section.</p>
        {/* Add Campaigns content here */}
      </div>
    </>
  );
}

export default AdminCampaigns;
