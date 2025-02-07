import React from 'react';
import './Home.css';
import AssignmentButton from './homeComponents/AssignmentButton';
import Circle1 from './homeComponents/Circle1';
import Grid from './homeComponents/Grid';
import Circle2 from './homeComponents/Circle2';

const Home = () => {
  return (
    <div className="home">
      <Circle1 />
      <AssignmentButton />
      <div className="text-container1">
        <span className="text-line">UI DEVELOPER</span>
        <span className="text-line">ASSIGNMENT</span>
      </div>
      <div className="text-container2">
        <span className="text-line">COMPANY</span>
        <span className="text-line">Juspay Technologies Private Limited</span>
      </div>
      <Grid />
      <Circle2 />
    </div>
  );
};

export default Home;
