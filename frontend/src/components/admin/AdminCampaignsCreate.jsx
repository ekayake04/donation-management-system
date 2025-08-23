import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavbar from './AdminNavbar';

function AdminCampaignsCreate() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    endDate: '',
    donationTypes: [],
    banner: null,
    attachments: [],
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const donationOptions = [
    'Cash',
    'Goods',
    'Services',
    'Others',
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      if (name === 'banner') {
        setForm({ ...form, banner: files[0] });
      } else if (name === 'attachments') {
        setForm({ ...form, attachments: Array.from(files) });
      }
    } else if (type === 'checkbox') {
      const updatedTypes = form.donationTypes.includes(value)
        ? form.donationTypes.filter((t) => t !== value)
        : [...form.donationTypes, value];
      setForm({ ...form, donationTypes: updatedTypes });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
  };

  return (
    <>
      <AdminNavbar />
      <div className="container py-5">
        <h1 className="mb-4 text-center" style={{ color: "#513351", fontWeight: "bold" }}>
          Create New Campaign
        </h1>
        <p className="text-center">Start a new donation campaign.</p>
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '1000px' }}>
          <div className="mb-4 d-flex flex-column align-items-center">
            <h5 className="mb-4 w-100">Campaign Details</h5>
            <label className="form-label w-100 mb-2" htmlFor="title">Campaign Title *</label>
            <input
              type="text"
              className="form-control mb-4"
              id="title"
              name="title"
              value={form.title}
              label="Campaign Title"
              placeholder="Enter Title"
              onChange={handleChange}
              required
              style={{ width: '100%' }}
            />
          </div>
          <div className="mb-4 d-flex flex-column align-items-center">
            <label className="form-label w-100 mb-2" htmlFor="description">Description *</label>
            <textarea
              className="form-control mb-4"
              id="description"
              name="description"
              rows={4}
              value={form.description}
              label="Campaign description"
              placeholder="Enter Description"
              onChange={handleChange}
              required
              style={{ width: '100%' }}
            />
          </div>
          <div className="mb-4 d-flex flex-row justify-content-between" style={{ gap: '24px' }}>
            <div style={{ flex: 1 }}>
              <label className="form-label mb-2" htmlFor="endDate">End Date</label>
              <input
                type="date"
                className="form-control mb-4"
                id="endDate"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                required
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ flex: 1, position: 'relative' }}>
              <label className="form-label mb-2">Donation Types Accepted *</label>
              <div>
                <button
                  type="button"
                  className="btn btn-outline-secondary w-100 mb-4"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  style={{ textAlign: 'left' }}
                >
                  {form.donationTypes.length > 0
                    ? form.donationTypes.join(', ')
                    : 'Select Donation Types'}
                  <span style={{ float: 'right' }}>&#9662;</span>
                </button>
                {dropdownOpen && (
                  <div
                    className="border rounded bg-white shadow-sm position-absolute"
                    style={{
                      zIndex: 10,
                      width: '100%',
                      left: 0,
                      top: '100%',
                      padding: '10px',
                    }}
                  >
                    {donationOptions.map((type) => (
                      <div className="form-check" key={type}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`donation-${type}`}
                          name="donationTypes"
                          value={type}
                          checked={form.donationTypes.includes(type)}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor={`donation-${type}`}>
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h5 className="mb-4">Upload Files</h5>
            <div className="d-flex flex-row" style={{ gap: '24px' }}>
              <div style={{ flex: 1 }}>
                <label className="form-label mb-2" htmlFor="banner">Upload Banner *</label>
                <input
                  type="file"
                  className="form-control mb-4"
                  id="banner"
                  name="banner"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label className="form-label mb-2" htmlFor="attachments">Upload Attachments *</label>
                <input
                  type="file"
                  className="form-control mb-4"
                  id="attachments"
                  name="attachments"
                  multiple
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn"
            style={{
              borderRadius: '12px',
              backgroundColor: "#513351",
              color: "#fff",
              fontWeight: 'bold',
              width: '25%',
              margin: '0 auto',
              display: 'block',
              boxShadow: '0 4px 12px rgba(81,51,81,0.2)',
            }}
          >
            Create Campaign
          </button>
        </form>
      </div>
    </>
  );
}

export default AdminCampaignsCreate;