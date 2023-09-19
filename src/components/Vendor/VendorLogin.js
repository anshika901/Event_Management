import React, { useState } from 'react';

function VendorLogin({ onLogin }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin =async() => {
    try {
        const response = await fetch('/api/admin/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, password }),
        });

        if (response.ok) {
            const data = await response.json();
            const authToken = data.authToken;
            localStorage.setItem('authToken', authToken);
            window.location.href = '/admin-dashboard';
        } else {
            console.error('Login failed. Please check your credentials.');
        }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
    onLogin(true);
  };

  return (
    <div>
      <h1>Event Management System</h1>
      <div className="login-form">
        <div className="form-group">
          <label>User ID:</label>
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-actions">
          <button onClick={handleLogin}>Login</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default VendorLogin;
