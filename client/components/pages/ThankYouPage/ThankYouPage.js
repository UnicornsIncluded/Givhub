import React, { useEffect } from "react";
import { connect } from "react-redux";
import { attemptGetLinkedUser } from "../../../store/thunks/user";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export class ThankYouPage extends React.Component {
  componentDidMount() {}

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
              <h1>Thank You for your donation {this.props.user.username} !</h1>
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

export default connect(mapStateToProps)(ThankYouPage);
