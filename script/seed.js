const {green, red} = require('chalk')
const User = require('../server/database/schemas/User')
const mongoose = require('mongoose')
require('../server/config/environment')

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const users = [
  new User({
    userType: 'donor',
    username: 'belldonor',
    firstName: 'Bella',
    lastName: 'Hadid',
    password: '123456',
    address: '1624 Fairford Dr, Fullerton CA 92833',
    email: 'bella@email.com',
    donationCart: {
      items: [{name: 'carrot'}, {name: 'banana'}, {name: 'bagel'}],
      status: 'active'
    }
  }),
  new User({
    userType: 'courier',
    username: 'gigicourier',
    firstName: 'Gigi',
    lastName: 'Hadid',
    password: '123456',
    address: '1625 Fairford Dr, Fullerton CA 92833',
    email: 'gigi@email.com',
    donationCart: {
      items: [{name: 'vitamins'}, {name: 'strawberries'}, {name: 'tea'}],
      status: 'active'
    }
  })
]

async function syncUsers() {
  try {
    for (let i = 0; i < users.length; i++) {
      users[i].hashPassword()
      await users[i].save()
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
    await syncUsers()
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
