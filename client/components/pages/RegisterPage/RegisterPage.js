<<<<<<< HEAD
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import * as R from 'ramda';
import Register from '_templates/RegisterSection';
import {Spacer} from '../../atoms/Spacer'

export default function RegisterPage() {
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
import Register from '../../templates/RegisterSection'
import {Spacer} from '../../atoms/Spacer'

export default function RegisterPage() {
  const dispatch = useDispatch()
  const {user} = useSelector(R.pick(['user']))

  useEffect(() => {
    if (!R.isEmpty(user)) {
      dispatch(push('/home'))
    }
  }, [])
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

  return (
    <div className="register-page page">
      <Spacer />
      <Register />
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
}
