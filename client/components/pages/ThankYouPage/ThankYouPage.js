import React, { useEffect } from "react";
import { connect } from "react-redux";
import { attemptUpdateUser } from "../../../store/thunks/user";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export class ThankYouPage extends React.Component {
  componentDidMount() {
    if (this.props.user.userType == "donor") {
      this.props.attemptUpdateUser({"donationCart.items": []})
    }
  }

  render() {
    return (
      <div className="welcome-page page">
        <div className="section">
          <div className="container">
            <br />
            <br />
            <br />
            <br />
            {this.props.user.userType == "donor" ? (
              <div>
              <h1>Thank You for your donation {this.props.user.username} !</h1>
              <br />
              <h2>Your donation has been successfully delivered</h2>
              </div>
            ) : (
              <h1>Thank You for your delivery {this.props.user.username} !</h1>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

function mapDispatchToProps(dispatch) {
  return {attemptUpdateUser: (userDetails) => dispatch(attemptUpdateUser(userDetails))}
}

export default connect(mapStateToProps, mapDispatchToProps)(ThankYouPage);
