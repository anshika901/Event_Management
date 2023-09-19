import React from 'react';

function Payment() {
  return (
    <div>
      <h3>Payment</h3>
      <form>
        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="Expiration Date" />
        <input type="text" placeholder="CVV" />
        <button>Pay Now</button>
      </form>
    </div>
  );
}

export default Payment;
