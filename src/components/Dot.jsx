import React from 'react';

const Dot = ({ color }) => {
  return (
    <span
      style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: color,
        display: 'inline-block',
      }}
    />
  );
};

export default Dot;