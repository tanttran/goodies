
goodiesApp.controller('HomeController', function($rootScope, $scope, $http, $cookies) {

  $scope.searchYelp = function() {
    $http({
      method: "POST",
      url: "/yelp/search",
      data: {
        term: $scope.goodies,
        location: $scope.location,
        limit: 1
      }

    })
    .success(function(data){
      $scope.response = data;
      console.log(data);
    })
    .error(function(data){
      console.log(data);
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




}); // end HomeController


