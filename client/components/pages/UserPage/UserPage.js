import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
// import { push } from "connected-react-router";
// import * as R from "ramda";
import Button from 'react-bootstrap/Button'
import {
  updateUserCourier,
  getLinkedUser,
  getCouriers,
  getUser
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
  }

  componentDidMount() {
    this.props.getCouriers()
    this.props.getCartItems(this.props.match.params.username)
  }
  handleDonateChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleDonoSubmit() {
    const newCartItem = {}
    newCartItem.name = this.state.donating
    this.props.addToCart(newCartItem, this.props.match.params.username)
  }
  handleClick = () => {
    // Need to add if condition to determine if courier already has job
    // Also need to clear linkedUser and linked address from courier when "delivered is pressed so above if condition can work"
    const donorAddress = this.props.user.address
    randomCourierIndex = Math.floor(Math.random() * this.props.couriers.length)
    courier = this.props.couriers[randomCourierIndex].user
    donor = this.props.user.user
    linkedUserId = courier

    // make not hard coded
    this.props
      .getLinkedUser(courier)
      .then(() => this.props.getUser())
      .then(() =>
        axios.post('/sms', {
          message: 'You have a new job! Please check it out on Givhub',
          to: this.props.linkedUser.phoneNumber
        })
      )
      .then(() =>
        axios.post('/sms', {
          message:
            "We've found you a courier and will let you know when they will be on their way!",
          to: this.props.userCart.phoneNumber
        })
      )
      .then(this.props.updateUserCourier(courier, donor, donorAddress))
      .then(() =>
        this.props.history.push(`/${this.props.match.params.username}/oip`)
      )
  }

  handleDelete = (username, item) => {
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
                  id="addButton"
                  type="success"
                  label="Add"
                  size="lg"
                  disabled={
                    this.state.donating.match(/^\s*$/) !== null ||
                    this.state.donating.match(/[0-9]/) !== null ||
                    this.state.donating.match(/\W/) !== null
                  }
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
                      <div key={id}>
                        <li>
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
              id="tealButton"
              // variant="success"
              size="lg"
              onClick={() => this.handleClick()}
              // onClick={() => this.handleRedirect()}
            >
              Donate Now!
            </Button>
          </div>
          {Array.isArray(this.props.linkedUser) == false &&
          courierInfo.user === donorInfo.linkedUser &&
          courierInfo.linkedUser === donorInfo.user ? (
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
  return {
    user: state.user,
    userCart: state.userCart,
    couriers: state.couriers,
    linkedUser: state.linkedUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateUserCourier: (courier, donor, address) =>
      dispatch(updateUserCourier(courier, donor, address)),
    getLinkedUser: () => dispatch(getLinkedUser(linkedUserId)),
    getCartItems: username => {
      dispatch(fetchCart(username))
    },
    getCouriers: () => dispatch(getCouriers()),
    addToCart: (nameOfItem, username) =>
      dispatch(addToCart(nameOfItem, username)),
    removeFromCart: (username, item) =>
      dispatch(removeFromCart(username, item)),
    getUser: () => dispatch(getUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
