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
import './OrderTable.css'; // Import the CSS file

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
    <div className="order-table-container">
      <div className="order-table-header">
        <p className="order-table-title">Order List</p>
      </div>
      <SearchComponent />
      <table className="order-table">
        <thead>
          <tr className="order-table-head-row">
            <th></th>
            <th>Order ID</th>
            <th>User</th>
            <th>Project</th>
            <th>Address</th>
            <th>Date</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order, index) => {
            const statusColor = getStatusColor(order.status);
            return (
              <tr key={index} className="order-table-row">
                <td>
                  <input
                    type="checkbox"
                    checked={selectedOrders.includes(order.id)}
                    onChange={() => handleCheckboxChange(order.id)}
                  />
                </td>
                <td>{order.id}</td>
                <td className="user-cell">
                  <img src={order.image} alt={order.user} className="user-image" />
                  {order.user}
                </td>
                <td>{order.project}</td>
                <td>{order.address}</td>
                <td className="date-cell">
                  <CalendarTodayIcon fontSize='xsmall' className="calendar-icon" />
                  {order.date}
                </td>
                <td style={{ color: statusColor }}>
                  <Dot color={statusColor} />
                  {order.status}
                </td>
                <td>
                  <MoreHoriz className="more-icon" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          <ChevronLeft />
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-button"
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