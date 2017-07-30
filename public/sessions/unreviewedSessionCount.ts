angular.module('app').service('unreviewedSessionCount', class UnreviewedSessionCount {
  value: number;
  sessions: any;
  currentIdentity: any;
  
  constructor(sessions_v2, currentIdentity) {
    this.value = 0;
    this.sessions = sessions_v2;
    this.currentIdentity = currentIdentity;
  }
  
  updateUnreviewedSessionCount() {
    this.sessions.getUnreviewedCount(this.currentIdentity.currentUser.id)
        .then(response => {
      this.value = response.count;
    })
  }
})