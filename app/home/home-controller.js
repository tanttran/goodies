
goodiesApp.controller('HomeController', ['$rootScope', '$scope', '$http', '$cookies', function($rootScope, $scope, $http, $cookies) {

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




}]); // end HomeController


