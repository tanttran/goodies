goodiesapp.controller('SignupController', function($scope, $http) {


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
});   // End Signup Controller