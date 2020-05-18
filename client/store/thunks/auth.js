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
