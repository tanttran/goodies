var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var bcrypt = require('bcryptjs');

var JWT_SECRET = 'goodies';

mongoose.Promise = global.Promise;

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
  bcrypt.genSalt(10, function(err, salt) {
    console.log(salt);
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      console.log(hash);

      var newUser = new Users({ 
        username: req.body.username,
        password: hash,
        email: req.body.email 
      });

      newUser.save(function(err) {
        if (err) return res.status(400).send(err);
        return res.send();
      });

    });
  });
});


router.put('/login', function(req, res, next) {
  Users.findOne({username: req.body.username}, function(err, user) {
    if(!user) {
          return res.status(400).send();
        }   
        bcrypt.compare(req.body.password, user.password, function(err, isMatch){
        if(isMatch) {
          var mytoken = jwt.encode(user, JWT_SECRET);
          return res.json({token: mytoken});
        } 
        if(!isMatch){
          return res.status(400).send();
        }
        if(err) {
          throw err;
        } else {
          return res.status(401).send
        }
      });
    });
  });





module.exports = router;