import axios from 'axios'
import {push} from 'connected-react-router'
import {snakeToCamelCase} from 'json-style-converter/es5'
import Notifications from 'react-notification-system-redux'

import {postRegister, postLogout} from '../../api/auth'
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

export const attemptRegister = newUser => dispatch =>
  postRegister(newUser)
    .then(data => {
      dispatch(
        Notifications.success({
          title: 'Success!',
          message: data.message,
          position: 'tr',
          autoDismiss: 3
        })
      )
      console.log(newUser)
      return dispatch(attemptLogin(newUser))
    })
    .then(() => dispatch(push('/settings')))
    .catch(dispatchError(dispatch))

export const attemptLogout = () => dispatch =>
  postLogout()
    .then(data => {
      dispatch(logout())
      dispatch(
        Notifications.success({
          title: 'Success!',
          message: data.message,
          position: 'tr',
          autoDismiss: 3
        })
      )
      dispatch(push('/login'))
      return data
    })
    .catch(dispatchError(dispatch))
