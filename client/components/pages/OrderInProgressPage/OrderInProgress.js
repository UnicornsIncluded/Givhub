<<<<<<< HEAD
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Receipt from "../../molecules/Receipt/Receipt";
import MapboxCourier from "../../molecules/Map/Mapbox_Courier";
import MapboxDonor from "../../molecules/Map/Mapbox_Donor";
import { attemptGetLinkedUser } from "../../../store/thunks/user";
=======
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import Receipt from '../../molecules/Receipt/Receipt'
import MapboxCourier from '../../molecules/Map/Mapbox_Courier'
import MapboxDonor from '../../molecules/Map/Mapbox_Donor'
import {attemptGetLinkedUser} from '../../../store/thunks/user'
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

export class OrderInProgressPage extends React.Component {
  componentDidMount() {
    this.props.attemptGetLinkedUser(this.props.user.linkedUser)
  }

  render() {
    let donorInfo = this.props.linkedUser
    let courierInfo = this.props.user
    let usernameProp = this.props.match.params.username
    return (
      <div className="welcome-page page">
        <div className="section">
          <div className="container">
            <br />
            <br />
            <h1>Current Order Details Here</h1>
            <Receipt username={usernameProp} />
            {console.log(this.props)}
            {this.props.user.linkedUser !== null ? (
<<<<<<< HEAD
              this.props.user.userType == "donor" ? (
                <MapboxDonor history={this.props.history} />
              ) : (
                  <MapboxCourier history={this.props.history} />
                )
            ) : (
                this.props.history.push("/thankyou")
              )}
          </div>
        </div>
      </div>
    );
=======
              this.props.user.userType == 'donor' ? (
                <MapboxDonor history={this.props.history} />
              ) : (
                <MapboxCourier history={this.props.history} />
              )
            ) : (
              this.props.history.push('/thankyou')
            )}
          </div>
        </div>
      </div>
    )
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
  }
}

function mapStateToProps(state) {
  return {
<<<<<<< HEAD
    user: state.user,
  };
=======
    user: state.user
  }
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}

function mapDispatchToProps(dispatch) {
  return {
<<<<<<< HEAD
    attemptGetLinkedUser: (linkedUserId) =>
=======
    attemptGetLinkedUser: linkedUserId =>
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
      dispatch(attemptGetLinkedUser(linkedUserId))
  }
}

<<<<<<< HEAD
export default connect(mapStateToProps, mapDispatchToProps)(OrderInProgressPage);
=======
export default connect(mapStateToProps, mapDispatchToProps)(OrderInProgressPage)
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
