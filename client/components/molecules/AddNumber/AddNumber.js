import React from 'react'
import {connect} from 'react-redux'
import {attemptUpdateUser} from '_thunks/user'

class PhoneForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.setState = this.handleSubmit.bind(this)
  }

  initialState() {
    return {
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
            name="areaCode"
            value={this.state.areaCode}
            placeholder="Area Code"
            onChange={this.handleChange}
            required
          />
          <input
            name="numberBody"
            value={this.state.numberBody}
            placeholder="Phone Number"
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

export default connect(null, mapDispatchToProps)(PhoneForm)
