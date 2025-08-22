import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function WelcomeSection() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-100 text-center" style={{ minHeight: '100vh' }}>
      <img
        src="/logo.png"
        alt="Logo"
        style={{
          width: 180,
          height: 180,
          objectFit: 'cover',
          borderRadius: '50%',
          border: '2px solid #513351',
          marginBottom: '32px'
        }}
      />
      <h1 style={{ color: '#513351', fontSize: '3rem', fontWeight: 'bold', marginBottom: '32px' }}>
        Welcome to<br />Talikala, Inc.
      </h1>
      <p style={{ color: '#513351', fontSize: '1rem', marginBottom: '0', maxWidth: '70%', lineHeight: '2' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus lorem sed nibh iaculis, a aliquet leo iaculis. Aenean tempor, turpis et dictum volutpat, eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus lorem sed nibh iaculis, a aliquet leo iaculis. Aenean tempor, turpis et dictum volutpat, eros.
      </p>
    </div>
  );
}

export default WelcomeSection;