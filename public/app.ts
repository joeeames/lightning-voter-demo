var app = angular.module('app', ['ui.router', 'toastr']);
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

// app.config([ '$urlServiceProvider', ($urlService) => $urlService.deferIntercept() ]);

// angular.element(document).ready(() => {
//   angular.bootstrap(document.body, ['app'])
// });
