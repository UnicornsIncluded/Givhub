import React from 'react'
import {connect} from 'react-redux'
import {attemptUpdateUser} from '../../../store/thunks/user'

class AddressForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.setState = this.handleSubmit.bind(this)
  }

  initialState() {
    return {
      street_address: '',
      city: '',
      state: '',
      zip_code: '',
      googleMapLink: ''
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    const streetAddress = this.state.street_address
    const city = this.state.city
    const state = this.state.state
    const zipcode = this.state.zip_code
    const address = streetAddress + ' ' + city + ' ' + state + ' ' + zipcode
    this.props.attemptUpdateUser({address})
  }

  render() {
    return (
      <div>
        <h2>Add Pickup Address</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            //   id="autocomplete" <<< try to implement googlemaps api
            name="street_address"
            value={this.state.street_address}
            placeholder="Street Address"
            onChange={this.handleChange}
            required
          />
          <input
            name="city"
            value={this.state.city}
            placeholder="City"
            onChange={this.handleChange}
            required
          />
          <input
            name="state"
            value={this.state.state}
            placeholder="State"
            onChange={this.handleChange}
            required
          />
          <input
            name="zip_code"
            value={this.state.zip_code}
            placeholder="Zipcode"
            onChange={this.handleChange}
            required
          />
          <button onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  attemptUpdateUser: userDetails => dispatch(attemptUpdateUser(userDetails))
})

export default connect(null, mapDispatchToProps)(AddressForm)
