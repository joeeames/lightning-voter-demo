angular.module('app').service('sessions', class Sessions {
  $http: any;
  $q: any;

  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  getSessionsByUser(userId) {
    var dfd = this.$q.defer();
    
    this.$http.get('/api/sessions/user/' + userId).then(function(response) {
      dfd.resolve(response.data);
    }, function() {
      dfd.reject();
    });
    return dfd.promise;
  }
  
  getAllSessions() {
    var dfd = this.$q.defer();
    
    this.$http.get('/api/sessions').then(function(response) {
      dfd.resolve(response.data);
    }, function() {
      dfd.reject();
    });
    return dfd.promise;
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