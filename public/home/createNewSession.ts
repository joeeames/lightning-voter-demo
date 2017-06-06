angular.module('app').component('createNewSession', { 
  
  templateUrl: '/home/createNewSession.html',
  bindings: {
    userSessions: '='
  },
  controller: function(toastr, currentIdentity, sessions_v2) {
    
    this.create = function() {
      let newUserSession = {
        title: this.title,
        length: parseInt(this.length),
        abstract: this.abstract,
        userFirstName: currentIdentity.currentUser.firstName,
        userLastName: currentIdentity.currentUser.lastName,
        userId: currentIdentity.currentUser.id,
      }
      
      sessions_v2.createNewSession(newUserSession).then(function(response) {
        this.userSessions.push(response);
      }.bind(this))

    }
  }
})
