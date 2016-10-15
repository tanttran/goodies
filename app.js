var express = require('express');
var app = express();
var yelpSearch = require('./routes/yelp.js');
var users = require('./routes/users.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var path = require('path');
app.use(bodyParser.json());


app.use(express.static(__dirname + '/public'));


app.use('/yelp', yelpSearch);
app.use('/users', users);




app.get('*', function(req, res, next){
  return res.redirect('/#' + req.originalUrl);
});

var port = process.env.PORT || 1337;

app.listen(port);
