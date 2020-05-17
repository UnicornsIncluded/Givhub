<<<<<<< HEAD
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemsSchema = new Schema({
	name: String
});

var donationCartSchema = new Schema({
	items: [itemsSchema],
	status: String
});

module.exports = mongoose.model('DonationCart', donationCartSchema);
=======
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var itemsSchema = new Schema({
  name: String
})

var donationCartSchema = new Schema({
  items: [itemsSchema],
  status: String
})

module.exports = mongoose.model('DonationCart', donationCartSchema)
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
