import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  attemptGetLinkedUser,
  updateStoredSocket
} from "../../../store/thunks/user";
import Receipt from '../../molecules/Receipt/Receipt'
import MapboxCourier from "../../molecules/Map/Mapbox_Courier";
import MapboxDonor from "../../molecules/Map/Mapbox_Donor";


export class OrderInProgressPage extends React.Component {
  componentDidMount() {
    // let linkedUserId = this.props.user.linkedUser
    // this.props.attemptGetLinkedUser(linkedUserId);
    // console.log("COURIER PROPS", this.props)
    console.log('ORDERINPROGRESS PROPS', this.props)
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
            <Receipt username={usernameProp}/>
            {console.log(this.props)}
            {this.props.user.userType == "donor" ? <MapboxDonor /> : <MapboxCourier />}
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
}

export default connect(mapStateToProps)(OrderInProgressPage);
