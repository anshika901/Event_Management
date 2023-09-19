import React, { useState } from 'react';

function AdminSignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState('catering'); // Default category

  const handleSignup = async () => {
    try {
     
      const user = {
        name,
        email,
        password,
        category,
      };

    
      const response = await fetch('/api/admin/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
       window.location.href = '/admin-login'; 
      } else {
      
        console.error('Signup failed. Please try again.');
       
      }
    } catch (error) {
      console.error('An error occurred during signup:', error);

    }
  };

  return (
    <div>
      <h1>Event Management System</h1>
      <div className="signup-form">
        <div className="left">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="catering">Catering</option>
            <option value="florist">Florist</option>
            <option value="decoration">Decoration</option>
            <option value="lighting">Lighting</option>
          </select>
          <button onClick={handleSignup}>Signup</button>
        </div>
       
      </div>
    </div>
  );
}

export default AdminSignupPage;
