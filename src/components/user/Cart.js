import React, { useState } from 'react';
import './Cart.css';
function Cart({ onHomeClick, onViewProductClick, onRequestItemClick, onProductStatusClick, onLogoutClick }) {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10.0, quantity: 2 },
    { id: 2, name: 'Product 2', price: 15.0, quantity: 1 },
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const removeItem = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };

  const removeAllItems = () => {
    setCartItems([]);
  };

  return (
    <div>
      <h3>Shopping Cart</h3>
      <button onClick={onHomeClick}>Home</button>
      <button onClick={onViewProductClick}>View Product</button>
      <button onClick={onRequestItemClick}>Request Item</button>
      <button onClick={onProductStatusClick}>Product Status</button>
      <button onClick={onLogoutClick}>Logout</button>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>Product Image</td>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <p>Grand Total: ${getTotalPrice().toFixed(2)}</p>
        <button onClick={removeAllItems}>Delete All</button>
      </div>

      <div className="center">
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
