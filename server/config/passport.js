<<<<<<< HEAD
const passport    = require('passport');
const session     = require('express-session');
const MongoStore  = require('connect-mongo')(session);
const uuid        = require('uuid');
const mongoose    = require('mongoose');

const Strategies  = require('./strategies');
const { User }    = require('../database/schemas');
=======
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const uuid = require('uuid')
const mongoose = require('mongoose')

const Strategies = require('./strategies')
const {User} = require('../database/schemas')
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

module.exports = app => {
  const sessionConfig = {
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
<<<<<<< HEAD
      collection: 'sessions',
    }),
    genid: () => uuid.v4(),
    cookie: { secure: false },
    secret: 'mern',
    resave: false,
    saveUninitialized: false,
  };

  app.use(session(sessionConfig));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) =>
    User.findById({ _id: id })
      .then(user => done(null, user))
      .catch(err => console.warn(`err at deserialize: ${err}`)));

  passport.use(Strategies.local);
};
=======
      collection: 'sessions'
    }),
    genid: () => uuid.v4(),
    cookie: {secure: false},
    secret: 'mern',
    resave: false,
    saveUninitialized: false
  }

  app.use(session(sessionConfig))
  app.use(passport.initialize())
  app.use(passport.session())

  passport.serializeUser((user, done) => done(null, user.id))

  passport.deserializeUser((id, done) =>
    User.findById({_id: id})
      .then(user => done(null, user))
      .catch(err => console.warn(`err at deserialize: ${err}`))
  )

  passport.use(Strategies.local)
}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
