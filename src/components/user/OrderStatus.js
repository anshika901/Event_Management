import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrderStatus({ onHomeClick, onLogoutClick }) {
  const [userOrderStatus, setUserOrderStatus] = useState(null);

  useEffect(() => {
    
    axios.get('/api/user-order-status')
      .then(response => {

        setUserOrderStatus(response.data);
      })
      .catch(error => {
        console.error('Error fetching order status:', error);
      });
  }, []);

  return (
    <div>
      <h3>User Order Status</h3>
      <button onClick={onHomeClick}>Home</button>
      <button onClick={onLogoutClick}>Logout</button>

      {userOrderStatus ? (
        <div>
          <h4>Name: {userOrderStatus.name}</h4>
          <p>Email: {userOrderStatus.email}</p>
          <p>Status: {userOrderStatus.status}</p>
          <p>Address: {userOrderStatus.address}</p>
        </div>
      ) : (
        <p>Loading order status...</p>
      )}
    </div>
  );
}

export default OrderStatus;
