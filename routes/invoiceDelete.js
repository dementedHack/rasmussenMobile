var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  	console.log(req.body);

  	Invoice.remove({_id: req.body.id}, function(err){
		console.log(err);
	});
});

module.exports = router;
