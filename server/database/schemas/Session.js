<<<<<<< HEAD
const mongoose = require('mongoose');

const { Schema } = mongoose;
=======
const mongoose = require('mongoose')

const {Schema} = mongoose
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

const sessionSchema = new Schema({
  session: String,
  session_id: String,
<<<<<<< HEAD
  expire: Date,
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
=======
  expire: Date
})

const Session = mongoose.model('Session', sessionSchema)

module.exports = Session
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
