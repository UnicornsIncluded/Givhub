import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import * as R from 'ramda';
import Button from 'react-bootstrap/Button'
import io from 'socket.io-client'
const socket = io(window.location.origin)

export default function UserPage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  useEffect(() => {
    
    if (!R.isEmpty(user)) {
      dispatch(push('/user/1'));
    }
  }, []);
  console.log('>>>>>socket', socket)
  return (
    <div className="welcome-page page">
      <div className="section">
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <h1 id="userTitle" className="title is-1">
            Please Press Button To Alert a Courier to Pick Up Donation!
          </h1>
          {/* onClick emits 'clicked' */}
        <Button id="userButton" variant="success" size="lg" onClick = {() => {socket.emit('clicked')}}> Press Me! </Button>        </div>
      </div>
    </div>
  );
}
