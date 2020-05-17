<<<<<<< HEAD
const express  = require('express');
const passport = require('passport');
const { User } = require('../database/schemas');

const router = express.Router();

module.exports = router;

router.post('/register', (req, res) => {
  if (!req || !req.body || !req.body.username || !req.body.password) {
    res.status(400).send({ message: 'Username and Password required' });
  }

  req.body.username_case = req.body.username;
  req.body.username = req.body.username.toLowerCase();

  const { username } = req.body;
  const newUser = User(req.body);

  User.find({ username }, (err, users) => {
    if (err) {
      res.status(400).send({ message: 'Create user failed', err });
    }
    if (users[0]) {
      res.status(400).send({ message: 'Username exists' });
=======
const express = require('express')
const passport = require('passport')
const {User} = require('../database/schemas')

const router = express.Router()

module.exports = router

router.post('/register', (req, res) => {
  if (!req || !req.body || !req.body.username || !req.body.password) {
    res.status(400).send({message: 'Username and Password required'})
  }

  req.body.username_case = req.body.username
  req.body.username = req.body.username.toLowerCase()

  const {username} = req.body
  const newUser = User(req.body)

  User.find({username}, (err, users) => {
    if (err) {
      res.status(400).send({message: 'Create user failed', err})
    }
    if (users[0]) {
      res.status(400).send({message: 'Username exists'})
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
    }

    newUser.hashPassword().then(() => {
      newUser.save((err, savedUser) => {
        if (err || !savedUser) {
<<<<<<< HEAD
          res.status(400).send({ message: 'Create user failed', err });
        } else {
          res.send({ message: 'User created successfully', user: savedUser.hidePassword() });
        }
      });
    });

  });
});

router.post('/login', (req, res, next) => {
  req.body.username = req.body.username.toLowerCase();
  req.body.password = req.body.password.toString();
=======
          res.status(400).send({message: 'Create user failed', err})
        } else {
          res.send({
            message: 'User created successfully',
            user: savedUser.hidePassword()
          })
        }
      })
    })
  })
})

router.post('/login', (req, res, next) => {
  req.body.username = req.body.username.toLowerCase()
  req.body.password = req.body.password.toString()
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
  console.log(req.body.password)

  passport.authenticate('local', (err, user, info) => {
    if (err) {
<<<<<<< HEAD
      return next(err);
    }
    if (info && info.message === 'Missing credentials') {
      return res.status(401).send({ message: 'Missing credentials' });
    }
    if (!user) {
      return res.status(401).send(info);
=======
      return next(err)
    }
    if (info && info.message === 'Missing credentials') {
      return res.status(401).send({message: 'Missing credentials'})
    }
    if (!user) {
      return res.status(401).send(info)
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
    }

    req.login(user, err => {
      if (err) {
<<<<<<< HEAD
        res.status(401).send({ message: 'Login failed', err });
      }
      res.send({ message: 'Logged in successfully', user: user.hidePassword() });
    });

  })(req, res, next);
});
=======
        res.status(401).send({message: 'Login failed', err})
      }
      res.send({message: 'Logged in successfully', user: user.hidePassword()})
    })
  })(req, res, next)
})
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6

router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
<<<<<<< HEAD
      res.status(400).send({ message: 'Logout failed', err });
    }
    req.sessionID = null;
    req.logout();
    res.send({ message: 'Logged out successfully' });
  });
});
=======
      res.status(400).send({message: 'Logout failed', err})
    }
    req.sessionID = null
    req.logout()
    res.send({message: 'Logged out successfully'})
  })
})
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
