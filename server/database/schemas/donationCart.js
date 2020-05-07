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