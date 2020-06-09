import React from "react";

let Card = ({ title, description, icon }) => {
  return (
    <div className="cardContainer">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={icon} alt={title + " icon"} />
    </div>
  );
};

export default Card;
