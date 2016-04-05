angular.module('app').component('profile', {
  templateUrl: '/profile/profile.html',
  bindings: {
    profile: '=userData',
    sessions: '=',
    reviewedSessions: '='
  },
  controller: function(fbRef, $scope, $location) {
    
    this.save = function() {
      this.profile.$save();
      // todo: notify with toastr
    }
    
    this.cancel = function() {
      $location.path('/home');
    }
    
  }
})