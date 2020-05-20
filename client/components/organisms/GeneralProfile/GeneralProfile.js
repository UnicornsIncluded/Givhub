import React from 'react'
import {connect} from 'react-redux'
import {attemptUpdateUser} from '../../../store/thunks/user'
import AddAddress from '../../molecules/AddAddress/AddAddress'
import AddNumber from '../../molecules/AddNumber/AddNumber'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Col} from 'react-bootstrap'

export class GeneralProfile extends React.Component {
  constructor() {
    super()
    this.state = {
      userType: '',
      areaCode: '',
      numberBody: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit = event => {
    event.preventDefault()
    let email = event.target.email.value
    let userType = event.target.userType.value
    const areaCode = this.state.areaCode
    const numberBody = this.state.numberBody
    const phoneNumber = '+' + '1' + areaCode + numberBody
    this.props.attemptUpdateUser({email, userType, phoneNumber})
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }
  render() {
    return (
      <div>
        {this.props.user.phoneNumber ? <h2>Update Info</h2> : <h2>Sign Up</h2>}
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="selectUserType">
            <Form.Label>User Type</Form.Label>
            <Form.Control
              as="select"
              name="userType"
              onChange={this.handleChange}
            >
              <option value="donor">Donor</option>
              <option value="courier">Courier</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Row>
              <Col>
                <Form.Control
                  name="areaCode"
                  value={this.state.areaCode}
                  placeholder="Area Code"
                  onChange={this.handleChange}
                  required
                />
              </Col>
              <Col>
                <Form.Control
                  name="numberBody"
                  value={this.state.numberBody}
                  placeholder="Phone Number"
                  onChange={this.handleChange}
                  required
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Button id="tealButton" type="submit">
            Submit
          </Button>
        </Form>
        <br />
        {this.props.user.userType === 'donor' ? (
          <div>
            <br />
            <AddAddress />
          </div>
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {user: state.user}
}

const mapDispatchToProps = dispatch => ({
  attemptUpdateUser: userDetails => dispatch(attemptUpdateUser(userDetails))
})

export default connect(mapStateToProps, mapDispatchToProps)(GeneralProfile)
