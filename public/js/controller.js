var app = angular.module('goodies', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'home.html',
    controller: 'HomeController',
  })
  .when('/signup', {
    templateUrl: 'signup.html',
    controller: 'SignupController',
  })
  .when('/404', {
    templateUrl: '404.html',
  })
  .otherwise({
    redirectTo: '/404'
  });

  $locationProvider.html5Mode(true);
});


app.run(function($rootScope, $cookies) {
  if ($cookies.get('token') && $cookies.get('currentUser')) {
    $rootScope.token = $cookies.get('token');
    $rootScope.currentUser = $cookies.get('currentUser');
  }
});

// app.config(function($modalProvider){
//   $modalProvider.options.animation = false;
// });

app.controller('HomeController', function($rootScope, $scope, $http, $cookies) {

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





app.controller('SignupController', function($scope, $http) {


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
});




