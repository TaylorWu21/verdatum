var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res) {
  User.find(function(err, users) {
  	res.json(users);
  });
});

router.get('/:id', function(req, res) {
	res.render('user')
});

router.post('/', function(req, res) {
	new User({
		name: req.body.name,
		age: req.body.age,
		gender: req.body.gender,
		story: req.body.story,
		like: req.body.like
	});
});

router.put('/:id', function(req, res) {
	User.findByIdAndUpdate(
		req.params.id,
		{
			$set: { name: req.body.name, age: req.body.age, gender: req.body.gender, story: req.body.story, like: req.body.like }
		},
		function(err, user) {
			res.json(user);
		}
	);
});

router.delete('/:id', function(req, res) {
	User.findById(req.params.id, function(err, user) {
		user.remove();
		Comment.find({ userId: req.params.id}.remove().exec(function(err, comments) {
			res.status(200).send({ success: true});
		});
	});
});

module.exports = router;
