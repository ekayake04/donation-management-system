import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavbar from './AdminNavbar';

function AdminCampaignsRead() {
  const navigate = useNavigate();

  return (
    <>
      <AdminNavbar />
      <div className="container py-5 text-center">
        <h1 className="mb-4" style={{ color: "#513351", fontWeight: "bold" }}>
          Campaigns
        </h1>
        <p>Welcome to the Campaigns section.</p>
        <button
          type="button"
          className="btn btn-lg"
          style={{
            borderRadius: '12px',
            backgroundColor: "#513351",
            color: "#fff",
            fontWeight: 'bold',
            width: '25%',
            boxShadow: '0 4px 12px rgba(81,51,81,0.2)',
            marginBottom: '48px',
          }}
          onClick={() => navigate('/admin/campaigns/create')}
        >
          Create New Campaign
        </button>
      </div>
    </>
  );
}

export default AdminCampaignsRead;
