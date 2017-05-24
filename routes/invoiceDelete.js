var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema
var Invoice = require('../models/invoicedoc');

mongoose.Promise = require('bluebird');

/* GET users listing. */
router.post('/', function(req, res, next) {
  	console.log(req.body._id);

  	Invoice.remove({_id: req.body._id}, function(err){
  		console.log("Item removed")
		if (err) return err;
	});
});

module.exports = router;
