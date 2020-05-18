const {User} = require('../database/schemas')

module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    // grabs 'clicked' from clientside
    socket.on('clicked', function(data) {
      socket.broadcast.emit('clicked', data)
    })

    socket.on('pickup', function(linkedUserId) {
      socket.broadcast.emit('pickup', linkedUserId)
    })

    socket.on('delivered', function(linkedUserId) {
      socket.broadcast.emit('delivered', linkedUserId)
    })

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
  })
}
