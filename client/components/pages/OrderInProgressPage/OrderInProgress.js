import React, { useEffect } from "react";
import { connect } from "react-redux";
import Receipt from '../../molecules/Receipt/Receipt'
import MapboxCourier from "../../molecules/Map/Mapbox_Courier";
import MapboxDonor from "../../molecules/Map/Mapbox_Donor";
import { attemptGetLinkedUser } from "../../../store/thunks/user";


export class OrderInProgressPage extends React.Component {
  componentDidMount() {
    console.log('ORDERINPROGRESS PROPS', this.props)
    this.props.attemptGetLinkedUser(this.props.user.linkedUser)
  }
  componentDidUpdate() {
    // console.log('UPDATED COURIER PROPS', this.props)
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
            {this.props.user.userType == "donor" ? <MapboxDonor history={this.props.history} /> : <MapboxCourier history={this.props.history} />}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    attemptGetLinkedUser: (linkedUserId) =>
      dispatch(attemptGetLinkedUser(linkedUserId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderInProgressPage);
