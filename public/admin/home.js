angular.module('app').component('adminHome', {
  templateUrl: '/admin/home.html',
  bindings: {
    sessions: '=',
    reviewedSessions: '='
  },
  controller: function() {
    this.sessionsByVoteDesc = this.sessions.reverse();
  }
})