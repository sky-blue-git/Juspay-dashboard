import React, { useState } from 'react';
import Dot from '../Dot';
import SearchComponent from './SearchComponent';
import { MoreHoriz, ChevronLeft, ChevronRight } from '@mui/icons-material';
import user1 from '../../assets/Female15.svg';
import user2 from '../../assets/zero.svg';
import user3 from '../../assets/one.svg';
import user4 from '../../assets/two.svg';
import user5 from '../../assets/three.svg';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const OrderTable = () => {
  const orders = [
    { id: '#CM9801', user: 'Notall Craig', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress', image: user1 },
    { id: '#CM9802', user: 'Kate Morrison', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete', image: user2 },
    { id: '#CM9803', user: 'Drew Cano', project: 'Client Project', address: 'Bagwell Avenue Occla', date: '1 hour ago', status: 'Pending', image: user3 },
    { id: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved', image: user4 },
    { id: '#CM9805', user: 'Andi Lane', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected', image: user5 },
    { id: '#CM9801', user: 'Notall Craig', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress', image: user1 },
    { id: '#CM9802', user: 'Kate Morrison', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete', image: user2 },
    { id: '#CM9803', user: 'Drew Cano', project: 'Client Project', address: 'Bagwell Avenue Occla', date: '1 hour ago', status: 'Pending', image: user3 },
    { id: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved', image: user4 },
    { id: '#CM9805', user: 'Andi Lane', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected', image: user5 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = 5; 

  const currentOrders = orders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const [selectedOrders, setSelectedOrders] = useState([]);

  const handleCheckboxChange = (orderId) => {
    if (selectedOrders.includes(orderId)) {
      setSelectedOrders(selectedOrders.filter((id) => id !== orderId)); 
    } else {
      setSelectedOrders([...selectedOrders, orderId]); 
    }
  };

  return (
    <div style={{ margin: "28px" }}>
      <div style={{ padding: "4px 8px", margin: "16px 0" }}>
        <p style={{ fontSize: "14px", fontWeight: "600", lineHeight: "20px" }}>Order List</p>
      </div>
      <SearchComponent />
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--black10)', color: "var(--black40)" }}>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'normal' }}></th> 
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'normal' }}>Order ID</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'normal' }}>User</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'normal' }}>Project</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'normal' }}>Address</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'normal' }}>Date</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'normal' }}>Status</th>
            <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'normal' }}></th> 
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order, index) => {
            const statusColor = getStatusColor(order.status); 
            return (
              <tr key={index} style={{ borderBottom: '1px solid var(--black10)', color: "var(--black100)" }}>
                <td style={{ padding: '12px' }}>
                  <input
                    type="checkbox"
                    checked={selectedOrders.includes(order.id)} 
                    onChange={() => handleCheckboxChange(order.id)}
                  />
                </td>
                <td style={{ padding: '12px' }}>{order.id}</td>
                <td style={{ padding: '12px', display: 'flex', alignItems: 'center' }}>
                  <img src={order.image} alt={order.user} style={{ width: '24px', height: '24px', borderRadius: '50%', marginRight: '10px' }} />
                  {order.user}
                </td>
                <td style={{ padding: '12px' }}>{order.project}</td>
                <td style={{ padding: '12px' }}>{order.address}</td>
                <td style={{ padding: '12px', display: 'flex', alignItems: 'center' }}>
                  <CalendarTodayIcon style={{ marginRight: '4px', color: 'var(--black100)', fontSize: '16px' }} /> {/* Calendar icon with size 16 */}
                  {order.date}
                </td>
                <td style={{ padding: '12px', color: statusColor}}>
                  <Dot color={statusColor} /> 
                  {order.status}
                </td>
                <td style={{ padding: '12px' }}>
                  <MoreHoriz style={{ cursor: 'pointer', color: 'var(--black100)' }} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ marginRight: '8px', cursor: 'pointer', background: 'none', border: 'none', color: 'var(--black100)' }}
        >
          <ChevronLeft />
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            style={{
              margin: '0 4px',
              padding: '4px 8px',
              background: currentPage === i + 1 ? 'var(--black10)' : 'none',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '4px',
              color: 'var(--black100)',
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{ marginLeft: '8px', cursor: 'pointer', background: 'none', border: 'none', color: 'var(--black100)' }}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'In Progress':
      return '#8A8CD9';
    case 'Complete':
      return '#4AA785';
    case 'Pending':
      return '#59A8D4';
    case 'Approved':
      return '#FFC555'; 
    case 'Rejected':
      return 'var(--black40)'; 
    default:
      return '#000000'; 
  }
};

export default OrderTable;