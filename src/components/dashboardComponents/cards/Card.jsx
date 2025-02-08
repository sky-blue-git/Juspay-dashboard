import React from "react";
import "./Card.css";
import ArrowUp from "../../../assets/arrow-up.svg";
import ArrowDown from "../../../assets/arrow-down.svg";

const Card = ({ color, bgcolor, heading, number, percentage, growth }) => {
  return (
    <div className="card" style={{ backgroundColor: bgcolor, color: color }}>
      <span className="card-heading">{heading}</span>
      <div className="card-content">
        <span className="card-number">{number}</span>
        <div>
          <span className="card-percentage">
          {growth ? `+${percentage}%` : `-${percentage}%`}
          </span>
          {growth ? (
            <img src={ArrowUp} alt="Up Arrow" className="card-icon" />
          ) : (
            <img src={ArrowDown} alt="Down Arrow" className="card-icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;