import React, { useState } from 'react';

function Checkout({ cartItems, onOrderNowClick }) {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');

  return (
    <div>
      <h3>Checkout</h3>
      <div className="checkout-items">
        <h4>Items</h4>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)} (Qty: {item.quantity})
            </li>
          ))}
        </ul>
      </div>

      <div className="checkout-details">
        <h4>Details</h4>
        <div className="left">
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Address:</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div>
            <label>City:</label>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
        </div>
        <div className="right">
          <div>
            <label>Phone Number:</label>
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
          <div>
            <label>Payment Method:</label>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="cash">Cash</option>
              <option value="upi">UPI</option>
            </select>
          </div>
          <div>
            <label>State:</label>
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
          </div>
          <div>
            <label>Pincode:</label>
            <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="checkout-button">
        <button onClick={onOrderNowClick}>Order Now</button>
      </div>
    </div>
  );
}

export default Checkout;
