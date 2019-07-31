import React, { Component } from 'react';
import './App.css';
import { fetchAnimals } from './apiCalls';
import { addAnimals } from './actions/index.js';
import { connect } from 'react-redux';

class App extends Component {


componentDidMount = async ()=> {
const animalData = await fetchAnimals()
console.log(animalData)
this.props.setAnimals(animalData)
}
  

render =()=> {

  return (
    <div className="App">
      APP COMPONENT
    </div>
  );
}
}

const mapDispatchToProps =(dispatch) => ({
  setAnimals: animals => dispatch(addAnimals(animals))
})

export default connect(null, mapDispatchToProps)(App);


