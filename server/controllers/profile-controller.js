var User = require('../datasets/users');
var mongoose = require('mongoose');

module.exports.updateProfile = function(req, res){

  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var nickName = req.body.nickName;
  var cityName = req.body.cityName;
  var userId = req.body.userId;


  User.findById(userId, function(err, userData){
    console.log(userData);
    var user = userData;
    user.firstName = firstName;
    user.lastName = lastName;
    user.nickName = nickName;
    user.city = cityName;

    user.save(function(err){
      if (err){
        console.log('profile update fail');
        res.json({status: 500})
      } else {
        console.log('profile update success');
        res.json({status: 200});
      }
    })
  });
};
