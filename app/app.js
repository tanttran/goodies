var goodiesApp = angular.module('goodies', ['ui.router', 'ngCookies', 'ui.bootstrap']);

goodiesApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: 'HomeController'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/signup/signup.html',
      controller: 'SignUpController'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'app/aboutme/profile.html',
      controller: 'ProfileController'
    })
    .state('profile.edit-profile', {
      url: '/edit-profile',
      templateUrl: 'app/aboutme/edit-profile/edit-profile.html',
      controller: 'ProfileController'
  })
    .state('profile.overview', {
      url: '/overview',
      templateUrl: 'app/aboutme/overview/overview.html',
      controller: 'ProfileController'
  })
    .state('profile.secrets', {
      url: '/secrets',
      templateUrl: 'app/aboutme/secrets/secrets.html',
      controller: 'ProfileController'
  })
  //   .state('food', {
  //     url: '/foods',
  //     templateUrl: './templates/foods.html',
  //     controller: 'HomeController'
  // })
  //   .state('drinks', {
  //     url: '/drinks',
  //     templateUrl: './templates/drinks.html',
  //     controller: 'HomeController'
  // })

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

});


goodiesApp.run(function($rootScope, $cookies) {

  if ($cookies.get('token') && $cookies.get('currentUser')) {
    $rootScope.token = $cookies.get('token');
    $rootScope.currentUser = $cookies.get('currentUser');
  }

});










