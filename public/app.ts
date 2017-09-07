var app = angular.module('app', ['ngRoute', 'toastr']);
app.run(function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(e, next, prev, err) {
    if(err === "AUTH_REQUIRED") {
      $location.path("/login");
    }
    if(err === 'NOT_AUTHORIZED') {
      $location.path("/home");
    }
  })
})

app.config(['$locationProvider', function($locationProvider) {
 $locationProvider.html5Mode(true);
}]);

