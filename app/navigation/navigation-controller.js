goodiesApp.controller('NavigationController', ['$rootScope', '$scope', '$http', '$cookies', function($rootScope, $scope, $http, $cookies) {


  $scope.logUserIn = function() {
    $http.post('api/user/login', $scope.login)
    .then(function(res) {
      console.log(res.data.token);
      $cookies.put('token', res.data.token);
      $cookies.put('currentUser', $scope.login.username);
      $rootScope.token = res.data.token
      $rootScope.currentUser = $scope.login.username;
    }, function(err) {
        $scope.login.username = '';
        $scope.login.password = '';
        alert('Wrong Username or Password');

      });
  };


  $scope.logUserOut = function() {
    
    $cookies.remove('token');
    $cookies.remove('currentUser');
    $rootScope.token = null;
    $rootScope.currentUser = null;
    
  };




}]); // end NavigationController