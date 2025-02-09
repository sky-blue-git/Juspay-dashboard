import React from 'react';

const Favourites = () => {
  return (
    <div style={{ width: "180px", height: "104px", fontSize: "14px"}}>
      <div style={{ display: 'flex', fontSize: '14px', lineHeight: '20px', justifyContent:"stretch", marginBottom: "4px"}}>
        <span style={{ color: 'var(--black40)', padding: "4px 8px"}}>Favorites</span>
        <span style={{ color: 'var(--black20)', padding: "4px 8px"}}>Recently</span>
      </div>
      <ul>
        <li style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: "4px 8px", marginBottom: "4px" }}>
          <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: 'var(--black20)', borderRadius: '50%', margin: "5px" }}></span>
          <p>Overview</p>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px', padding: "4px 8px" }}>
          <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: 'var(--black20)', borderRadius: '50%', margin: "5px" }}></span>
          <p>Projects</p>
        </li>
      </ul>
    </div>
  );
}

export default Favourites;