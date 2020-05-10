import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import * as R from 'ramda';
import Button from 'react-bootstrap/Button'

export default function CourierPage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  useEffect(() => {
    if (!R.isEmpty(user)) {
      dispatch(push('/courier/2'));
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
          <h1 id="courierTitle" className="title is-1">
            Waiting for job...
          </h1>
          {/* <Button variant="success" size="lg"> Press Me! </Button> */}
        </div>
      </div>
    </div>
  );
}
