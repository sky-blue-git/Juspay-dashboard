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
    <div style={{ width: '240px' }}>
      <p style={{fontSize: '14px', fontWeight: '600', padding: '8px 4px', marginBottom:"8px"}}>Notifications</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px'}}>
        {notifications.map((notification, index) => (
          <div 
            key={index} 
            style={{ 
              display: 'flex', 
              alignItems:"flex-start",
              gap: '8px', 
              padding: '4px', 
              width: '100%',
            }}
          >
            <img 
              src={notification.image} 
              alt="Notification" 
            />
            <div>
              <p style={{ fontSize: '14px', fontWeight: '400', lineHeight: '20px'}}>
                {notification.text}
              </p>
              <p style={{ fontSize: '12px', fontWeight: '400', lineHeight: '18px', color: 'var(--black40)' }}>
                {notification.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
