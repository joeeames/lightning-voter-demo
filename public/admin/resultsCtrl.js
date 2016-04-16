angular.module('app').controller('resultsCtrl', 
      function(allSessions) {
  
    
  allSessions.sort(function(session1, session2) {
    // reverse order
    return session2.voteCount - session1.voteCount;
  })
  
  this.sessionsByVoteDesc = allSessions;
})