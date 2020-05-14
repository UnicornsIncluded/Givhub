import io from 'socket.io-client'
import {linkedUserUpdated} from './store/reducers/linkedUser'
import {getCurrentSocket} from './store/reducers/currentSocket'
import store from './store'
const User = require("../server/database/schemas/User");
const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!!!!!!')
  store.dispatch(getCurrentSocket(socket.id))
})
// grabbing the emit from serverside
socket.on('clicked', (data) => {
  // can put whatever front end logic we need   
  store.dispatch(linkedUserUpdated(data))
})

socket.on('delivered', (linkedUserId) => {
  // can put whatever front end logic we need  
  console.log("SOCKET", linkedUserId) 
  // store.dispatch(linkedUserUpdated(data))
})

export default socket
