// src/pages/ProductDetailPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';

const ProductDetailPage = () => {
  const { productId } = useParams();

  // Assume fetching product details here based on productId
  const products = []; // Replace with actual logic to fetch product details

  return (
    <div className="product-detail-page">
      <h1>Product Detail</h1>
      <ProductDetail products={products} />
    </div>
  );
}

export default ProductDetailPage;
