<<<<<<< HEAD
import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  attemptGetLinkedUser,
  attemptGetUser
} from "../../../store/thunks/user";
import Button from "react-bootstrap/Button";
=======
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {attemptGetLinkedUser, attemptGetUser} from '../../../store/thunks/user'
import Button from 'react-bootstrap/Button'
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
import {Link} from 'react-router-dom'
import {Spacer} from '../../atoms/Spacer'
export class CourierPage extends React.Component {
  componentDidMount() {
    let linkedUserId = this.props.user.linkedUser
<<<<<<< HEAD
    this.props.attemptGetLinkedUser(linkedUserId);
    console.log("COURIER PROPS", this.props)
  }

  render() { 
=======
    this.props.attemptGetLinkedUser(linkedUserId)
    console.log('COURIER PROPS', this.props)
  }

  render() {
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
    let donorInfo = this.props.linkedUser
    let courierInfo = this.props.user
    return (
      <div className="welcome-page page">
        <div className="section">
          <div className="container">
            <Spacer />
<<<<<<< HEAD
            {courierInfo.user == donorInfo.linkedUser && courierInfo.linkedUser == donorInfo.user
            ? <div>
             <h1 id="courierTitle" className="title is-1"> {donorInfo.username} has requested a pick up! </h1>
             <Link to={`/${courierInfo.username}/oip`}><Button>See Current Order</Button></Link>
             </div>
          :<h1 id="courierTitle" className="title is-1"> Waiting for job... </h1>}
          </div>
        </div>
      </div>
    );
=======
            {courierInfo.user == donorInfo.linkedUser &&
            courierInfo.linkedUser == donorInfo.user ? (
              <div>
                <h1 id="courierTitle" className="title is-1">
                  {' '}
                  {donorInfo.username} has requested a pick up!{' '}
                </h1>
                <Link to={`/${courierInfo.username}/oip`}>
                  <Button>See Current Order</Button>
                </Link>
              </div>
            ) : (
              <h1 id="courierTitle" className="title is-1">
                {' '}
                Waiting for job...{' '}
              </h1>
            )}
          </div>
        </div>
      </div>
    )
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
  }
}

function mapStateToProps(state) {
<<<<<<< HEAD
  return { user: state.user, donors: state.donors, linkedUser: state.linkedUser};
=======
  return {user: state.user, donors: state.donors, linkedUser: state.linkedUser}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}

function mapDispatchToProps(dispatch) {
  return {
<<<<<<< HEAD
    attemptGetLinkedUser: (linkedUserId) => dispatch(attemptGetLinkedUser(linkedUserId)),
    attemptGetUser : () => dispatch(attemptGetUser())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CourierPage);
=======
    attemptGetLinkedUser: linkedUserId =>
      dispatch(attemptGetLinkedUser(linkedUserId)),
    attemptGetUser: () => dispatch(attemptGetUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourierPage)
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
