angular.module('app').component('logout', {
  
  controller: function($location, auth) {
    auth.logout();
  
    $location.path('/login');
  }
})