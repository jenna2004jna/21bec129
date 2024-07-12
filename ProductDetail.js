
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const product = products.find(prod => prod.id === productId);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={`https://placeimg.com/400/400/tech`} alt={product.name} />
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

export default ProductDetail;
