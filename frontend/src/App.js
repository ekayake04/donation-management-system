import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Signout from './components/Signout';
import WelcomeSection from './components/WelcomeSection';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      {/* Login screen (default) */}
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

      {/* Cognito redirects here after login */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Cognito redirects here after logout */}
      <Route path="/signout" element={<Signout />} />
    </Routes>
  );
}

export default App;
