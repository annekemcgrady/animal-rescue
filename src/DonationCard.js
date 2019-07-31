import React from 'react';
import './DonationCard.css'


const DonationCard = ({ name, amount }) => {
  return (
    <div className="donation-card">
     <h3>{name}</h3>
      <h3>{amount}</h3>
    </div>
  )
}


export default DonationCard;