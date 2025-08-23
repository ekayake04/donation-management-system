import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import WelcomeSection from './components/WelcomeSection';
import ClientDashboard from './components/client/ClientDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminCampaigns from './components/admin/AdminCampaigns';
import Signout from './components/Signout';

function App() {
  return (
    <Routes>
      {/* Login (default) */}
      <Route path="/" element={
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <div style={{ flex: 1, background: '#fff' }}>
            <WelcomeSection />
          </div>
          <div style={{
            flex: 1,
            background: 'linear-gradient(135deg, #513351 0%, #974597 100%)',
            borderTopLeftRadius: '40px',
            borderBottomLeftRadius: '40px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <LoginForm />
          </div>
        </div>
      }/>

      {/* Client routes */}
      <Route path="/client/dashboard" element={<ClientDashboard />} />

      {/* Admin routes */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/campaigns" element={<AdminCampaigns />} />

      {/* Signout */}
      <Route path="/signout" element={<Signout />} />
    </Routes>
  );
}

export default App;
