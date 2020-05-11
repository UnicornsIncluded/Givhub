module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })

    // grabs 'clicked' from clientside 
    socket.on('clicked', function() {
    // emits 'clicked' back to clientside 
      console.log('clicked~~~~~~~~~');
      socket.broadcast.emit('clicked')
    });
  })
}
