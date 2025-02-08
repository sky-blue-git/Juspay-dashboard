import React from 'react';
import Dot from './Dot';

const OrderTable = () => {
  const orders = [
    { id: '#CM9801', user: 'Notall Craig', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
    { id: '#CM9802', user: 'Kate Morrison', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete' },
    { id: '#CM9803', user: 'Drew Cano', project: 'Client Project', address: 'Bagwell Avenue Occla', date: '1 hour ago', status: 'Pending' },
    { id: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
    { id: '#CM9805', user: 'Andi Lane', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
    { id: '#CM9801', user: 'Notall Craig', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
    { id: '#CM9802', user: 'Kate Morrison', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete' },
    { id: '#CM9803', user: 'Drew Cano', project: 'Client Project', address: 'Bagwell Avenue Occla', date: '1 hour ago', status: 'Pending' },
    { id: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
    { id: '#CM9805', user: 'Andi Lane', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Orders</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--black10)', color: "var(--black40)" }}>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'normal' }}>Order ID</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'normal' }}>User</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'normal' }}>Project</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'normal' }}>Address</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'normal' }}>Date</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'normal' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => {
            const statusColor = getStatusColor(order.status); // Get color for the status
            return (
              <tr key={index} style={{ borderBottom: '1px solid var(--black10)', color: "var(--black100)" }}>
                <td style={{ padding: '12px' }}>{order.id}</td>
                <td style={{ padding: '12px' }}>{order.user}</td>
                <td style={{ padding: '12px' }}>{order.project}</td>
                <td style={{ padding: '12px' }}>{order.address}</td>
                <td style={{ padding: '12px' }}>{order.date}</td>
                <td style={{ padding: '12px', color: statusColor }}>
                  <Dot color={statusColor} /> {/* Pass the same color to Dot */}
                  {order.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// Helper function to determine status color
const getStatusColor = (status) => {
  switch (status) {
    case 'In Progress':
      return '#8A8CD9'; // Purple
    case 'Complete':
      return '#4AA785'; // Green
    case 'Pending':
      return '#59A8D4'; // Blue
    case 'Approved':
      return '#FFC555'; // Yellow
    case 'Rejected':
      return 'var(--black40)'; // Gray
    default:
      return '#000000'; // Black
  }
};

export default OrderTable;