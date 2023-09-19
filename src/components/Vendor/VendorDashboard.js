import React from 'react';

function VendorDashboard({ onLogout }) {
  return (
    <div>
      <h1>Welcome Vendor</h1>
      <div className="dashboard-buttons">
        <button>Your Item</button>
        <button>Add New Item</button>
        <button>Transaction</button>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}

export default VendorDashboard;
