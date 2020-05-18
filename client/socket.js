import io from 'socket.io-client'
import {
  getLinkedUser,
  getUser,
  updateCourierLinkedDonor,
  updateUser
} from './store/thunks/user'
import store from './store'
const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!!!!!!')
})
// grabbing the emit from serverside
socket.on('clicked', data => {
  // can put whatever front end logic we need
  store.dispatch(getLinkedUser(data))
  store.dispatch(getUser())
})

socket.on('delivered', linkedUserId => {
  // can put whatever front end logic we need
  store.dispatch(updateCourierLinkedDonor(linkedUserId))
  store.dispatch(updateUser({linkedUser: null}))
})

export default socket
