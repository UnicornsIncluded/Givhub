import io from 'socket.io-client'
const socket = io(window.location.origin)

socket.on('connect', (banana) => {
  console.log('Connected!!!!!!', banana)
})

// grabbing the emit from serverside
socket.on('banana', () => {
  // can put whatever front end logic we need  
  const courierTitle = document.getElementById('courierTitle')
  if (courierTitle) {
    courierTitle.innerText = "Order ready for pickup!"
  }
})

export default socket
