angular.module('app').controller('loginCtrl', 
    function($location, currentIdentity, auth, toastr) {
      
  if(currentIdentity.authenticated()) {
    $location.path('/home');
  }
  
  this.login = function() {
    auth.login({
      username: this.email,
      password: "pass"
    }).then(function() {
      $location.path('/home');
    }, function(err) {
      toastr.error(err);
    })
  }
})