import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addNewDonation } from './actions/index.js'


class Form extends Component {

  state = {
    name: '',
    donation: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value})
    console.log(this.state)
  }

  createDonation = () => {
    let newDonation = {id: Date.now(), name: this.state.name, donation: parseInt(this.state.donation)}
    this.props.setNewDonation(newDonation)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({name: ''})
    this.setState({donation:''})
  }

  render = () => {
    return(
      <form action="submit">
      <input type="text" name="name" value={this.state.name} />
      <input type="text" name="donation" value={this.state.donation} />
      <button type='button' onClick={this.createDonation}>Donate!</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setNewDonation: newDonation => dispatch(addNewDonation(newDonation))
})


export default connect(null, mapDispatchToProps)(Form);

