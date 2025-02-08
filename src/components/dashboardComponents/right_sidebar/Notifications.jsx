import React from 'react';
import bees from '../../../assets/bees.svg';
import profileicon from '../../../assets/profileicon.svg';
import bees2 from '../../../assets/bees2.svg';
import hotspot from '../../../assets/hotspot.svg';

const Notifications = () => {
  const notifications = [
    { text: 'You have a bug that needs...', time: 'Just now', image: bees },
    { text: 'New user registered', time: '59 minutes ago', image: profileicon },
    { text: 'You have a bug that needs...', time: '12 hours ago', image: bees2 },
    { text: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM', image: hotspot }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>Notifications</div>
      <div style={styles.notificationList}>
        {notifications.map((notification, index) => (
          <div key={index} style={styles.notificationItem}>
            <img src={notification.image} alt="Notification" style={styles.notificationIcon} />
            <div style={styles.textContainer}>
              <div style={styles.notificationText}>{notification.text}</div>
              <div style={styles.notificationTime}>{notification.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff',
    padding: '16px',
    width: '240px',
    height: '252px',
    // borderRadius: '8px',
    // boxSizing: 'border-box'
  },
  header: {
    width: '240px',
    height: '36px',
    padding: '8px 4px',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '20px',
    color: '#1C1C1C'
  },
  notificationList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  NotificationsText: {
    fontFamily: 'Inter, sans-serif', // Apply Inter font to the "Contacts" text
  },
  notificationItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    // borderRadius: '8px',
    padding: '4px',
    width: '232px',
    height:'46px',
    // boxSizing: 'border-box'
  },
  notificationIcon: {
    width: '24px',
    height: '24px',
    // borderRadius: '4px',
    padding: '4px',
    backgroundColor: '#f7f7f7'
  },
  textContainer: {
    width: '192px',
    height: '38px',
    // borderRadius: '8px'
  },
  notificationText: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
    color: '#1C1C1C'
  },
  notificationTime: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '18px',
    color: '#1C1C1C66'
  }
};

export default Notifications;
