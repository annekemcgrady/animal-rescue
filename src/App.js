import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer';
import Form from './Form.js';
import { fetchAnimals, fetchDonations} from './apiCalls';
import { addAnimals, addError, updateIsLoading, addDonations } from './actions/index.js';
import { connect } from 'react-redux';
import DonationsContainer from './DonationsContainer';

class App extends Component {


componentDidMount = async ()=> {
  try {
    const animalData = await fetchAnimals()
    const donationData = await fetchDonations()
    this.props.setAnimals(animalData)
    this.props.setDonations(donationData)
    this.props.setIsLoading()
  } catch(error) {
    this.props.setError(error.message)
  }
} 

render =()=> {

  return (
    <div className="App">
      <Form />
      {this.props.isLoading && <div className="loading">Loading....</div>}
      {this.props.error && <div className="loading">Sorry we have encountered an error</div>}
      <DonationsContainer />
      <CardContainer />
    </div>
  );
}
}

const mapStateToProps = (store) => ({
  error: store.error,
  isLoading: store.isLoading
})

const mapDispatchToProps =(dispatch) => ({
  setAnimals: animals => dispatch(addAnimals(animals)),
  setError: errorMsg => dispatch(addError(errorMsg)),
  setIsLoading: () => dispatch(updateIsLoading()),
  setDonations: donations => dispatch(addDonations(donations))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


