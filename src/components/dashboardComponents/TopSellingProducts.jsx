import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <div style={{ padding: '24px', background: 'var(--primary-light)', borderRadius: '12px', textAlign: 'left', width: '662px', height: '336px', marginTop: "28px" }}>
      <p style={{ fontWeight: '600', marginBottom: '16px', fontSize: "14px" }}>Top Selling Products</p>
      <div style={{ display: 'flex', alignItems:"center" }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
          <thead style={{ color: 'var(--black40)' }}>
            <tr>
              <th style={{ textAlign: 'left', paddingBottom: '12px', fontWeight: 'normal', width: '224px' }}>Name</th>
              <th style={{ textAlign: 'left', paddingBottom: '12px', fontWeight: 'normal', width: "130px" }}>Price</th>
              <th style={{ textAlign: 'left', paddingBottom: '12px', fontWeight: 'normal', width: "130px" }}>Quantity</th>
              <th style={{ textAlign: 'left', paddingBottom: '12px', fontWeight: 'normal' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--black20)' }}></tr>
            {products.map((product, index) => (
              <tr key={index} style={{ color: "var(--black100)"}}>
                <td style={{ paddingTop: '14px', paddingBottom: '14px' }}>{product.name}</td>
                <td style={{ paddingTop: '14px', paddingBottom: '14px' }}>${product.price.toFixed(2)}</td>
                <td style={{ paddingTop: '14px', paddingBottom: '14px' }}>{product.quantity}</td>
                <td style={{ paddingTop: '14px', paddingBottom: '14px' }}>${(product.price * product.quantity).toFixed(2)}</td>
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