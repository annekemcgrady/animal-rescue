import React from 'react';
import './Card.css'


const Card = ({ name, img, species, description }) => {
  return (
    <div className="animal-card">
     <h3>Name: {name}</h3>
     <img src={img} alt={species} />
     <h5>Species: {species}</h5>
     <p>Description: {description}</p>
    </div>
  )
}


export default Card;