import React from "react";
import { connect } from "react-redux";
// import { push } from "connected-react-router";
// import * as R from "ramda";
import Button from "react-bootstrap/Button";
import io from "socket.io-client";
// import {
//   attemptUpdateUserCourier,
//   attemptGetLinkedUser,
//   attemptGetCouriers,
// } from "../../../store/thunks/user";
import {
  fetchCart,
  addToCart,
  removeFromCart,
} from "../../../store/reducers/userCart";
import Box from "../../molecules/Box";

export class Receipt extends React.Component {
  constructor(props) {
    super(props);
    console.log('IN THE THE SUPER', props)
    this.state = {
      donating: "",
      username: this.props.username
    };
  }

  componentDidMount() {
      console.log("THIS IS THE PROPS", this.state)
    this.props.getCartItems(this.state.username);
  }

  handleDonateChange(event) {

  }

  handleDonoSubmit(event) {
    
  }

  componentDidUpdate() {
    
  }

  handleClick = () => {
 
  };

  handleDelete = (username, item) => {

  };

  render() {
    // let courierInfo = this.props.linkedUser;
    // let donorInfo = this.props.user.user;
    // {console.log("courier Info", courierInfo, "donor Info", donorInfo)}
    return (
      <div className="welcome-page page">
        <div className="section">
          <div className="container">
            <br />
            <br />
            <br />
            <br />
            <div className="orderSummary">
              <ul>
                {this.props.userCart._id ? (
                  this.props.userCart.donationCart.items.map((item, index) => {
                    return (
                      <div>
                        <li key={index}>
                          {item.name}
                        </li>
                      </div>
                    );
                  })
                ) : (
                  <li>nothing</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );s
  }
}

function mapStateToProps(state) {
  console.log("mapping");
  return {
    user: state.user,
    userCart: state.userCart,
    couriers: state.couriers,
    linkedUser: state.linkedUser,
  };
}

function mapDispatchToProps(dispatch) {
  console.log("dispatching");
  return {
    attemptUpdateUserCourier: () =>
      dispatch(attemptUpdateUserCourier(courier, donor)),
    attemptGetLinkedUser: () => dispatch(attemptGetLinkedUser(linkedUserId)),
    getCartItems: (username) => {
      dispatch(fetchCart(username));
    },
    attemptGetCouriers: () => dispatch(attemptGetCouriers()),
    addToCart: (nameOfItem, username) =>
      dispatch(addToCart(nameOfItem, username)),
    removeFromCart: (username, item) =>
      dispatch(removeFromCart(username, item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Receipt);
