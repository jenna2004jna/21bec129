// src/components/ProductList.js

import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={`https://placeimg.com/300/300/tech`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Company: {product.company}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
