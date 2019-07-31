import React from 'react';
import './Card.css'


const Card = ({ name, img, species, description }) => {
  return (
    <div className="animal-card">
     <h3>{name}</h3>
     <img src={img} alt={species} />
     <h5>Species: {species}</h5>
     <p>{description}</p>
    </div>
  )
}


export default Card;