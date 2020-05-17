<<<<<<< HEAD
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../database/schemas');

const Strategies = module.exports;

Strategies.local = new LocalStrategy((username, password, done) => {
  User.findOne({ username }, (err, user) => {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { message: 'Username doesn\'t exist' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect username or password' });
    }
    return done(null, user);
  });
});
=======
const LocalStrategy = require('passport-local').Strategy
const {User} = require('../database/schemas')

const Strategies = module.exports

Strategies.local = new LocalStrategy((username, password, done) => {
  User.findOne({username}, (err, user) => {
    if (err) {
      return done(err)
    }
    if (!user) {
      return done(null, false, {message: "Username doesn't exist"})
    }
    if (!user.validPassword(password)) {
      return done(null, false, {message: 'Incorrect username or password'})
    }
    return done(null, user)
  })
})
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
