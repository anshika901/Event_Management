import React from 'react';

function VendorPage({ onLogout }) {
  return (
    <div>
      <div className="page-header">
        <button>Home</button>
        <button onClick={onLogout}>Logout</button>
      </div>
      <h1>Vendor Florist</h1>
      <div className="vendor-cards">
        <div className="vendor-card">
          <h2>Vendor 1</h2>
          <p>Contact Details: Phone: xxx-xxx-xxxx</p>
          <button>Shop Item</button>
        </div>
        <div className="vendor-card">
          <h2>Vendor 2</h2>
          <p>Contact Details: Phone: xxx-xxx-xxxx</p>
          <button>Shop Item</button>
        </div>
        <div className="vendor-card">
          <h2>Vendor 3</h2>
          <p>Contact Details: Phone: xxx-xxx-xxxx</p>
          <button>Shop Item</button>
        </div>
        <div className="vendor-card">
          <h2>Vendor 4</h2>
          <p>Contact Details: Phone: xxx-xxx-xxxx</p>
          <button>Shop Item</button>
        </div>
      </div>
    </div>
  );
}

export default VendorPage;
