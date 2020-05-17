<<<<<<< HEAD
import { push } from 'connected-react-router';
import { snakeToCamelCase } from 'json-style-converter/es5';
import Notifications from 'react-notification-system-redux';

import { postRegister, postLogin, postLogout } from '_api/auth';
import { login, logout } from '_actions/user';

import { dispatchError } from '_utils/api';

export const attemptLogin = user => dispatch =>
  postLogin(user)
    .then(data => {
      dispatch(login(snakeToCamelCase(data.user)));
      dispatch(Notifications.success({
        title: 'Success!',
        message: data.message,
        position: 'tr',
        autoDismiss: 3,
      }));
      dispatch(push('/home'));
      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptRegister = newUser => dispatch =>
  postRegister(newUser)
    .then(data => {
      dispatch(Notifications.success({
        title: 'Success!',
        message: data.message,
        position: 'tr',
        autoDismiss: 3,
      }));
      return dispatch(attemptLogin(newUser));
    })
    .then(() => dispatch(push('/settings')))
    .catch(dispatchError(dispatch));

export const attemptLogout = () => dispatch =>
  postLogout()
    .then(data => {
      dispatch(logout());
      dispatch(Notifications.success({
        title: 'Success!',
        message: data.message,
        position: 'tr',
        autoDismiss: 3,
      }));
      dispatch(push('/login'));
      return data;
    })
    .catch(dispatchError(dispatch));
=======
import axios from 'axios'
import {push} from 'connected-react-router'
import {snakeToCamelCase} from 'json-style-converter/es5'
import Notifications from 'react-notification-system-redux'

import {login, logout} from '../actions/user'

import {dispatchError} from '../../utils/api'

export const attemptLogin = user => {
  return async dispatch => {
    try {
      const res = await axios.post('/api/auth/login', user)
      dispatch(login(snakeToCamelCase(res.data.user)))
      dispatch(
        Notifications.success({
          title: 'Success!',
          message: res.data.message,
          position: 'tr',
          autoDismiss: 3
        })
      )
      dispatch(push('/home'))
    } catch (error) {
      console.error(error)
    }
  }
}

export const attemptRegister = user => {
  return async dispatch => {
    try {
      const res = await axios.post('/api/auth/register', user)
      console.log(res.data.user)
      dispatch(
        Notifications.success({
          title: 'Success!',
          message: res.data.message,
          position: 'tr',
          autoDismiss: 3
        })
      )
      await dispatch(attemptLogin(user))
      dispatch(push('/settings'))
    } catch (error) {
      console.error(error)
    }
  }
}

export const attemptLogout = () => {
  return async dispatch => {
    try {
      const res = await axios.post('/api/auth/logout')
      dispatch(logout())
      dispatch(
        Notifications.success({
          title: 'Success!',
          message: res.data.message,
          position: 'tr',
          autoDismiss: 3
        })
      )
      dispatch(push('/login'))
    } catch (error) {
      console.error(error)
    }
  }
}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
