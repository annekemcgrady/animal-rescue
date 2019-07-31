import React from "react";
import "./Card.css";

const Card = ({ name, img, species, description }) => {
  return (
    <div className="animal-card">
      <img src={img} alt={species} />
      <h3>{name}</h3>
      <h5>Species: {species}</h5>
      <p>{description}</p>
    </div>
  );
};

export default Card;
