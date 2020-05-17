<<<<<<< HEAD
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const database = mongoose.connect(process.env.DATABASE_URL, options)
  .then(() => console.log('Connected to database.'))
  .catch(err => console.error('Error connecting to database:', err.message));

module.exports = database;
=======
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const database = mongoose
  .connect(process.env.DATABASE_URL, options)
  .then(() => console.log('Connected to database.'))
  .catch(err => console.error('Error connecting to database:', err.message))

module.exports = database
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
