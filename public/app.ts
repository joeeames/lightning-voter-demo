var app = angular.module('app', ['ngRoute', 'toastr', 'ngMaterial']);
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

app.config(($locationProvider) => {
  $locationProvider.hashPrefix('');
})

// angular.element(document).ready(() => {
//   angular.bootstrap(document.body, ['app'])
// });
