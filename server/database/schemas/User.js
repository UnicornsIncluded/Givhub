const mongoose = require('mongoose')
const {MongooseAutoIncrementID} = require('mongoose-auto-increment-reworked')
const immutablePlugin = require('mongoose-immutable')
const bcrypt = require('bcryptjs')
const R = require('ramda')
const mongooseUniqueValidator = require('mongoose-unique-validator')

const {Schema} = mongoose

// var userSchema = new Schema({
//   username: { type: String, lowercase: true, required: true, unique: true, immutable: true },
//   userType: {type: String, required: true},
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   password: { type: String, required: true },
//   address: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   donationCart: {
//     items: [
//       {
//         name: String,
//       },
//     ],
//     status: String,
//   },
//   donationCartHistory: [{ type: Schema.Types.ObjectId, ref: "DonationCart" }],
// });

const userSchema = new Schema({
  userType: {type: String, required: false},
  username: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
    immutable: true
  },
  // username_case: { type: String, required: true },
  email: {type: String, required: false},
  password: {type: String, required: true},
  profile_pic: {type: String},
  linkedUser: {type: Number, default: null},
  first_name: {type: String, maxlength: 20},
  last_name: {type: String, maxlength: 20},
  address: {type: String},
  phoneNumber: {type: String},
  bio: {type: String, maxlength: 240},
  donationCart: {
    items: [
      {
        name: String
      }
    ],
    status: String
  },
  donationCartHistory: [{type: Schema.Types.ObjectId, ref: 'DonationCart'}],
  created_at: {type: Date, default: Date.now, immutable: true},
  updated_at: {type: Date}
})

MongooseAutoIncrementID.initialise('counters')

userSchema.plugin(MongooseAutoIncrementID.plugin, {
  modelName: 'User',
  field: 'user',
  incrementBy: 1,
  startAt: 1,
  unique: true,
  nextCount: false,
  resetCount: false
})

userSchema.plugin(immutablePlugin)

userSchema.virtual('full_name').get(function() {
  if (this.first_name && this.last_name) {
    return `${this.firstName} ${this.lastName}`
  }
  if (this.firstName && !this.lastName) {
    return this.firstName
  }
  if (!this.firstName && this.lastName) {
    return this.lastName
  }
  return undefined
})

userSchema.virtual('initials').get(function() {
  return (
    this.firstName &&
    this.lastName &&
    `${this.firstName[0].concat(this.lastName[0]).toUpperCase()}`
  )
})

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema.methods.hashPassword = function() {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err1, salt) => {
      if (err1) {
        reject(err1)
      }
      bcrypt.hash(this.password, salt, (err2, hash) => {
        if (err2) {
          reject(err2)
        }
        this.password = hash
        resolve(hash)
      })
    })
  })
}

userSchema.methods.hidePassword = function() {
  return R.omit(['password', '__v', '_id'], this.toObject({virtuals: true}))
}

userSchema.plugin(mongooseUniqueValidator)

const User = mongoose.model('User', userSchema)

module.exports = User
