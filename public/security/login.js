angular.module('app').component('login', {
  templateUrl: '/security/login.html',
  bindings: {
    currentAuth: '='
  },
  controller: function($firebaseAuthService, $firebaseRef, $location, $firebaseObject) {
    this.loggedIn = !!this.currentAuth;
    if(this.loggedIn) {
      $location.path('/home');
    }
    
    this.login = function() {
      $firebaseAuthService.$authWithPassword({
        email: this.email,
        password: "pass"
      }).then((function(userdata) {
        $location.path('/home');
      }).bind(this)).catch((function(err) {
        this.errorMessage = err.code;
      }).bind(this))
    }
  }
})