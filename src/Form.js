import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewDonation } from "./actions/index.js";
import { createNewDonation } from "./apiCalls";
import "./Form.css";

class Form extends Component {
  state = {
    name: "",
    donation: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createDonation = async () => {
    let newDonation = {
      id: Date.now(),
      name: this.state.name,
      donation: parseInt(this.state.donation)
    };
    const donationToAdd = await createNewDonation(newDonation);
    this.props.setNewDonation(donationToAdd);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ name: "" });
    this.setState({ donation: "" });
  };

  render = () => {
    return (
      <form action="submit" className="form">
        <h2>ANIMAL RESCUE</h2>
        <input
          placeholder="Enter name"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          placeholder="Enter donation amount"
          type="text"
          name="donation"
          value={this.state.donation}
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.createDonation}>
          Donate!
        </button>
      </form>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  setNewDonation: newDonation => dispatch(addNewDonation(newDonation))
});

export default connect(
  null,
  mapDispatchToProps
)(Form);
