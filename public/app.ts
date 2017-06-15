var app = angular.module('app', ['ui.router', 'toastr']);
app.run(function($rootScope, $location, $transitions, auth) {
  $rootScope.$on("$routeChangeError", function(e, next, prev, err) {
    console.log('error')
    if(err === "AUTH_REQUIRED") {
      $location.path("/login");
    }
    if(err === 'NOT_AUTHORIZED') {
      $location.path("/home");
    }
  })
});
app.run(($transitions, auth, $q, $location) => {
  let authStateCheck = {
    to: (state) => {
      return state.data && 
        state.data.requiresAuth;
    }
  }

  let adminStateCheck = {
    to: (state) => {
      return state.data && 
        state.data.requiresAdmin;
    }
  }

  $transitions.onStart( 
    authStateCheck,
    function(trans) {
      let $state = trans.router.stateService;
      
      if(!auth.currentIdentity.authenticated()) {
        return auth.requireLogin().then(() => {
          // user is already logged in. just continue
        }, () => {
          // user isn't logged in. go to login
          $state.go('login');
        })
      } else {
        return true;
      }
    }
  );

  $transitions.onStart( 
    adminStateCheck,
    function(trans) {
      let $state = trans.router.stateService;
      console.log('checking admin');
      
      if(!auth.currentIdentity.authenticated()) {
        return auth.requireAdmin().then(() => {
          // do nothing
        }, () => {
          $state.go("admin_login");
          
        })
      } else {
        return true;
      }
    }
  );
})
