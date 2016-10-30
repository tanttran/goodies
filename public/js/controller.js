var goodiesApp = angular.module('goodies', ['ui.router', 'ngCookies', 'ui.bootstrap']);

goodiesApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './templates/home.html',
      controller: 'HomeController'
  })
    .state('profile', {
      url: '/profile',
      templateUrl: './templates/profile.html',
      controller: 'HomeController'
  })
    .state('profile.settings', {
      url: '/settings',
      templateUrl: './templates/profiles/settings.html',
      controller: 'HomeController'
  })
    .state('profile.overview', {
      url: '/overview',
      templateUrl: './templates/profiles/overview.html',
      controller: 'HomeController'
  })
    .state('profile.secrets', {
      url: '/secrets',
      templateUrl: './templates/profiles/secrets.html',
      controller: 'HomeController'
  })
    .state('food', {
      url: '/foods',
      templateUrl: './templates/foods.html',
      controller: 'HomeController'
  })
    .state('drinks', {
      url: '/drinks',
      templateUrl: './templates/drinks.html',
      controller: 'HomeController'
  })
    .state('signup', {
      url: '/signup',
      templateUrl: './templates/signup.html',
      controller: 'UserController'
  })
  // .when('/profile', {
  //   templateUrl: './views/profile.html',
  //   controller: 'UserController',
  // })
  // .when('/foods', {
  //   templateUrl: './views/foods.html',
  //   controller: 'HomeController',
  // })
  // .when('/drinks', {
  //   templateUrl: './views/drinks.html',
  //   controller: 'HomeController',
  // })
  // .when('/signup', {
  //   templateUrl: './views/signup.html',
  //   controller: 'SignupController',
  // })
  // .when('/404', {
  //   templateUrl: './views/404.html',
  // })
  // .otherwise({
  //   redirectTo: '/404'
  // });

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

});


goodiesApp.run(function($rootScope, $cookies) {

  if ($cookies.get('token') && $cookies.get('currentUser')) {
    $rootScope.token = $cookies.get('token');
    $rootScope.currentUser = $cookies.get('currentUser');
  }

});










