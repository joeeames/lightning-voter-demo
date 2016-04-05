angular.module('app').component('logout', {
  controller: function($firebaseAuthService, $location) {
    $firebaseAuthService.$unauth();
    $location.path('/login');
  }
})