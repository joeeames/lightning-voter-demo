angular.module('app').component('adminLogin', { 
  templateUrl: './adminLogin.html',
  bindings: {
  },
  controller: function($location, currentIdentity, auth, toastr) {
    
    this.loggedIn = currentIdentity.authenticated();
    if(this.loggedIn) {
      $location.path('/home');
    }
    
    this.login = function() {
      auth.login({
        username: this.email,
        password: this.password
      }).then(function() {
        $location.path('/home');
      }, function(err) {
        toastr.error(err);
      })
    }
  }
})