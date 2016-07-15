angular.module('app').service('unreviewedSessionCount', class UnreviewedSessionCount {
  value: number;
  sessions: any;
  currentIdentity: any;
  
  constructor(sessions, currentIdentity) {
    this.value = 0;
    this.sessions = sessions;
    this.currentIdentity = currentIdentity;
  }
  
  updateUnreviewedSessionCount() {
    this.sessions.getUnreviewedCount(this.currentIdentity.currentUser.id)
        .subscribe(response => {
          
      this.value = response.json().count;
    })
  }
})