import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <div style={{ padding: '16px', background: '#f8f9fa', borderRadius: '12px', textAlign: 'left', width: '662px', height: '336px', marginTop: "28px" }}>
      <h1 style={{ fontWeight: '600', marginBottom: '12px' }}>Top Selling Products</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '8px' }}>Name</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Price</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Quantity</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td style={{ padding: '8px', color: '#333' }}>{product.name}</td>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>${product.price.toFixed(2)}</td>
                <td style={{ padding: '8px' }}>{product.quantity}</td>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>${(product.price * product.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TopSellingProducts = () => {
  const products = [
    { name: 'ASOS Ridley High Waist', price: 79.49, quantity: 82 },
    { name: 'Marco Lightweight Shirt', price: 128.5, quantity: 37 },
    { name: 'Half Sleeve Shirt', price: 39.99, quantity: 64 },
    { name: 'Lightweight Jacket', price: 20.0, quantity: 184 },
    { name: 'Marco Shoes', price: 79.49, quantity: 64 }
  ];

  return <ProductTable products={products} />;
};

export default TopSellingProducts;