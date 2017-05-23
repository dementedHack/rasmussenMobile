var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema
var models = {};
var connectionString = "mongodb://mobiledb:GUd0MBA1Cf7XMWdJ6FvCsyCEOZW6W1062pg6V6KhLyPmhveQVhd3YMkq8s2N4BuvecnsH3KKCazGlfLGSUEyBg==@mobiledb.documents.azure.com:10255/?ssl=true&replicaSet=globaldb";

mongoose.connect(connectionString);

console.log('working');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
