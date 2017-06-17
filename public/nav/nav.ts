angular.module('app').component('myNav', {
  templateUrl: '/nav/nav.html',
  bindings: {
  },
  controller: function(currentIdentity, sessions, unreviewedSessionCount) {
    this.currentUser = currentIdentity.currentUser;
    this.currentNavItem = 'home'
    
    unreviewedSessionCount.updateUnreviewedSessionCount();
    this.unreviewedSessionCount = unreviewedSessionCount;
    
  }
});