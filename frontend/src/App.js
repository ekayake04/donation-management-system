import React from 'react';
import LoginForm from './components/LoginForm';
import WelcomeSection from './components/WelcomeSection';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const handleLogin = (username, password) => {
    // TODO: Connect to Cognito or whatever login logic you need
    console.log('Logging in with', username, password);
  };

  return (
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
        <LoginForm onLogin={handleLogin} />
        <svg width="200" height="200" style={{ position: 'absolute', bottom: '-100px', right: '-100px', zIndex: 0 }}>
          <circle cx="800" cy="800" r="280" fill="none" stroke="#fff" strokeWidth="2" opacity="0.2"/>
          <circle cx="800" cy="800" r="200" fill="none" stroke="#fff" strokeWidth="2" opacity="0.1"/>
        </svg>
      </div>
    </div>
  );

}

export default App;