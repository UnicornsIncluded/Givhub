const {green, red} = require('chalk')
const User = require('../server/database/schemas/User')
const FoodBank = require('../server/database/schemas/FoodBank')
const mongoose = require('mongoose')
require('../server/config/environment')

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// const users = [
//   new User({
//     userType: 'donor',
//     username: 'belladonor',
//     linkedUser: null,
//     firstName: 'Bella',
//     lastName: 'Hadid',
//     password: '123456',
//     address: '95 Wall Street, New York, NY 10005',
//     phoneNumber: '+19419142203',
//     email: 'bella@email.com',
//     donationCart: {
//       items: [{name: 'carrot'}, {name: 'banana'}, {name: 'bagel'}],
//       status: 'active'
//     }
//   }),
//   new User({
//     userType: 'courier',
//     username: 'gigicourier',
//     linkedUser: null,
//     firstName: 'Gigi',
//     lastName: 'Hadid',
//     password: '123456',
//     address: '275 South Street, New York, NY 10002',
//     phoneNumber: '+17148694380',
//     email: 'gigi@email.com',
//     donationCart: {
//       items: [{name: 'vitamins'}, {name: 'strawberries'}, {name: 'tea'}],
//       status: 'active'
//     }
//   })
// ]

const foodBanks = [
  new FoodBank({
    name: 'All Faiths Food Bank',
    address: '8171 Blaikie Ct, Sarasota, FL 34240',
    latitude: 27.347,
    longitude: -82.401
  }),
  new FoodBank({
    name: 'Food Bank for New York City',
    address: '39 Broadway, New York, NY 10038',
    latitude: 40.706,
    longitude: -74.013
  }),
  new FoodBank({
    name: 'Israel Food Bank',
    address: '244 5th Ave #244, New York, NY 10001',
    latitude: 40.744,
    longitude: -73.987
  }),
  new FoodBank({
    name: 'New York Common Pantry',
    address: '8 E 109th St, New York, NY 10029',
    latitude: 40.795,
    longitude: -73.949
  }),
  new FoodBank({
    name: 'Food Bank New York',
    address: '355 Food Center Dr, The Bronx, NY 10474',
    latitude: 40.806,
    longitude: -73.872
  })
]

async function syncData() {
  try {
    // for (let i = 0; i < users.length; i++) {
    //   users[i].hashPassword()
    //   await users[i].save()
    // }

    for (let i = 0; i < foodBanks.length; i++) {
      await foodBanks[i].save()
    }
  } catch (error) {
    console.error(error)
  }
}

function exit() {
  mongoose.disconnect()
}

async function runSeed() {
  console.log('seeding...')
  try {
    await syncData()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await exit()
    console.log('db connection closed')
  }
}

if (require.main === module) {
  mongoose.connection.dropDatabase().then(() => {
    runSeed()
      .then(() => {
        console.log(green('Seeding success!'))
        exit()
      })
      .catch(err => {
        console.error(red('Oh noes! Something went wrong!'))
        console.error(err)
        exit()
      })
  })
}
