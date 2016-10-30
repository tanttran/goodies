goodiesApp.controller('UserController', function($rootScope, $scope, $http, $cookies) {

  $scope.userSignup = function() {

    var newUser = {
      username: $scope.username,
      password: $scope.password,
      password2: $scope.retypePassword,
      email: $scope.email
    };
    console.log(newUser);
    $http.post('/users/signup', newUser).success(function (data){
      alert('signup success');

    });
  };

  $scope.userLogin = function() {
    $http.put('/users/login', {username: $scope.username, password: $scope.password})
    .then(function(res) {
      console.log(res.data.token);
      $cookies.put('token', res.data.token);
      $cookies.put('currentUser', $scope.username);
      $rootScope.token = res.data.token
      $rootScope.currentUser = $scope.username;
    }, function(err) {
        // $scope.username = '';
        // $scope.password = '';
        alert('Wrong Username or Password');

      });
  };

  $scope.userLogout = function() {
    $cookies.remove('token');
    $cookies.remove('currentUser');
    $rootScope.token = null;
    $rootScope.currentUser = null;
    $scope.username = '';
    $scope.password = '';
  };

  $scope.updateUsername = function () {
    var request = {
      userId: $scope.user.userId,
      username: $scope.user.username
    }

    $http.post('/users/updateUsername', request).success(function() {
      console.log('success');
    }).error(function(error) {
      console.log('error');
    });
  };


  // module.exports.updateUsername = function (req, res) {
  //   var username = req.body.username;
  //   var userId = req.body.userId;

  //   User.findById(userId, function(err, userData) {
  //     var user = userData;
  //     user.username = username;
  //     user.save(function(err){
  //       if (err){
  //         console.log('fail');
  //         res.json({status: 500});
  //       } else {
  //         console.log('success');
  //         res.json({status: 200});
  //       }
  //     });
  //   });
  // };
  
  // $scope.profileUpdate = function() {
    
  //   var updateUser = {
  //     username: $scope.userName,
  //     firstName: $scope.firstName,
  //     lastName: $scope.lastName,
  //     nickName: $scope.nickName,
  //     city: $scope.cityName
  //   };
  //   console.log(updateUser);

  //   $http.put('/users/update', updateUser,
  //     {headers: {
  //       'authorization': $rootScope.token
  //     }}).then(function(){
  //       alert('update complete');
  //     });
  //   };


}); // end UserController


