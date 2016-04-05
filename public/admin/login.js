angular.module('app').component('adminLogin', {
  templateUrl: '/admin/login.html',
  bindings: {
    currentAuth: '='
  },
  controller: function($firebaseAuthService, $location, currentUser) {
    this.loggedIn = !!this.currentAuth;
    if(this.loggedIn) {
      $location.path('/home');
    }
    
    this.login = function() {
      $firebaseAuthService.$authWithPassword({
        email: this.email,
        password: this.password
      }).then((function(data) {
        $location.path('/admin/home');
      }).bind(this)).catch((function(err) {
        this.errorMessage = err.code;
      }).bind(this))
    }
  }
})