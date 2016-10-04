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


});




app.controller('SignupController', function($scope, $http) {
  $scope.userSignup = function() {

    var newUser = {
      firstname: $scope.firstname,
      lastname: $scope.lastname,
      username: $scope.username,
      password: $scope.password,
      email: $scope.email
    };

    console.log(newUser);
    
    $http.post('/users', newUser).then(function (){
      alert('signup success');
    });
  };
});




