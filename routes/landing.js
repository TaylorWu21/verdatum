var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/landing', function(req, res) {
	// res.render(landing);
	res.render('./containers/landings');
});

module.exports = router;
