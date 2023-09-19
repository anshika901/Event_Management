import React from 'react';

function RequestItemPage({ onHomeClick, onLogout }) {
  const itemData = [
    { id: 1, name: 'Item 1', description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', description: 'Description for Item 2' },
    { id: 3, name: 'Item 3', description: 'Description for Item 3' },
    { id: 4, name: 'Item 4', description: 'Description for Item 4' },
  ];

  return (
    <div>
      <div className="page-header">
        <button onClick={onHomeClick}>Home</button>
        <button onClick={onLogout}>Logout</button>
      </div>
      <div className="page-content">
        <h2>Request Item</h2>
        <div className="item-cards">
          {itemData.map((item) => (
            <div key={item.id} className="item-card">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <button>Request</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RequestItemPage;
