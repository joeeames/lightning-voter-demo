angular.module('app').component('home', { 
  templateUrl: './home.html',
  bindings: {
    userSessions: '='
  },
  controller: function(currentIdentity, sessions_v2, 
    toastr, unreviewedSessionCount) {
      
    
    this.currentUser = currentIdentity.currentUser
    
    this.setNextSessionToReview = function() {
      sessions_v2.getNextUnreviewedSession(currentIdentity.currentUser.id).then((response) => {
        this.currentSessionToReview = response.data;
      })
    }
    this.setNextSessionToReview();
    
    
    this.voteYes = function() {
      sessions_v2.incrementVote(this.currentSessionToReview.id)
      .then(() => sessions_v2.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id))
      .then(function() {
        this.setNextSessionToReview();
        
        // pull updated value
        unreviewedSessionCount.updateUnreviewedSessionCount();
      }.bind(this))
    }
    
    this.voteNo = function() {
      sessions_v2.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id)
      .then(function() {
        this.setNextSessionToReview();

        // pull updated value
        unreviewedSessionCount.updateUnreviewedSessionCount();
      }.bind(this))
    }
  }
})