const { User } = require("../database/schemas");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log(
      `A socket connection to the server has been made: ${socket.id}`
    );

    // grabs 'clicked' from clientside
    socket.on("clicked", function (data) {
      console.log("clicked", data);
      // emits 'linkedUser' back to clientside
      // if donor triggered event, how do we find the courier?
      // what is courier's socketid?
      // keep track of socket id & userid --> maybe keep track of socketid in the db
      // console.log("COURIER INFO", courier);
      // const currentCourier =  await User.findOne({ user: courier })
      // console.log('current user', currentCourier)
      // let socketId = currentCourier.socketId
      // console.log('current socket', socketId)
      // const socketId = currentCourier.socketId
      // io.to(socketId).emit('clicked')
      socket.broadcast.emit("clicked", data);
    });

    socket.on("disconnect", () => {
      console.log(`Connection ${socket.id} has left the building`);
    });
  });
};
