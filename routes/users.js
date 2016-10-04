var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/goodies", function(err) {
  if(!err) {
    console.log("MONGOOSE connected");
  }
});

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  created: { type: Date, default: Date.now }

});

var User = mongoose.model('users', userSchema);


router.post('/signup', function(req, res, next){
  var newUser = new User({
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