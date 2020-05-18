import {snakeToCamelCase} from 'json-style-converter/es5'
import Notifications from 'react-notification-system-redux'
import axios from 'axios'
import {
  updateUser,
  updateUserCourier,
  // getLinkedUser,
  getDonors,
  getCouriers
} from '../actions/user'
import {linkedUserUpdated} from '../reducers/linkedUser'
import io from 'socket.io-client'
const socket = io(window.location.origin)
import {dispatchError} from '../../utils/api'

export const attemptGetUser = () => {
  return async dispatch => {
    try {
      const res = await axios.get('/api/user')
      dispatch(updateUser(snakeToCamelCase(res.data.user)))
      return res.data.user
    } catch (error) {
      console.error(error)
    }
  }
}

export const attemptGetLinkedUser = linkedUserId => {
  return async dispatch => {
    try {
      const res = await axios.get(`/api/users/${linkedUserId}`)
      const user = res.data
      dispatch(linkedUserUpdated(user))
      return user
    } catch (err) {
      console.error(err)
    }
  }
}

export const attemptGetDonors = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`/api/donors/`)
      const users = res.data
      dispatch(getDonors(users))
      return user
    } catch (err) {
      console.error(err)
    }
  }
}

export const attemptGetCouriers = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`/api/couriers/`)
      const users = res.data
      dispatch(getCouriers(users))
      return users
    } catch (err) {
      console.error(err)
    }
  }
}

export const attemptUpdateUser = info => {
  return async dispatch => {
    try {
      const res = await axios.put('/api/user', info)
      dispatch(updateUser(snakeToCamelCase(res.data.user)))
      dispatch(
        Notifications.success({
          title: 'Success!',
          message: res.data.message,
          position: 'tr',
          autoDismiss: 3
        })
      )
      return res.data
    } catch (error) {
      console.error(error)
    }
  }
}

export const attemptUpdateUserCourier = (courier, donor, donorAddress) => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/user`, {
        linkedUser: courier
      })
      await axios.put(`/api/users/${courier}`, {
        linkedUser: donor,
        address: donorAddress
      })
      dispatch(updateUserCourier(data))
      socket.emit('clicked', data.user.user)
    } catch (err) {
      console.error('ERROR updating courier', err)
    }
  }
}

export const updateCourierLinkedDonor = linkedUserId => {
  return async () => {
    try {
      await axios.put(`/api/users/${linkedUserId}`, {linkedUser: null})
    } catch (err) {
      next(err)
    }
  }
}

export const attemptUpdatePassword = passwordInfo => {
  return async dispatch => {
    try {
      const res = await axios.put('/api/user/password', passwordInfo)
      dispatch(
        Notifications.success({
          title: 'Success!',
          message: res.data.message,
          position: 'tr',
          autoDismiss: 3
        })
      )
      return res.data
    } catch (error) {
      console.error(error)
    }
  }
}
