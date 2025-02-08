import React from 'react';
import './Favourites.css';

const Favourites = () => {
  return (
    <div className="favourites-container">
      <div className="tabs">
        <span className="tab active">Favorites</span>
        <span className="tab">Recently</span>
      </div>
      <ul className="favourites-list">
        <li className="favourites-item">
          <span className="dot"></span>
          Overview
        </li>
        <li className="favourites-item">
          <span className="dot"></span>
          Projects
        </li>
      </ul>
    </div>
  );
}

export default Favourites;
