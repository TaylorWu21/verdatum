var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/landing', function(req, res) {
	res.json(Landing);
});

module.exports = router;
