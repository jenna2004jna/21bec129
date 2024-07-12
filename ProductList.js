// src/pages/AllProductsPage.js

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8000/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="all-products-page">
      <h1>All Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}

export default AllProductsPage;
