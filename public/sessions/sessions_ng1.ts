angular.module('app').service('sessions_ng1', class Sessions {
  $http: any;
  $q: any;

  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }
  
  addReviewedSession(userId, sessionId) {
    return this.$http.post('/api/users/' + userId + '/reviewSession/' + sessionId);
  }
  
  incrementVote(sessionId) {
    return this.$http.put('/api/sessions/' + sessionId + '/incrementVote/');
  }
  
  getUnreviewedCount(userId) {
    return this.$http.get('/api/users/' + userId + '/unreviewedSessionCount');
  }
});