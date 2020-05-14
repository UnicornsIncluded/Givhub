import React from "react";
import axios from 'axios'
import { connect } from "react-redux";
// import { push } from "connected-react-router";
// import * as R from "ramda";
import Button from "react-bootstrap/Button";
import io from "socket.io-client";
import {
  attemptUpdateUserCourier,
  attemptGetLinkedUser,
  attemptGetCouriers,
} from "../../../store/thunks/user";
import {
  fetchCart,
  addToCart,
  removeFromCart,
} from "../../../store/reducers/userCart";
import Box from "../../molecules/Box";
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

const socket = io(window.location.origin);

let courier;
let linkedUserId;
let matched;
let donor;
let randomCourierIndex;
let randomCourier;
export class UserPage extends React.Component {
  constructor() {
    super();
    this.state = {
      donating: "",
    };
    this.handleDonateChange = this.handleDonateChange.bind(this);
    this.handleDonoSubmit = this.handleDonoSubmit.bind(this);
    // this.handleRedirect = this.handleRedirect.bind(this);
  }

  componentDidMount() {
    this.props.attemptGetCouriers();
    console.log("current couriers", this.props.couriers);
    console.log('componentdidmount', this.props)
    this.props.getCartItems(this.props.match.params.username);
  }
  handleDonateChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }
  handleDonoSubmit(event) {
    const newCartItem = {};
    newCartItem.name = this.state.donating;
    //palce holder for dynamic
    this.props.addToCart(newCartItem, this.props.match.params.username);
  }

  componentDidUpdate() {
    console.log('COMPONENTDIDUPDATE', this.props)
  }
  // handleRedirect = () => {
  //   //this is a hook thing
  //   useDispatch(push(`/${this.props.match.params.username}/oip`))
  // }

  handleClick = async () => {
    await axios.post('/sms',{})
    randomCourierIndex = Math.floor(Math.random() * this.props.couriers.length);
    courier = this.props.couriers[randomCourierIndex].user;
    matched = true;
    donor = this.props.user.user;
    linkedUserId = courier;
    // make not hard coded
    this.props.attemptUpdateUserCourier(courier, donor);
    // this.props.attemptGetLinkedUser(courier);
    matched = true;
    console.log("PROPS", this.props);
    
    this.props.history.push(`/${this.props.match.params.username}/oip`)
    
  };

  handleDelete = (username, item) => {
    console.log("handle delete item", item);
    this.props.removeFromCart(username, item);
  };
  

  render() {
    let courierInfo = this.props.linkedUser;
    let donorInfo = this.props.user.user;
    {console.log("courier Info", courierInfo, "donor Info", donorInfo)}
    return (
      <div className="welcome-page page">
        <div className="section">
          <div className="container">
            <br />
            <br />
            <br />
            <br />
            <h1 className="title is-1">Donation Cart</h1>
            <Box>
              <h3 className="title is-3">Donate a Food!</h3>
              <div className="field">
                <label htmlFor="username" className="label"></label>
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
                  {" "}
                  Add
                </Button>
              </div>
            </Box>
            <div className="donoList">
              <ul>
                {this.props.userCart._id ? (
                  this.props.userCart.donationCart.items.map((item, id = 0) => {
                    id++;
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
                    );
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
          {console.log(courierInfo.user, donorInfo.linkedUser, 
          courierInfo.linkedUser, donorInfo.user)}
          {Array.isArray(this.props.linkedUser) == false &&
          courierInfo.user == donorInfo.linkedUser &&
          courierInfo.linkedUser == donorInfo.user ? (
            <h2>
              {this.props.linkedUser.username} is picking up your donation
            </h2>
          ) : null}
        </div>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
