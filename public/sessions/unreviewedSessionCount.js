angular.module('app').factory('unreviewedSessionCount', function(sessions, currentIdentity) {
  return {
    value: 0,
    updateUnreviewedSessionCount: function() {
      sessions.getUnreviewedCount(currentIdentity.currentUser.id)
          .then(function(response) {
        this.value = response.data.count;
      }.bind(this))
    }
  }
})