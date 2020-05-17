<<<<<<< HEAD
import React from "react";
import { connect } from "react-redux";
// import { push } from "connected-react-router";
// import * as R from "ramda";
import Button from "react-bootstrap/Button";
import io from "socket.io-client";
import { Spacer } from "../../atoms/Spacer"
import { attemptGetLinkedUser } from "../../../store/thunks/user";
import {
  fetchCart,
  addToCart,
  removeFromCart,
} from "../../../store/reducers/userCart";
import Box from "../../molecules/Box";

export class Receipt extends React.Component {
  constructor(props) {
    super(props);
    console.log("IN THE THE SUPER", props);
    this.state = {
      donating: "",
      username: this.props.username,
    };
  }

  componentDidMount() {
    let linkedUserId = this.props.user.linkedUser;
    // console.log("THIS IS THE PROPS", this.props)
    this.props.getCartItems(this.state.username);
  }

  componentDidUpdate() {
    console.log("THIS IS THE PROPS", this.props);
=======
import React from 'react'
import {connect} from 'react-redux'
// import { push } from "connected-react-router";
// import * as R from "ramda";
import Button from 'react-bootstrap/Button'
import io from 'socket.io-client'
import {Spacer} from '../../atoms/Spacer'
import {attemptGetLinkedUser} from '../../../store/thunks/user'
import {
  fetchCart,
  addToCart,
  removeFromCart
} from '../../../store/reducers/userCart'
import Box from '../../molecules/Box'

export class Receipt extends React.Component {
  constructor(props) {
    super(props)
    console.log('IN THE THE SUPER', props)
    this.state = {
      donating: '',
      username: this.props.username
    }
  }

  componentDidMount() {
    let linkedUserId = this.props.user.linkedUser
    // console.log("THIS IS THE PROPS", this.props)
    this.props.getCartItems(this.state.username)
  }

  componentDidUpdate() {
    console.log('THIS IS THE PROPS', this.props)
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
  }

  render() {
    // let courierInfo = this.props.linkedUser;
    // let donorInfo = this.props.user.user;
    // {console.log("courier Info", courierInfo, "donor Info", donorInfo)}
<<<<<<< HEAD
    let userType = this.props.user.userType;
=======
    let userType = this.props.user.userType
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
    return (
      <div className="welcome-page page">
        <div className="section">
          <div className="container">
            <Spacer />
            <div className="orderSummary">
              <ul>
<<<<<<< HEAD
                {userType == "donor" ? (
=======
                {userType == 'donor' ? (
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
                  this.props.userCart._id ? (
                    this.props.userCart.donationCart.items.map(
                      (item, index) => {
                        return (
                          <div>
                            <li key={index}>{item.name}</li>
                          </div>
<<<<<<< HEAD
                        );
                      }
                    )
                  ) : (
                      <li>nothing</li>
                    )
                ) : this.props.linkedUser.donationCart ? (
                  this.props.linkedUser.donationCart.items.map((item, index) => {
                    return (
                      <div>
                        <li key={index}>{item.name}</li>
                      </div>
                    );
                  })
                ) : (
                      <li>nothing</li>
                    )}
=======
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
                        <div>
                          <li key={index}>{item.name}</li>
                        </div>
                      )
                    }
                  )
                ) : (
                  <li>nothing</li>
                )}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
              </ul>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    );
    s;
=======
    )
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
  }
}

function mapStateToProps(state) {
<<<<<<< HEAD
  console.log("mapping");
=======
  console.log('mapping')
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
  return {
    user: state.user,
    userCart: state.userCart,
    couriers: state.couriers,
<<<<<<< HEAD
    linkedUser: state.linkedUser,
  };
}

function mapDispatchToProps(dispatch) {
  console.log("dispatching");
  return {
    attemptUpdateUserCourier: () =>
      dispatch(attemptUpdateUserCourier(courier, donor)),
    getCartItems: (username) => {
      dispatch(fetchCart(username));
=======
    linkedUser: state.linkedUser
  }
}

function mapDispatchToProps(dispatch) {
  console.log('dispatching')
  return {
    attemptUpdateUserCourier: () =>
      dispatch(attemptUpdateUserCourier(courier, donor)),
    getCartItems: username => {
      dispatch(fetchCart(username))
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
    },
    attemptGetCouriers: () => dispatch(attemptGetCouriers()),
    addToCart: (nameOfItem, username) =>
      dispatch(addToCart(nameOfItem, username)),
<<<<<<< HEAD
    removeFromCart: (username, item) =>
      dispatch(removeFromCart(username, item))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Receipt);
=======
    removeFromCart: (username, item) => dispatch(removeFromCart(username, item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Receipt)
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
