import React, { Component } from "react";
import "./App.css";
import CardContainer from "./CardContainer";
import Form from "./Form.js";
import { fetchAnimals, fetchDonations } from "./apiCalls";
import {
  addAnimals,
  addError,
  updateIsLoading,
  addDonations
} from "./actions/index.js";
import { connect } from "react-redux";
import DonationsContainer from "./DonationsContainer";

class App extends Component {
  componentDidMount = async () => {
    try {
      const animalData = await fetchAnimals();
      this.props.setAnimals(animalData);
    } catch (error) {
      this.props.setError(error.message);
    }
    this.fetchDonationData()
    this.props.setIsLoading();
  };


  fetchDonationData = async () => {
    try {
      const donationData = await fetchDonations();
      this.props.setDonations(donationData);
    } catch (error) {
      this.props.setError(error.message);
    }
  }

  render = () => {
    return (
      <div className="App">
        <Form />
        {this.props.isLoading && <div className="loading">Loading....</div>}
        {this.props.error && <div className="loading">{this.props.error}</div>}
        <section className="main">
          <CardContainer />
          <DonationsContainer />
        </section>
      </div>
    );
  };
}

const mapStateToProps = store => ({
  error: store.error,
  isLoading: store.isLoading
});

const mapDispatchToProps = dispatch => ({
  setAnimals: animals => dispatch(addAnimals(animals)),
  setError: errorMsg => dispatch(addError(errorMsg)),
  setIsLoading: () => dispatch(updateIsLoading()),
  setDonations: donations => dispatch(addDonations(donations))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
