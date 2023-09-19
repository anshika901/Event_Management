import React, { useState } from 'react';
import './UserSignup.css';
function UserSignup({ onLoginClick }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
 
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

   
    onLoginClick();
  };

  return (
    <div>
      <button>Chart</button>
      <button onClick={onLoginClick}>Back</button>
      <h2>Event Management System</h2>
      <div className="signup-form">
        <div className="input-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
}

export default UserSignup;
