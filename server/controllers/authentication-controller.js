var mongoose = require('mongoose');
var User = require('../datasets/users');
var jwt = require('jwt-simple');
var bcrypt = require('bcryptjs');
var bodyParser = require('body-parser');

var JWT_SECRET = 'goodies';

// var authorized = function (req, res, next) {
//   var token = req.headers.authorization;
//   var user = jwt.decode(token, JWT_SECRET);
//   req.user = user;
//   return next ();
// };

module.exports.signup = function(req, res){
  bcrypt.genSalt(10, function(err, salt) {
    console.log(salt);
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      console.log(hash);

      var user = new User({ 
        username: req.body.username,
        password: hash,
        email: req.body.email 
      });

      user.save(function(err) {
        if (err) return res.status(400).send(err);
        return res.send();
      });

    });
  });
}


module.exports.login = function(req, res){

  User.findOne({username: req.body.username}, function(err, user) {
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
}


