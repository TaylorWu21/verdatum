var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	name: { type: String, require: true },
	age: { type: Number, require: true},
	gender: { type: String, require: true},
	story: { type: String, require: true},
	like: { type: Boolean }
});

module.exports = mongoose.model('User', User);