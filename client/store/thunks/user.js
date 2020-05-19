import {snakeToCamelCase} from 'json-style-converter/es5'
import Notifications from 'react-notification-system-redux'
import axios from 'axios'
import {
  updatingUser,
  updatingUserCourier,
  gettingDonors,
  gettingCouriers
} from '../actions/user'
import {linkedUserUpdated} from '../reducers/linkedUser'
import io from 'socket.io-client'
const socket = io(window.location.origin)

export const getUser = () => {
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

export const getLinkedUser = linkedUserId => {
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

export const getDonors = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`/api/donors/`)
      const users = res.data
      dispatch(gettingDonors(users))
      return user
    } catch (err) {
      console.error(err)
    }
  }
}

export const getCouriers = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`/api/couriers/`)
      const users = res.data
      dispatch(gettingCouriers(users))
      return users
    } catch (err) {
      console.error(err)
    }
  }
}

export const updateUser = info => {
  return async dispatch => {
    try {
      const res = await axios.put('/api/user', info)
      dispatch(updatingUser(snakeToCamelCase(res.data.user)))
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

export const updateUserCourier = (courier, donor, donorAddress) => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/user`, {
        linkedUser: courier
      })
      await axios.put(`/api/users/${courier}`, {
        linkedUser: donor,
        address: donorAddress
      })
      dispatch(updatingUserCourier(data))
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
      console.error('ERROR updating courier linked donor', err)
    }
  }
}

export const updatePassword = passwordInfo => {
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
