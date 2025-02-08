import React from 'react';
import image1 from '../../../assets/Female15.svg';
import image2 from '../../../assets/zero.svg';
import image3 from '../../../assets/one.svg';
import image4 from '../../../assets/two.svg';
import image5 from '../../../assets/three.svg';
import image6 from '../../../assets/four.svg';

const Frame = () => {
  const contacts = [
    { name: 'Natalie Crag', image: image1 },
    { name: 'Drew Cano', image: image2 },
    { name: 'Orlando Diggs', image: image3 },
    { name: 'Andi Lane', image: image4 },
    { name: 'Kate Morrison', image: image5 },
    { name: 'Koray Okumus', image: image6 }
  ];

  return (
    <div style={styles.frame}>
      <div style={styles.contactsBox}>
        <span>Contacts</span>
      </div>
      {contacts.map((contact, index) => (
        <div key={index} style={styles.contactBox}>
          <img src={contact.image} alt={contact.name} style={styles.contactImage} />
          <span>{contact.name}</span>
        </div>
      ))}
    </div>
  );
};

const styles = {
  frame: {
    width: '240px',
    height: '276px',
    // display: 'flex',
    // flexDirection: 'column',
    gap: '8px',
    // backgroundColor: '#f0f0f0', // Optional: Add background color
    padding: '8px',
    // boxSizing: 'border-box',
  },
  contactsBox: {
    width: '240px',
    height: '36px',
    borderRadius: '8px',
    padding: '8px 4px 8px 4px',
    backgroundColor: '#ffffff', // Optional: Add background color
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
    // boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Add shadow
  },
  contactBox: {
    width: '240px',
    height: '32px',
    // borderRadius: '8px',
    padding: '4px',
    // backgroundColor: '#ffffff', // Optional: Add background color
    // display: 'flex',
    // alignItems: 'center',
    gap: '8px',
    // boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Add shadow
  },
  contactImage: {
    width: '24px',
    height: '24px',
    // borderRadius: '8px',
    // objectFit: 'cover', // Ensure the image fits well
  },
};

export default Frame;