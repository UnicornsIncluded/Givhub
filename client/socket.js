import io from 'socket.io-client'
// const mongoose = require("mongoose");
const User = require("../server/database/schemas/User");

const socket = io(window.location.origin)

socket.on('connect', (banana) => {
  console.log('Connected!!!!!!', banana)
})
// grabbing the emit from serverside
socket.on('clicked', async (data) => {
  // can put whatever front end logic we need  
  const courierTitle = document.getElementById('courierTitle')
  if (courierTitle) {
    courierTitle.innerText = "Order ready for pickup!"
  }
})

export default socket
