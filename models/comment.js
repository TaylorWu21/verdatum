var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = new Schema({
	admirer: { type: String, require: true},
	content: { type: String, require: true},
	userId: { type: String } 
})

module.exports = mongoose.model('Comment', Comment);
