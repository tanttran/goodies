var express = require('express');
var yelpSearch = require('./server/api/yelp.js');
// var users = require('./routes/users.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var path = require('path');
var app = express();

var authenticationController = require('./server/controllers/authentication-controller.js');
var profileController = require('./server/controllers/profile-controller.js');




app.use(bodyParser.json());

var JWT_SECRET = 'goodies';

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/goodies", function(err) {
  if(!err) {
    console.log("MONGOOSE connected");
  }
});


// app.use(express.static(__dirname + '/public'));
// app.use('/users', users);
app.use('/yelp', yelpSearch);


app.use('/app', express.static(__dirname + "/app"));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/uploads', express.static(__dirname + '/uploads'));

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

var authorized = function (req, res, next) {
  var token = req.headers.authorization;
  var user = jwt.decode(token, JWT_SECRET);
  req.user = user;
  return next ();
};


//Authentication
app.post('/api/user/signup', authenticationController.signup);
app.post('/api/user/login', authenticationController.login);

//Profile
app.post('/api/profile/update', profileController.updateProfile);








app.get('*', function(req, res, next){
  return res.redirect('/#' + req.originalUrl);
});

var port = process.env.PORT || 1337;

app.listen(port);
