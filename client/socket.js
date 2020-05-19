import io from 'socket.io-client'
import {attemptGetLinkedUser, attemptGetUser} from './store/thunks/user'
import {updateCourierLinkedDonor, attemptUpdateUser} from './store/thunks/user'
import store from './store'
const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!!!!!!')
})
// grabbing the emit from serverside
socket.on('clicked', data => {
  // can put whatever front end logic we need
  store.dispatch(attemptGetLinkedUser(data))
  store.dispatch(attemptGetUser())
})

socket.on('delivered', linkedUserId => {
  // can put whatever front end logic we need
  store.dispatch(updateCourierLinkedDonor(linkedUserId))
  store.dispatch(attemptUpdateUser({linkedUser: null}))
})

export default socket
