import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavbar from './AdminNavbar'; // correct path & name

function AdminCampaignsCreate() {
  return (
    <>
      <AdminNavbar /> {/* Navbar at the top */}
      <div className="container py-5 text-center">
        <h1 className="mb-4" style={{ color: "#513351", fontWeight: "bold" }}>
          Create New Campaign
        </h1>
        <p>Start a new donation campaign.</p>
      </div>
    </>
  );
}

export default AdminCampaignsCreate;
