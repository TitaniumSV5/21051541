const API_BASE_URL = 'http://127.0.0.1:5000'; // Replace with your backend API URL

export const fetchTopProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories/phone/products?top=10`);
    if (!response.ok) {
      throw new Error('Failed to fetch top products');
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const fetchProductDetails = async (productId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories/phone/products/${productId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product details');
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};
