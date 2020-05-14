import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  attemptGetLinkedUser,
  updateStoredSocket
} from "../../../store/thunks/user";
import Receipt from '../../molecules/Receipt/Receipt'


export class OrderInProgressPage extends React.Component {
  componentDidMount() {
    // let linkedUserId = this.props.user.linkedUser
    // this.props.attemptGetLinkedUser(linkedUserId);
    // console.log("COURIER PROPS", this.props)
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
            <br />
            <br />
            <h1>Current Order Details Here</h1>
            {/* Want to have a spot here for the map */}
            {/* Maybe a timelinve image that gets updated here */}
            {/* Add receipt here */}
            <Receipt username={usernameProp}/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
//   return { user: state.user, donors: state.donors, linkedUser: state.linkedUser};
}

function mapDispatchToProps(dispatch) {
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderInProgressPage);
