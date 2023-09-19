
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

const OrderConfirmation = ({ isOpen, onClose, orderDetails }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal">
      <div className="modal-content">
        <h2>Thank You for Your Order!</h2>
        <p>Total Amount: ${orderDetails.totalAmount.toFixed(2)}</p>
        <div className="user-details">
          <div className="left">
            <p>Name: {orderDetails.name}</p>
            <p>Email: {orderDetails.email}</p>
            <p>Address: {orderDetails.address}</p>
            <p>City: {orderDetails.city}</p>
          </div>
          <div className="right">
            <p>Phone Number: {orderDetails.phoneNumber}</p>
            <p>Payment Method: {orderDetails.paymentMethod}</p>
            <p>State: {orderDetails.state}</p>
            <p>Pincode: {orderDetails.pincode}</p>
          </div>
        </div>
        <button onClick={onClose} className="continue-shopping-button">
          Continue Shopping
        </button>
      </div>
    </Modal>
  );
};

export default OrderConfirmation;
