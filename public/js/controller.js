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


app.controller('HomeController', function($scope, $http) {

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




});





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




