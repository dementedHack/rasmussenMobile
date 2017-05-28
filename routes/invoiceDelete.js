var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema
var Invoice = require('../models/invoicedoc');


var invoiceItems;
mongoose.Promise = require('bluebird');

/* GET users listing. */
router.post('/', function(req, res, next) {
	Invoice.remove({_id: req.body._id}, function(err){
		if (err) return err;
		console.log('Request to delete item');
	});
	scanForInvoices();
	setTimeout(function(){
		res.json(invoiceItems);
	} ,200);
	
});


function scanForInvoices() {
	Invoice.find(function (err, invoices) {
	  if (err) return console.error(err);
	  invoiceItems = (invoices);
	})
}

module.exports = router;
