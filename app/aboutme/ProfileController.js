goodiesApp.controller('ProfileController', ['$scope', '$state', '$http', function($scope, $state, $http){

  $scope.user = JSON.parse(localStorage['User-Data']) || undefined;

  $scope.userProfileUpdate = function(){
    var request = {
      userId: $scope.user._id,
      firstName: $scope.profile.firstName,
      lastName: $scope.profile.lastName,
      nickName: $scope.profile.nickName,
      cityName: $scope.profile.cityName,
    }
    console.log(request);
    $http.post('api/profile/update', request).success(function(){
      console.log('success');
    }).error(function(err){
      console.log('error');
    })
  };




}]);