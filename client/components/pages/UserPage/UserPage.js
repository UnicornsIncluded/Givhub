import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import * as R from 'ramda';
import Button from 'react-bootstrap/Button'

export default function UserPage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  useEffect(() => {
    if (!R.isEmpty(user)) {
      dispatch(push('/user/1'));
    }
  }, []);

  return (
    <div className="welcome-page page">
      <div className="section">
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <h1 className="title is-1">
            Please Press Button To Alert a Courier to Pick Up Donation!
          </h1>
        <Button variant="success" size="lg"> Press Me! </Button>        </div>
      </div>
    </div>
  );
}
