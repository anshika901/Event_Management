import React, { useState } from 'react';
import './UserLogin.css';
function UserLogin({ onLogin }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
 
    console.log('User ID:', userId);
    console.log('Password:', password);

    
    onLogin();
  };

  return (
    <div>
      <button>Chart</button>
      <button>Back</button>
      <h2>Event Management System</h2>
      <div className="login-form">
        <div className="input-group">
          <label>User ID:</label>
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default UserLogin;
