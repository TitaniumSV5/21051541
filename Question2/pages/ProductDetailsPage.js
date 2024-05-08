import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../api';

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from backend API
    fetchProductDetails(productId)
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>Name: {product.name}</p>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}</p>
      <p>Availability: {product.availability}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default ProductDetailsPage;
