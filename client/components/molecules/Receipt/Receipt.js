import React from 'react'
import {connect} from 'react-redux'
// import { push } from "connected-react-router";
// import * as R from "ramda";
import {
  fetchCart,
  addToCart,
  removeFromCart
} from '../../../store/reducers/userCart'
import Box from '../../molecules/Box'

export class Receipt extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.username
    }
  }

  componentDidMount() {
    this.props.getCartItems(this.state.username)
  }

  render() {
    let userType = this.props.user.userType
    return (
      <div className="welcome-page page">
        <div className="section">
          <div className="container">
            <div className="orderSummary">
              <ul>
                {userType === 'donor' ? (
                  this.props.userCart._id ? (
                    this.props.userCart.donationCart.items.map(
                      (item, index) => {
                        return (
                          <div key={index}>
                            <li>{item.name}</li>
                          </div>
                        )
                      }
                    )
                  ) : (
                    <li>nothing</li>
                  )
                ) : this.props.linkedUser.donationCart ? (
                  this.props.linkedUser.donationCart.items.map(
                    (item, index) => {
                      return (
                        <div key={index}>
                          <li>{item.name}</li>
                        </div>
                      )
                    }
                  )
                ) : (
                  <li>nothing</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    userCart: state.userCart,
    linkedUser: state.linkedUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCartItems: username => {
      dispatch(fetchCart(username))
    },
    addToCart: (nameOfItem, username) =>
      dispatch(addToCart(nameOfItem, username)),
    removeFromCart: (username, item) => dispatch(removeFromCart(username, item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Receipt)
