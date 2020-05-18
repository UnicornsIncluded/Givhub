const express = require('express')
const {FoodBank} = require('../database/schemas')

const router = express.Router()

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const foodbanks = await FoodBank.find()
    res.status(200).send(foodbanks)
  } catch (error) {
    next(error)
  }
})
