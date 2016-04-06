angular.module('app').controller('home', function(userSessions, sessions, reviewedSessions, $firebaseAuthService) {
    this.sessions = sessions;
    this.reviewedSessions = reviewedSessions;
    this.userSessions = userSessions;
    
    this.setNextSessionToReview = function() {
      this.currentSessionToReview = 
        sessions.getNextUnreviewedSession($firebaseAuthService.$getAuth().uid, reviewedSessions);
    }
    this.setNextSessionToReview();
    
          
    this.voteYes = function() {
      this.reviewedSessions[this.currentSessionToReview.$id] = 'yes';
      this.currentSessionToReview.voteCount++; 
      this.sessions.$save(this.currentSessionToReview);
      this.reviewedSessions.$save();
      this.setNextSessionToReview();
    }
    
    this.voteNo = function() {
      console.log('vote no')
      this.reviewedSessions[this.currentSessionToReview.$id] = 'no';
      this.reviewedSessions.$save();
      this.setNextSessionToReview();
    }
})