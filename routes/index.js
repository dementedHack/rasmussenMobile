var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema
var models = {};
var Invoice = require('../models/invoicedoc');

//Promise to avoid errors
mongoose.Promise = require('bluebird');
var connectionString = "mongodb://mobiledb:GUd0MBA1Cf7XMWdJ6FvCsyCEOZW6W1062pg6V6KhLyPmhveQVhd3YMkq8s2N4BuvecnsH3KKCazGlfLGSUEyBg==@mobiledb.documents.azure.com:10255/?ssl=true&replicaSet=globaldb";


mongoose.connect(connectionString);

var db = mongoose.connection;
var dbItems = 0;

db.once('open', function() {
	console.log('connected to DB successfully');

	Invoice.find(function (err, invoices) {
	  if (err) return console.error(err);
	  dbItems = (invoices);
	})
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kais Frustration', dbItems: dbItems });  
});

router.post('/', function(req, res, next){

	var documentName = req.body.documentName;
	var documentType = req.body.documentType;

	var newInvoice = new Invoice;
	newInvoice.taskName = documentName;
	newInvoice.type = documentType;

	newInvoice.save(function(err){
		if(err){
			console.log(err);
		}
	})
});

module.exports = router;
