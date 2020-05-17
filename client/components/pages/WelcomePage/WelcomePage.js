<<<<<<< HEAD
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import * as R from 'ramda';
import Button from 'react-bootstrap/Button'
import {Spacer} from '../../atoms/Spacer'
export default function WelcomePage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  useEffect(() => {
    if (!R.isEmpty(user)) {
      dispatch(push('/home'));
    }
  }, []);
=======
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {push} from 'connected-react-router'
import * as R from 'ramda'
import Button from 'react-bootstrap/Button'
import {Spacer} from '../../atoms/Spacer'
export default function WelcomePage() {
  const dispatch = useDispatch()
  const {user} = useSelector(R.pick(['user']))

  useEffect(() => {
    if (!R.isEmpty(user)) {
      dispatch(push('/home'))
    }
  }, [])
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  return (
    <div className="welcome-page page">
      <div className="section">
        <div className="container">
          <Spacer />
<<<<<<< HEAD
          <h1 className="title is-1">
            Welcome
          </h1>

          <Button variant="success" size="lg">Donation Ready</Button>{' '}
=======
          <h1 className="title is-1">Welcome</h1>
          <Button variant="success" size="lg">
            Donation Ready
          </Button>{' '}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
          {/* <button type="button">Donation Ready</button> */}
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}
