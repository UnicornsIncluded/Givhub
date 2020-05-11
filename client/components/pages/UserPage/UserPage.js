import React from "react";
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
import { fetchCart, addToCart } from "../../../store/reducers/userCart";
import Box from "../../molecules/Box";

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
    this.handleDonoSubmit = this.handleDonoSubmit.bind(this)
  }

  componentDidMount() {
    this.props.attemptGetCouriers();
    console.log("current couriers", this.props.couriers);
    this.props.getCartItems("gigi@email.com");
  }
  handleDonateChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }
  handleDonoSubmit(event) {
    const newCartItem = {}
    newCartItem.name = this.state.donating
    //palce holder for dynamic 
    this.props.addToCart(newCartItem, "gigi@email.com")
  }
  
  handleClick = () => {
    randomCourierIndex = Math.floor(Math.random() * (this.props.couriers.length))
    courier = this.props.couriers[randomCourierIndex].user
    matched = true;
    donor = this.props.user.user;
    linkedUserId = courier;
    // make not hard coded
    this.props.attemptUpdateUserCourier(courier, donor);
    this.props.attemptGetLinkedUser(courier);
    console.log("PROPS", this.props.user.username);
    socket.emit("clicked");
  };


  render() {
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
                <Button type="success" label="Add" size="lg"
                onClick={() => this.handleDonoSubmit()}>
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
                    return <li key={id}>{item.name}</li>;
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
            >
              {" "}
              Donate Now!{" "}
            </Button>{" "}
          </div>
          {matched == true ? (
            <h2>{this.props.user.username} is picking up your donation</h2>
          ) : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapping");
  return { user: state.user, userCart: state.userCart, couriers: state.couriers };
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
    addToCart: (nameOfItem, username) => dispatch(addToCart(nameOfItem, username))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
