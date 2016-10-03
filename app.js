var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
// var MongoClient = require('mongodb').MongoClient;
// var ObjectId = require('mongodb').ObjectId;
// var bcrypt = require('bcryptjs');
// var jwt = require('jwt-simple');
// var morgan = require('morgan');
// var mongoose = require('mongoose');

var path = require('path');


app.use(express.static(__dirname + '/public'));


app.get('*', function(req, res, next){
  return res.redirect('/#' + req.originalUrl);
});

var port = process.env.PORT || 1337;

app.listen(port);