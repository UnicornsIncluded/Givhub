import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
// import { push } from "connected-react-router";
// import * as R from "ramda";
import Button from 'react-bootstrap/Button'
import io from 'socket.io-client'
import {
  attemptUpdateUserCourier,
  attemptGetLinkedUser,
  attemptGetCouriers,
  attemptGetUser
} from '../../../store/thunks/user'
import {
  fetchCart,
  addToCart,
  removeFromCart
} from '../../../store/reducers/userCart'
import Box from '../../molecules/Box'
import {Spacer} from '../../atoms/Spacer'

let courier
let linkedUserId
let matched
let donor
let randomCourierIndex
let randomCourier
export class UserPage extends React.Component {
  constructor() {
    super()
    this.state = {
      donating: ''
    }
    this.handleDonateChange = this.handleDonateChange.bind(this)
    this.handleDonoSubmit = this.handleDonoSubmit.bind(this)
    // this.handleRedirect = this.handleRedirect.bind(this);
  }

  componentDidMount() {
    this.props.attemptGetCouriers()
    this.props.getCartItems(this.props.match.params.username)
  }
  handleDonateChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleDonoSubmit(event) {
    const newCartItem = {}
    newCartItem.name = this.state.donating
    //palce holder for dynamic
    this.props.addToCart(newCartItem, this.props.match.params.username)
  }
  handleClick = () => {
    randomCourierIndex = Math.floor(Math.random() * this.props.couriers.length)
    courier = this.props.couriers[randomCourierIndex].user
    donor = this.props.user.user
    linkedUserId = courier
    // console.log('PHONE NUM PROPS', this.props.user)
    // make not hard coded
    this.props
      .attemptUpdateUserCourier(courier, donor)
      .then(() => this.props.attemptGetLinkedUser(courier))
      .then(() => this.props.attemptGetUser())
      .then(() =>
        axios.post('/sms', {
          message: 'You have a new job! Please check it out on Givhub',
          to: this.props.linkedUser.phoneNumber
        })
      )
      .then(() =>
        axios.post('/sms', {
          message: 'Your courier is on their way to pick up your donation!',
          to: this.props.userCart.phoneNumber
        })
      )
      .then(
        () =>
          this.props.history.push(`/${this.props.match.params.username}/oip`)
        // console.log('this is after the first .then')
      )

    console.log('PROPS', this.props)
  }

  handleDelete = (username, item) => {
    console.log('handle delete item', item)
    this.props.removeFromCart(username, item)
  }

  render() {
    let courierInfo = this.props.linkedUser
    let donorInfo = this.props.user.user
    return (
      <div className="welcome-page page">
        <div className="section">
          <div className="container">
            <Spacer />
            <h1 className="title is-1">Donation Cart</h1>
            <Box>
              <h3 className="title is-3">Donate a Food!</h3>
              <div className="field">
                <label htmlFor="username" className="label" />
                <p className="control has-icons-right">
                  <input
                    id="donating"
                    placeholder="Can of beans.."
                    type="donating"
                    value={this.state.donating}
                    onChange={this.handleDonateChange}
                  />
                </p>
              </div>
              <div className="has-text-right">
                <Button
                  type="success"
                  label="Add"
                  size="lg"
                  onClick={() => this.handleDonoSubmit()}
                >
                  {' '}
                  Add
                </Button>
              </div>
            </Box>
            <div className="donoList">
              <ul>
                {this.props.userCart._id ? (
                  this.props.userCart.donationCart.items.map((item, id = 0) => {
                    id++
                    return (
                      <div>
                        <li key={id}>
                          {item.name}
                          <br />
                          <Button
                            variant="danger"
                            onClick={() =>
                              this.handleDelete(this.props.user.username, item)
                            }
                          >
                            X
                          </Button>
                        </li>
                      </div>
                    )
                  })
                ) : (
                  <li>nothing</li>
                )}
              </ul>
            </div>
            <Button
              variant="success"
              size="lg"
              onClick={() => this.handleClick()}
              // onClick={() => this.handleRedirect()}
            >
              Donate Now!
            </Button>
          </div>
          {console.log(
            courierInfo.user,
            donorInfo.linkedUser,
            courierInfo.linkedUser,
            donorInfo.user
          )}
          {Array.isArray(this.props.linkedUser) == false &&
          courierInfo.user == donorInfo.linkedUser &&
          courierInfo.linkedUser == donorInfo.user ? (
            <h2>
              {this.props.linkedUser.username} is picking up your donation
            </h2>
          ) : null}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('mapping')
  return {
    user: state.user,
    userCart: state.userCart,
    couriers: state.couriers,
    linkedUser: state.linkedUser
  }
}

function mapDispatchToProps(dispatch) {
  console.log('dispatching')
  return {
    attemptUpdateUserCourier: () =>
      dispatch(attemptUpdateUserCourier(courier, donor)),
    attemptGetLinkedUser: () => dispatch(attemptGetLinkedUser(linkedUserId)),
    getCartItems: username => {
      dispatch(fetchCart(username))
    },
    attemptGetCouriers: () => dispatch(attemptGetCouriers()),
    addToCart: (nameOfItem, username) =>
      dispatch(addToCart(nameOfItem, username)),
    removeFromCart: (username, item) =>
      dispatch(removeFromCart(username, item)),
    attemptGetUser: () => dispatch(attemptGetUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
