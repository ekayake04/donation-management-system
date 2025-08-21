import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div
      className="login-section d-flex align-items-center justify-content-center vh-100"
      style={{
        background: 'linear-gradient(135deg, #513351, #974597)',
      }}
    >
      <style>
        {`
          .custom-input-group {
            background: #e2d3ea;
            border-radius: 18px;
            display: flex;
            align-items: center;
            padding-left: 16px;
            margin-bottom: 12px;
            height: 56px;
            box-shadow: none;
            border: none;
          }
          .custom-input-group .input-group-text {
            background: transparent;
            border: none;
            padding-right: 12px;
            display: flex;
            align-items: center;
          }
          .custom-input {
            background: transparent;
            border: none;
            box-shadow: none;
            height: 56px;
            font-size: 1.05rem;
            color: #2d1a2d;
          }
          .custom-input:focus {
            outline: none;
            box-shadow: none;
            background: transparent;
          }
          .custom-btn {
            border-radius: 18px;
            height: 56px;
            font-size: 1.15rem;
            background-color: #513351;
            color: #fff;
            font-weight: bold;
            border: none;
            box-shadow: 0 4px 12px rgba(81,51,81,0.4);
            transition: background 0.2s, color 0.2s;
          }
          .custom-btn:hover, .custom-btn:focus {
            background-color: #974597;
            color: #fff;
          }
          .register-link {
            color: #2d1a2d;
            font-weight: bold;
            text-decoration: none;
            transition: color 0.2s, text-decoration 0.2s;
          }
          .register-link:hover {
            color: #fff;
            text-decoration: underline;
          }
        `}
      </style>
      <form onSubmit={handleSubmit} className="w-100 d-flex flex-column align-items-center" style={{ maxWidth: 400 }}>
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#fff', fontWeight: 'bold' }}>LOG IN</h2>
        <div className="mb-3 mt-2 w-100">
          <div className="custom-input-group">
            <span className="input-group-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2d1a2d" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm4-3a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-8.216 7.684A7 7 0 0 1 8 15a7 7 0 0 1 4.216-2.316C11.07 11.566 9.613 11 8 11s-3.07.566-4.216 1.684z"/>
              </svg>
            </span>
            <input
              type="text"
              className="form-control custom-input"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              style={{ borderRadius: '18px', background: 'transparent' }}
            />
          </div>
        </div>
        <div className="mb-3 w-100">
          <div className="custom-input-group">
            <span className="input-group-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2d1a2d" viewBox="0 0 16 16">
                <path d="M8 1a4 4 0 0 0-4 4v3H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-1V5a4 4 0 0 0-4-4zm-3 4a3 3 0 0 1 6 0v3H5V5zm-2 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4zm6 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
            </span>
            <input
              type="password"
              className="form-control custom-input"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{ borderRadius: '18px', background: 'transparent' }}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn w-100 custom-btn mb-5"
          style={{ marginBottom: '48px', marginTop: '8px' }}
        >
          Log In
        </button>
        <div className="text-center mt-4 d-flex align-items-center justify-content-center" style={{ gap: '12px', width: '100%' }}>
          <hr style={{ flex: 1, border: 'none', borderTop: '2px solid #c9a3d8', margin: 0 }} />
          <button
            type="button"
            className="register-link"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              font: 'inherit',
              fontWeight: 'bold',
              color: '#2d1a2d',
              fontSize: '1.1rem',
            }}
            onClick={() => {
              window.location.href = '/register';
            }}
          >
            Register Now!
          </button>
          <hr style={{ flex: 1, border: 'none', borderTop: '2px solid #c9a3d8', margin: 0 }} />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;