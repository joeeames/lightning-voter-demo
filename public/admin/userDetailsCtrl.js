angular.module('app').controller('userDetailsCtrl', 
      function(allUsers, $routeParams) {
  
  this.user = allUsers.find(function(user) {
    return user.id === parseInt($routeParams.id);
  })
})