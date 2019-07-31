import React from 'react';
import './DonationCard.css'


const DonationCard = ({ name, amount }) => {
  return (
    <div className="donation-card">
      <p>{name}</p>
      <p>{amount}</p>
    </div>
  )
}


export default DonationCard;