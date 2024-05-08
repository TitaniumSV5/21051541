import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>Company: {product.company}</p>
        <p>Category: {product.category}</p>
        <p>Price: {product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>Discount: {product.discount}</p>
        <p>Availability: {product.availability}</p>
      </Link>
    </div>
  );
}

export default ProductCard;
