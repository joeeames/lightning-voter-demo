angular.module('app').controller('logoutCtrl', function($location, auth) {
  auth.logout();
  
  $location.path('/login');
})