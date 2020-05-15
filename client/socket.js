import io from 'socket.io-client'
import { linkedUserUpdated } from './store/reducers/linkedUser'
import { updateCourierLinkedDonor } from './store/thunks/user'
import store from './store'
const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!!!!!!')
})
// grabbing the emit from serverside
socket.on('clicked', (data) => {
  // can put whatever front end logic we need   
  store.dispatch(linkedUserUpdated(data))
})

socket.on('delivered', (linkedUserId) => {
  // can put whatever front end logic we need  
  console.log("SOCKET", linkedUserId)
  store.dispatch(updateCourierLinkedDonor(linkedUserId))
})

export default socket
