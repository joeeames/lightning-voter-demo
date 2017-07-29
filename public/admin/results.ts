angular.module('app').component('results', {
  templateUrl: './results.html',
  bindings: {
    sessionsByVoteDesc: '=allSessions'
  },
  controller: function() {
    this.$onInit = function() {
      this.sessionsByVoteDesc.sort(function(session1, session2) {
        // reverse order
        return session2.voteCount - session1.voteCount;
      })
    }
    
  }
})

