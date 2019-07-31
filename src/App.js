import React, { Component } from 'react';
import './App.css';
import { fetchAnimals } from './apiCalls';

class App extends Component {


componentDidMount = async ()=> {
const animalData = await fetchAnimals()
console.log(animalData)
}
  

render =()=> {

  return (
    <div className="App">
      APP COMPONENT
    </div>
  );
}
}

export default App;
