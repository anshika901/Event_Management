
import React from 'react';

function AdminDashboard() {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/admin-login';
  };

  return (
    <div>
      <div className="top-bar">
        <button>Home</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <h2>Welcome Admin</h2>
      <div className="admin-options">
        <button>Maintain User</button>
        <button>Maintain Vendor</button>
      </div>
      
    </div>

  );
}

export default AdminDashboard;
