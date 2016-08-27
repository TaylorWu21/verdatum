var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	name: { type: String },
	age: { type: Number },
	gender: { type: String },
	story: { type: String },
	like: { type: Boolean }
});

module.exports = mongoose.model('User', User);
