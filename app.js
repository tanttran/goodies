var express = require('express');
var app = express();
var yelpSearch = require('./routes/yelp.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var path = require('path');

app.use(bodyParser.json());


app.use(express.static(__dirname + '/public'));

app.use('/search', yelpSearch);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/goodies", function(err, dbconn) {
  if(!err) {
    console.log("MONGOOSE connected");
  }
});

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  firstname: String,
  lastname: String,
  created: { type: Date, default: Date.now }

});

var User = mongoose.model('users', userSchema);

app.post('/users', function(req, res, next){
  var newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname, 
    username: req.body.username,
    password: req.body.password,
    email: req.body.email 
  });
  newUser.save(function(err) {
    if (err) return res.status(400).send(err);
    return res.send();
  });
});













app.get('*', function(req, res, next){
  return res.redirect('/#' + req.originalUrl);
});

var port = process.env.PORT || 1337;

app.listen(port);