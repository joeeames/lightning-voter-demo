angular.module('app').controller('adminLoginCtrl', 
    function($location, currentIdentity, auth, toastr, $scope) {
  
  $scope.loggedIn = currentIdentity.authenticated();
  if($scope.loggedIn) {
    $location.path('/home');
  }
  
  $scope.login = function() {
    auth.login({
      username: $scope.email,
      password: $scope.password
    }).then(function() {
      $location.path('/home');
    }, function(err) {
      toastr.error(err);
    })
  }
})