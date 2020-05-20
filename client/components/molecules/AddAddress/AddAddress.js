import React from 'react'
import {connect} from 'react-redux'
import {attemptUpdateUser} from '../../../store/thunks/user'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Col} from 'react-bootstrap'

class AddressForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  initialState() {
    return {
      street_address: '',
      street_address2: '',
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
    const streetAddress2 = this.state.street_address2
    const city = this.state.city
    const state = this.state.state
    const zipcode = this.state.zip_code
    if (streetAddress2.length > 0) {
      const address =
        streetAddress +
        ' ' +
        streetAddress2 +
        ' ' +
        city +
        ' ' +
        state +
        ' ' +
        zipcode
      this.props.attemptUpdateUser({address})
    } else {
      const address = streetAddress + ' ' + city + ' ' + state + ' ' + zipcode
      this.props.attemptUpdateUser({address})
    }
  }

  render() {
    return (
      <div>
        <h2>Add Pickup Address</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="street_address"
              value={this.state.street_address}
              placeholder="1234 Main St."
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              name="street_address2"
              value={this.state.street_address2}
              onChange={this.handleChange}
              placeholder="Apartment, studio, or floor"
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                name="city"
                value={this.state.city}
                placeholder="City"
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                name="state"
                value={this.state.state}
                placeholder="State"
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                name="zip_code"
                value={this.state.zip_code}
                placeholder="Zipcode"
                onChange={this.handleChange}
                required
              />
            </Form.Group>
          </Form.Row>
          <Button id="tealButton" type="submit" onSubmit={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  attemptUpdateUser: userDetails => dispatch(attemptUpdateUser(userDetails))
})

export default connect(null, mapDispatchToProps)(AddressForm)
