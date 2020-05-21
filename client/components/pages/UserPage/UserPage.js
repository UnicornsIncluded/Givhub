/* eslint-disable complexity */
import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import Button from 'react-bootstrap/Button'
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
      donating: '',
      itemCount: 0
    }
    this.handleDonateChange = this.handleDonateChange.bind(this)
    this.handleDonoSubmit = this.handleDonoSubmit.bind(this)
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
  handleDonoSubmit() {
    this.setState({
      itemCount: 1
    })
    const newCartItem = {}
    newCartItem.name = this.state.donating
    this.props.addToCart(newCartItem, this.props.match.params.username)
  }
  handleClick = () => {
    const donorAddress = this.props.user.address
    randomCourierIndex = Math.floor(Math.random() * this.props.couriers.length)
    courier = this.props.couriers[randomCourierIndex].user
    donor = this.props.user.user
    linkedUserId = courier

    this.props
      .attemptGetLinkedUser(courier)
      .then(() => this.props.attemptGetUser())
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
      .then(this.props.attemptUpdateUserCourier(courier, donor, donorAddress))
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
            <div className="orderSummary">
              <ul>
                {this.props.userCart._id ? (
                  this.props.userCart.donationCart.items.map((item, id = 0) => {
                    id++
                    return (
                      <div key={id}>
                        <li>
                          <div>{item.name}</div>

                          <div id="donoSubmit">
                            <Button
                              variant="danger"
                              onClick={() =>
                                this.handleDelete(
                                  this.props.user.username,
                                  item
                                )
                              }
                            >
                              X
                            </Button>
                          </div>
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
              size="lg"
              onClick={() => this.handleClick()}
              disabled={this.state.itemCount < 1}
            >
              Donate Now!
            </Button>
          </div>
          {Array.isArray(this.props.linkedUser) === false &&
          donorInfo &&
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
    attemptUpdateUserCourier: (courier, donor, address) =>
      dispatch(attemptUpdateUserCourier(courier, donor, address)),
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
