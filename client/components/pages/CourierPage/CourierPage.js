import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getLinkedUser, getUser} from '../../../store/thunks/user'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import {Spacer} from '../../atoms/Spacer'
export class CourierPage extends React.Component {
  componentDidMount() {
    let linkedUserId = this.props.user.linkedUser
    this.props.getLinkedUser(linkedUserId)
  }

  render() {
    let donorInfo = this.props.linkedUser
    let courierInfo = this.props.user
    return (
      <div className="welcome-page page">
        <div className="section">
          <div className="container">
            <Spacer />
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
  }
}

function mapStateToProps(state) {
  return {user: state.user, donors: state.donors, linkedUser: state.linkedUser}
}

function mapDispatchToProps(dispatch) {
  return {
    getLinkedUser: linkedUserId => dispatch(getLinkedUser(linkedUserId)),
    getUser: () => dispatch(getUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourierPage)
