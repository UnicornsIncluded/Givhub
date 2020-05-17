<<<<<<< HEAD
import React from "react";
import { connect } from "react-redux";
import { attemptUpdateUser } from "_thunks/user";

class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
=======
import React from 'react'
import {connect} from 'react-redux'
import {attemptUpdateUser} from '../../../store/thunks/user'

class AddressForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState()
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.setState = this.handleSubmit.bind(this)
  }

  initialState() {
    return {
<<<<<<< HEAD
      street_address: "",
      city: "",
      state: "",
      zip_code: "",
      googleMapLink: "",
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const streetAddress = this.state.street_address;
    const city = this.state.city;
    const state = this.state.state;
    const zipcode = this.state.zip_code;
    const address =
      streetAddress + " " + city + " " + state + " " + zipcode;
    this.props.attemptUpdateUser({ address });
=======
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
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
  }

  render() {
    return (
      <div>
        <h2>Add Pickup Address</h2>
        <form onSubmit={this.handleSubmit}>
          <input
<<<<<<< HEAD
          //   id="autocomplete" <<< try to implement googlemaps api
            name={"street_address"}
            value={this.state.street_address}
            placeholder={"Street Address"}
=======
            //   id="autocomplete" <<< try to implement googlemaps api
            name="street_address"
            value={this.state.street_address}
            placeholder="Street Address"
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
            onChange={this.handleChange}
            required
          />
          <input
<<<<<<< HEAD
            name={"city"}
            value={this.state.city}
            placeholder={"City"}
=======
            name="city"
            value={this.state.city}
            placeholder="City"
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
            onChange={this.handleChange}
            required
          />
          <input
<<<<<<< HEAD
            name={"state"}
            value={this.state.state}
            placeholder={"State"}
=======
            name="state"
            value={this.state.state}
            placeholder="State"
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
            onChange={this.handleChange}
            required
          />
          <input
<<<<<<< HEAD
            name={"zip_code"}
            value={this.state.zip_code}
            placeholder={"Zipcode"}
=======
            name="zip_code"
            value={this.state.zip_code}
            placeholder="Zipcode"
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
            onChange={this.handleChange}
            required
          />
          <button onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </div>
<<<<<<< HEAD
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  attemptUpdateUser: (userDetails) => dispatch(attemptUpdateUser(userDetails)),
});

export default connect(null, mapDispatchToProps)(AddressForm);
=======
    )
  }
}

const mapDispatchToProps = dispatch => ({
  attemptUpdateUser: userDetails => dispatch(attemptUpdateUser(userDetails))
})

export default connect(null, mapDispatchToProps)(AddressForm)
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
