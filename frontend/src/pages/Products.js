import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Products</h1>

      {loading && <p>Loading...</p>}

      {!loading && products.length === 0 && <p>No products found.</p>}

      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
