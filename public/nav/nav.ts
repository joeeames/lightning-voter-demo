angular.module('app').component('nav', {
  templateUrl: './nav.html',
  bindings: {
  },
  controller: function(currentIdentity, sessions, unreviewedSessionCount) {
    
    this.currentUser = currentIdentity.currentUser;
    
    unreviewedSessionCount.updateUnreviewedSessionCount();
    this.unreviewedSessionCount = unreviewedSessionCount;
    
  }
});