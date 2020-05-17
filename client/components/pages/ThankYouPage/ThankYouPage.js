<<<<<<< HEAD
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { attemptUpdateUser } from "../../../store/thunks/user";
=======
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {attemptUpdateUser} from '../../../store/thunks/user'
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
import {Spacer} from '../../atoms/Spacer'

export class ThankYouPage extends React.Component {
  componentDidMount() {
<<<<<<< HEAD
    if (this.props.user.userType == "donor") {
      this.props.attemptUpdateUser({"donationCart.items": []})
=======
    if (this.props.user.userType == 'donor') {
      this.props.attemptUpdateUser({'donationCart.items': []})
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
    }
  }

  render() {
    return (
      <div className="welcome-page page">
        <div className="section">
          <div className="container">
            <Spacer />
<<<<<<< HEAD
            {this.props.user.userType == "donor" ? (
              <div>
              <h1>Thank You for your donation {this.props.user.username} !</h1>
              <br />
              <h2>Your donation has been successfully delivered</h2>
=======
            {this.props.user.userType == 'donor' ? (
              <div>
                <h1>
                  Thank You for your donation {this.props.user.username} !
                </h1>
                <br />
                <h2>Your donation has been successfully delivered</h2>
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
              </div>
            ) : (
              <h1>Thank You for your delivery {this.props.user.username} !</h1>
            )}
          </div>
        </div>
      </div>
<<<<<<< HEAD
    );
=======
    )
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
  }
}

function mapStateToProps(state) {
<<<<<<< HEAD
  return { user: state.user };
}

function mapDispatchToProps(dispatch) {
  return {attemptUpdateUser: (userDetails) => dispatch(attemptUpdateUser(userDetails))}
}

export default connect(mapStateToProps, mapDispatchToProps)(ThankYouPage);
=======
  return {user: state.user}
}

function mapDispatchToProps(dispatch) {
  return {
    attemptUpdateUser: userDetails => dispatch(attemptUpdateUser(userDetails))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThankYouPage)
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
