var goodiesapp = angular.module('goodies', ['ngRoute', 'ngCookies', 'ui.bootstrap']);

goodiesapp.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './views/home.html',
    controller: 'HomeController',
  })
  .when('/profile', {
    templateUrl: './views/profile.html',
    controller: 'UserController',
  })
  .when('/foods', {
    templateUrl: './views/foods.html',
    controller: 'HomeController',
  })
  .when('/drinks', {
    templateUrl: './views/drinks.html',
    controller: 'HomeController',
  })
  .when('/signup', {
    templateUrl: './views/signup.html',
    controller: 'SignupController',
  })
  .when('/404', {
    templateUrl: './views/404.html',
  })
  .otherwise({
    redirectTo: '/404'
  });

  $locationProvider.html5Mode(true);
});


goodiesapp.run(function($rootScope, $cookies) {
  if ($cookies.get('token') && $cookies.get('currentUser')) {
    $rootScope.token = $cookies.get('token');
    $rootScope.currentUser = $cookies.get('currentUser');
  }
});










