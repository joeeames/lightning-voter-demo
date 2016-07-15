angular.module('app').service('sessions_ng1', class Sessions {
  $http: any;
  $q: any;

  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }
  
  createNewSession(newSession) {
    return this.$http.post('/api/sessions', newSession);
  }
  
  getNextUnreviewedSession(userId) {
    return this.$http.get(`/api/users/${userId}/randomUnreviewedSession`);
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