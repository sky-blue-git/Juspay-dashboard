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
    { name: 'Koray Okumus', image: image6 },
  ];

  return (
    <div style={styles.frame}>
      <div style={styles.contactsBox}>
        <span style={styles.contactsText}>Contacts</span>
      </div>
      {contacts.map((contact, index) => (
        <div key={index} style={styles.contactBox}>
          <img src={contact.image} alt={contact.name} style={styles.contactImage} />
          <span style={styles.contactName}>{contact.name}</span>
        </div>
      ))}
    </div>
  );
};

const styles = {
  frame: {
    width: '240px',
    height: '276px',
    gap: '8px',
    // padding: '8px',
  },
  contactsBox: {
    width: '240px',
    height: '36px',
    borderRadius: '8px',
    padding: '8px 4px 8px 4px',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
  },
  contactsText: {
    fontFamily: 'Inter, sans-serif', // Apply Inter font to the "Contacts" text
  },
  contactBox: {
    width: '240px',
    height: '32px',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  contactImage: {
    width: '24px',
    height: '24px',
  },
  contactName: {
    fontFamily: 'Inter, sans-serif', // Apply Inter font to the contact names
    fontSize: '12px', // Optional: Adjust font size
    color: '#333333', // Optional: Adjust text color
  },
};

export default Frame;