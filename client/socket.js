import io from 'socket.io-client'
<<<<<<< HEAD
import { attemptGetLinkedUser, attemptGetUser } from './store/thunks/user'
import { updateCourierLinkedDonor,attemptUpdateUser } from './store/thunks/user'
=======
import {attemptGetLinkedUser, attemptGetUser} from './store/thunks/user'
import {updateCourierLinkedDonor, attemptUpdateUser} from './store/thunks/user'
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
import store from './store'
const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!!!!!!')
})
// grabbing the emit from serverside
<<<<<<< HEAD
socket.on('clicked', (data) => {
  // can put whatever front end logic we need   
=======
socket.on('clicked', data => {
  // can put whatever front end logic we need
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
  console.log('clicked socket', data)
  store.dispatch(attemptGetLinkedUser(data))
  store.dispatch(attemptGetUser())
})

<<<<<<< HEAD
socket.on('delivered', (linkedUserId) => {
  // can put whatever front end logic we need  
  console.log("SOCKET", linkedUserId)
  store.dispatch(updateCourierLinkedDonor(linkedUserId))
  store.dispatch(attemptUpdateUser({ linkedUser: null }))
=======
socket.on('delivered', linkedUserId => {
  // can put whatever front end logic we need
  console.log('SOCKET', linkedUserId)
  store.dispatch(updateCourierLinkedDonor(linkedUserId))
  store.dispatch(attemptUpdateUser({linkedUser: null}))
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
})

export default socket
