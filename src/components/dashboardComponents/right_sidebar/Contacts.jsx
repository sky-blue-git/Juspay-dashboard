import React from 'react';

const Contacts = () => {
  const contacts = [
    { name: 'Notali Craig' },
    { name: 'Drew Camo' },
    { name: 'Orlando Diggs' },
    { name: 'Andi Lane' },
    { name: 'Kate Morrison' },
    { name: 'Koray Okumus' }
  ];

  return (
    <div style={{
      backgroundColor: "#ffffff",
      padding: "16px",
      width: "240px",
      height: "276px",
      borderRadius: "8px"
    }}>
      <h1 style={{
        fontSize: "18px",
        padding: "8px 4px",
        textAlign: "left",
        color: "#333",
        margin: 0
      }}>
        Contactact
      </h1>
      <div style={{
        gap: "8px",
        overflowY: "auto"
      }}>
        {contacts.map((contact, index) => (
          <div key={index} style={{
            width: "100%",
            height: "32px",
            borderRadius: "8px",
            padding: "4px",
            backgroundColor: "#f0f0f0"
          }}>
            <span style={{
              fontSize: "14px",
              color: "#333"
            }}>
              {contact.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacts;
