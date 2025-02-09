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
    <div style={{ width: '240px', marginTop: '28px'}}>
      <p style={{fontSize: '14px', fontWeight: '600', padding: '8px 4px', marginBottom:"8px"}}>Contacts</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px'}}>
      {contacts.map((contact, index) => (
        <div key={index} style={{
          width: '100%',
          padding: '4px',
          gap: '8px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <img src={contact.image} alt={contact.name} />
          <p style={{fontSize: "14px"}}>{contact.name}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Frame;
