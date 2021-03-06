import React from "react";
import DonationCard from "./DonationCard.js";
import "./DonationContainer.css";
import { connect } from "react-redux";

const DonationsContainer = ({ donations }) => {
  const displayDonationCards = donations.map(donation => {
    return (
      <DonationCard
        key={donation.id}
        name={donation.name}
        amount={donation.donation}
      />
    );
  });

  return (
    <div className="donations">
      <h4>Recent Donations</h4>
      {displayDonationCards}
    </div>
  );
};

const mapStateToProps = state => ({
  donations: state.donations
});

export default connect(mapStateToProps)(DonationsContainer);
