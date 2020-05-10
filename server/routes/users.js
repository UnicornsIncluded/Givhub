const express = require('express');
const { User } = require('../database/schemas');

const router   = express.Router();

module.exports = router;

router.get('/:username/cart', async (req, res, next) => {
    try {
      const userData = await User.find({username: req.params.username})

      res.json(userData[0])
    } catch (err) {
      next(err)
    }
  }
)
router.put(':username/cart/:userId', async (req, res, next) => {
  
  try {
    User.findByIdAndUpdate({_id: req.params.userId }, {items: [...items, req.body]})
  } catch (error) {
    next(err)
  }
})
router.post('/checkusername', (req, res) => {
  const username = req.body.username.toLowerCase();

  User.find({ username }, (err, users) => {
    if (err) {
      res.status(400).send({ message: 'Check username failed', err, username });
    }
    if (users && users[0]) {
      res.send({ available: false, message: 'Username exists', username });
    } else {
      res.send({ available: true, message: 'Username available', username });
    }
  });
});
