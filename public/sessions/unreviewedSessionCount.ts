angular.module('app').service('unreviewedSessionCount', class UnreviewedSessionCount {
  value: number;
  
  constructor(private sessions, private currentIdentity) {
    this.value = 0;
  }
  
  updateUnreviewedSessionCount() {
    this.sessions.getUnreviewedCount(this.currentIdentity.currentUser.id)
        .then(response => {
      this.value = response.count;
    })
  }
})