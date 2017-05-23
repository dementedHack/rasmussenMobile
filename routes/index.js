var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema
var models = {};
var Invoice = require('../models/invoicedoc');

var connectionString = "mongodb://mobiledb:GUd0MBA1Cf7XMWdJ6FvCsyCEOZW6W1062pg6V6KhLyPmhveQVhd3YMkq8s2N4BuvecnsH3KKCazGlfLGSUEyBg==@mobiledb.documents.azure.com:10255/?ssl=true&replicaSet=globaldb";

mongoose.connect(connectionString);

var db = mongoose.connection;

db.once('open', function() {
	console.log('connected to DB successfully');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kais Frustration' });

	  Invoice.find(function (err, invoices) {
	  if (err) return console.error(err);
	  console.log(invoices);
	})
});

router.post('/', function(){

	var newInvoice = new Invoice;
	newInvoice.taskName = "The task";
	newInvoice.type = "PDF";

	newInvoice.save(function(err){
		if(err){
			console.log(err);
		}
	})
})

module.exports = router;
