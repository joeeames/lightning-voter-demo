angular.module('app').controller('homeCtrl', 
    function(currentIdentity, userSessions, sessions, 
    toastr, unreviewedSessionCount) {
      
      
  this.currentUser = currentIdentity.currentUser
  this.userSessions = userSessions;
  
  this.setNextSessionToReview = function() {
    sessions.getNextUnreviewedSession(currentIdentity.currentUser.id).then(function(response) {
      this.currentSessionToReview = response.data;
    }.bind(this))
  }
  this.setNextSessionToReview();
  
  
  this.voteYes = function() {
    sessions.incrementVote(this.currentSessionToReview.id)
    .then(function() {
      return sessions.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id)
    }.bind(this))
    .then(function() {
      this.setNextSessionToReview();
      
      // pull updated value
      unreviewedSessionCount.updateUnreviewedSessionCount();
    }.bind(this))
  }
  
  this.voteNo = function() {
    sessions.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id)
    .then(function() {
      this.setNextSessionToReview();

      // pull updated value
      unreviewedSessionCount.updateUnreviewedSessionCount();
    }.bind(this))
  }
})