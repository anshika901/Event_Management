import React from 'react';
import { Link } from 'react-router-dom'; 

function Index() {
  return (
    <div>
      <h1>Welcome to Event Management</h1>
      <Link to="/admin">
        <button>Login as Admin</button>
      </Link>
      <Link to="/user">
        <button>Login as User</button>
      </Link>
      <Link to="/vendor">
        <button>Login as Vendor</button>
      </Link>
    </div>
  );
}

export default Index;
