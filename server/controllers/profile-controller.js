var User = require('../datasets/users');
var mongoose = require('mongoose');

module.exports.updateProfile = function(req, res){

  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var nickName = req.body.nickName;
  var city = req.body.cityName;
  var id = req.params.id;


  User.findById({ _id: mongoose.Types.ObjectId(id) }, function(err, userData){
    var user = userData;
    user.firstName = firstName,
    user.lastName = lastName,
    user.nickName = nickName,
    user.cityName = city

    user.save(function(err){
      if (err){
        console.log('username fail');
        res.json({status: 500})
      } else {
        console.log('username success');
        res.json({status: 200});
      }
    })
  });
};
