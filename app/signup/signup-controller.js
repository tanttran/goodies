goodiesApp.controller('SignUpController', ['$rootScope', '$scope', '$http', '$cookies', '$state', function($rootScope, $scope, $http, $cookies, $state) {

  $scope.createNewUser = function() {

    console.log($scope.newUser);
    $http.post('api/user/signup', $scope.newUser).success(function (response){
      alert('signup success');

    }).error(function(error){
      console.log(error);
    })
  }



}]); // end UserController


