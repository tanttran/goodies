var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  
  username: String,
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  nickName: String,
  city: String,
  image: String,
  bio: String,
  following: [{userId: String}],
  followers: [{userId: String}],
  created: { type: Date, default: Date.now }
  
});