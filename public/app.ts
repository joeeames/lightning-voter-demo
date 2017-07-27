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
angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['app'])
});

app.config(['$locationProvider', function($locationProvider) {
 $locationProvider.hashPrefix('');
}]);

