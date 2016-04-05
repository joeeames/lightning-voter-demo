angular.module('app').factory('sessionCollection', function($firebaseArray) {
  var SessionCollection = $firebaseArray.$extend({
    getUnreviewedCount: function(userKey, reviewedSessions) {
      var total = 0;
      angular.forEach(this.$list, function(session) {
        if(userKey !== session.userKey
          && typeof reviewedSessions[session.$id] === 'undefined') {
          total++;
        }
      });
      return total;
    },
    getNextUnreviewedSession: function(userKey, reviewedSessions) {
      var found = this.$list.find(function(session) {
        return userKey !== session.userKey
          && typeof reviewedSessions[session.$id] === 'undefined'
      });
      return found;
    }
  });
  
  return function(ref) {
    return new SessionCollection(ref);
  }
})