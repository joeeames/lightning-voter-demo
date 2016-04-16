angular.module('app').controller('adminLoginCtrl', 
    function($location, currentIdentity, auth) {
  
  this.loggedIn = currentIdentity.authenticated();
  if(this.loggedIn) {
    $location.path('/home');
  }
  
  this.login = function() {
    auth.login({
      username: this.email,
      password: this.password
    }).then((function() {
      $location.path('/home');
    }).bind(this), (function(err) {
      this.errorMessage = err;
    }).bind(this))
  }
})