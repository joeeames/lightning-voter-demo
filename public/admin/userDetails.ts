angular.module('app').component('userDetails', { 
  templateUrl: '/admin/userDetails.html',
  bindings: {
    allUsers: '='
  },
  controller: function($routeParams) {
    
    this.$onInit = function() {
      this.user = this.allUsers.find(function(user) {
        return user.id === parseInt($routeParams.id);
      })
    }
  }
})