var express = require('express');
var router = express.Router();
var request = require('request');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

router.use(textParser);

router.use(bodyParser.json());



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/goodies", function(err, dbconn) {
  if(!err) {
    console.log("MONGOOSE connected");
  }
});

var userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  password: String,
  email: String,
  created: { type: Date, default: Date.now }

});

var User = mongoose.mongoose('users', userSchema);

// var Users = mongoose.model('users', { 
//   username: String,
//   password: String,
//   email: String,
//   firstname: String,
//   lastname: String,
//   created: { type: Date, default: Date.now }
// });

router.get('/users', function (req, res) {
  res.sendFile(path.join(_dirname + '/../public/signup.html'));
});

router.post('/users', function(req, res, next){
  var newUser = new Users({ 
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

module.exports = router;


