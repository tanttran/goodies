var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jwt-simple');

var JWT_SECRET = 'goodies';

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

var Users = mongoose.model('users', userSchema);

var authorized = function (req, res, next) {
  var token = req.headers.authorization;
  var user = jwt.decode(token, JWT_SECRET);
  req.user = user;
  return next ();
};


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

router.put('/login', function(req, res, next) {
  Users.findOne({username: req.body.username, password: req.body.password}, function(err, user) {
    if(user) {
        var mytoken = jwt.encode(user, JWT_SECRET);
        return res.json({token: mytoken});
      } 
      if (err) {
        return res.status(500).send();
      }

      if(!user) {
        return res.status(400).send();
      }

      return res.status(200).send();
  });
});



module.exports = router;