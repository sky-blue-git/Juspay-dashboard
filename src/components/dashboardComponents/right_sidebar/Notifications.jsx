import React from 'react';
import notificationIcon from '../../../assets/react.svg';

const Notifications = () => {
  const notifications = [
    { text: 'You have a bug that needs...', time: 'Just now' },
    { text: 'New user registered', time: '59 minutes ago' },
    { text: 'You have a bug that needs...', time: '12 hours ago' },
    { text: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM' }
  ];

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        padding: '16px',
        width: '240px',
        height: '252px',
        borderRadius: '8px'
      }}
    >
      <div
        style={{
          width: '240px',
          height: '36px',
          paddingTop: '8px',
          paddingLeft: '4px',
          paddingBottom: '8px',
          paddingRight: '4px',
          fontSize: '14px',
          fontWeight: '600',
          lineHeight: '20px',
          color: '#1C1C1C'
        }}
      >
        Notifications
      </div>
      <div style={{ gap: '8px' }}>
        {notifications.map((notification, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img
              src={notificationIcon}
              alt="Notification"
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '4px',
                padding: '4px',
                backgroundColor: '#f7f7f7'
              }}
            />
            <div
              style={{
                width: '192px',
                height: '38px',
                borderRadius: '8px'
              }}
            >
              <div style={{ fontSize: '14px', fontWeight: '400', lineHeight: '20px', color: '#1C1C1C' }}>
                {notification.text}
              </div>
              <div style={{ fontSize: '12px', fontWeight: '400', lineHeight: '18px', color: '#1C1C1C66' }}>
                {notification.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
