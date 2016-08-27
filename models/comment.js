var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = new Schema({
	admirer: { type: String, require: true},
	content: { type: String, require: true}
})

module.exports = mongoose.model('Comment', Comment);