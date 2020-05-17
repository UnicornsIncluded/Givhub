<<<<<<< HEAD
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import * as R from 'ramda';
import LoginSection from '_templates/LoginSection';
import {Spacer} from '../../atoms/Spacer'

export default function LoginPage() {
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
import LoginSection from '../../templates/LoginSection'
import {Spacer} from '../../atoms/Spacer'

export default function LoginPage() {
  const dispatch = useDispatch()
  const {user} = useSelector(R.pick(['user']))

  useEffect(() => {
    if (!R.isEmpty(user)) {
      dispatch(push('/home'))
    }
  }, [])
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  return (
    <div className="login-page page">
      <Spacer />
      <LoginSection />
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}
