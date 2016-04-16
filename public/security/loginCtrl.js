angular.module('app').controller('loginCtrl', 
    function($location, currentIdentity, auth) {
      
  if(currentIdentity.authenticated()) {
    $location.path('/home');
  }
  
  this.login = function() {
    auth.login({
      username: this.email,
      password: "pass"
    }).then((function() {
      $location.path('/home');
    }).bind(this), (function(err) {
      this.errorMessage = err;
    }).bind(this))
  }
  
  this.logout = function() {
    auth.logout();
  }
})