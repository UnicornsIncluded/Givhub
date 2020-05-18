const express = require('express')
const {User} = require('../database/schemas')

const router = express.Router()

module.exports = router

router.get('/', async (req, res) => {
  await User.find({userType: 'donor'}, (err, users) => {
    if (err) {
      res.status(400).send({message: "Couldn't get users"})
    } else {
      res.send(users)
    }
  }).select('-password')
})
