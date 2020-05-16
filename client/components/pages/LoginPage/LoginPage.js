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

  return (
    <div className="login-page page">
      <Spacer />
      <LoginSection />
    </div>
  );
}
