import React, { useState } from 'react';

function AddItemPage({ vendorName, onLogout }) {
  const [productList, setProductList] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    setProductList([...productList, { ...newProduct }]);
    setNewProduct({ name: '', price: '', image: '' });
  };

  const handleDeleteProduct = (index) => {
    const updatedProductList = [...productList];
    updatedProductList.splice(index, 1);
    setProductList(updatedProductList);
  };

  return (
    <div>
      <div className="page-header">
        <span>Welcome, {vendorName}</span>
        <button onClick={onLogout}>Logout</button>
      </div>
      <div className="page-content">
        <div className="add-product">
          <h2>Add Product</h2>
          <div>
            <label>Product Name:</label>
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Product Price:</label>
            <input
              type="text"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Product Image URL:</label>
            <input
              type="text"
              name="image"
              value={newProduct.image}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={handleAddProduct}>Add Product</button>
        </div>
        <div className="product-list">
          <h2>Product List</h2>
          {productList.map((product, index) => (
            <div key={index} className="product-item">
              <img src={product.image} alt={product.name} />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
              </div>
              <div className="product-actions">
                <button>Update</button>
                <button onClick={() => handleDeleteProduct(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddItemPage;
