<<<<<<< HEAD
import React from "react";
import { connect } from "react-redux";
import { attemptUpdateUser } from "_thunks/user";

class PhoneForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
=======
import React from 'react'
import {connect} from 'react-redux'
import {attemptUpdateUser} from '../../../store/thunks/user'

class PhoneForm extends React.Component {
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
      areaCode: "",
      numberBody: ""
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const areaCode = this.state.areaCode;
    const numberBody = this.state.numberBody;
    const phoneNumber =
        "+" + "1" + areaCode + numberBody
    this.props.attemptUpdateUser({ phoneNumber });
=======
      areaCode: '',
      numberBody: ''
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    const areaCode = this.state.areaCode
    const numberBody = this.state.numberBody
    const phoneNumber = '+' + '1' + areaCode + numberBody
    this.props.attemptUpdateUser({phoneNumber})
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
  }

  render() {
    return (
      <div>
        <h2>Add Contact Number</h2>
        <form onSubmit={this.handleSubmit}>
          {/* <input
          //   id="autocomplete" <<< try to implement googlemaps api
            name={"countryCode"}
            value={this.state.countryCode}
            placeholder={"Country Code (1)"}
            onChange={this.handleChange}
          /> */}
          <input
<<<<<<< HEAD
            name={"areaCode"}
            value={this.state.areaCode}
            placeholder={"Area Code"}
=======
            name="areaCode"
            value={this.state.areaCode}
            placeholder="Area Code"
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
            onChange={this.handleChange}
            required
          />
          <input
<<<<<<< HEAD
            name={"numberBody"}
            value={this.state.numberBody}
            placeholder={"Phone Number"}
=======
            name="numberBody"
            value={this.state.numberBody}
            placeholder="Phone Number"
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

export default connect(null, mapDispatchToProps)(PhoneForm);
=======
    )
  }
}

const mapDispatchToProps = dispatch => ({
  attemptUpdateUser: userDetails => dispatch(attemptUpdateUser(userDetails))
})

export default connect(null, mapDispatchToProps)(PhoneForm)
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
