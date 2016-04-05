var app = angular.module('app', ['ngRoute', 'firebase', 'ngAnimate', 'toastr']);

app.run(function($rootScope, $location, $firebaseAuthService, 
    $firebaseObject, $firebaseRef) {
  
  $rootScope.$on("$routeChangeError", function(e, next, prev, err) {
    if(err === "AUTH_REQUIRED") {
      $location.path("/login");
    }
    if(err === 'NOT_AUTHORIZED') {
      $location.path("/home");
    }
  })
})
