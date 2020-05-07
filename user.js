var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// var userSchema = new Schema({
// 	name: String,
// 	address: String,
// 	donationCart: {
// 		type: donationCartSchema,
// 		default: {
// 			items: [],
// 			status: "Active"
// 		}
// 	},
// 	orderHistory: [ {type: Schema.Types.ObjectId, ref: 'DonationCart'} ]
// })

// separate module

var userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  donationCart: {
    items: [
      {
        name: String,
      },
    ],
    status: String,
  },
  donationCartHistory: [{ type: Schema.Types.ObjectId, ref: "DonationCart" }],
});

// install unique validator package
// in terminal --> npm install mongoose-unique-validator
Schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("User", userSchema);
