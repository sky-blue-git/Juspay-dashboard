import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './AssignmentButton.css'; 

const AssignmentButton = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    console.log("clicked");
    navigate('/dashboard'); 
  }, [navigate]);

  return (
    <button className="custom-button" onClick={handleClick}>
      ASSIGNMENT
    </button>
  );
};

export default AssignmentButton;
