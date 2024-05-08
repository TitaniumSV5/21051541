import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { fetchTopProducts } from '../api';

function AllProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch top products from backend API
    fetchTopProducts()
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching top products:', error));
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <ProductList products={products} />
    </div>
  );
}

export default AllProductsPage;
