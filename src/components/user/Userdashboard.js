import React, { useState } from 'react';

function Userdashboard({ userName, onLogout }) {
  const [selectedVendor, setSelectedVendor] = useState(null);

  const handleVendorSelect = (vendor) => {
    setSelectedVendor(vendor);
  };
 
  return (
    <div>
      <h2>Welcome, {userName}</h2>
      <div className="vendor-dropdown">
        <label>Select Vendor:</label>
        <select onChange={(e) => handleVendorSelect(e.target.value)}>
          <option value="">Select</option>
          <option value="florist">Florist</option>
          <option value="catering">Catering</option>
          <option value="lighting">Lighting</option>
          <option value="decoration">Decoration</option>
        </select>
      </div>
      
      <p>Selected Vendor: {selectedVendor}</p>
      <button>Cart</button>
      <button>Guestlist</button>
      <button>Order Status</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Userdashboard;
