var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = require('../models/comment');

router.get('/', function(req, res) {
	var query = Comment.find({});
	query.where('userId', req.query.userId);
	query.exec(function(err, comments) {
		console.log('comments are: ' + comments);
		res.json(comments);
	});
});

router.post('/', function(req, res) {
	new Comment({ 
		admirer: req.body.admirer, 
		content: req.body.content,
		userId: req.body.userId
	}).save( function(err, comment) {
		console.log('/comments post fired w/ save');
		res.json(comment);		
	});
});

router.delete('/:id', function(req, res) {
	Comment.findById(req.params.id, function(err, comment) {
		comment.remove();
	});
});

module.exports = router;
