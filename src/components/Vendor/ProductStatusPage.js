import React from 'react';

function ProductStatusPage({ onHomeClick, onLogout }) {
  const productData = [
    {
      id: 1,
      name: 'Product 1',
      email: 'product1@example.com',
      address: '123 Main St',
      status: 'Available',
    },
    {
      id: 2,
      name: 'Product 2',
      email: 'product2@example.com',
      address: '456 Elm St',
      status: 'Sold Out',
    },
    {
      id: 3,
      name: 'Product 3',
      email: 'product3@example.com',
      address: '789 Oak St',
      status: 'Available',
    },
    {
      id: 4,
      name: 'Product 4',
      email: 'product4@example.com',
      address: '101 Pine St',
      status: 'In Stock',
    },
  ];

  return (
    <div>
      <div className="page-header">
        <button onClick={onHomeClick}>Home</button>
        <button onClick={onLogout}>Logout</button>
      </div>
      <div className="page-content">
        <h2>Product Status</h2>
        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.email}</td>
                <td>{product.address}</td>
                <td>{product.status}</td>
                <td>
                  <button>Update</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductStatusPage;
