angular.module('app').component('createNewSession', {
  templateUrl: '/home/createNewSession.html',
  bindings: {
    sessions: '=',
    userSessions: '=',
    reviewedSessions: '=',
    userProfile: '='
  },
  controller: function($firebaseAuthService, $timeout, toastr) {
    
    this.create = function() {
      var newUserSession = {
        title: this.title,
        length: parseInt(this.length),
        abstract: this.abstract
      }

      this.userSessions.$add(newUserSession).then((function(ref) {
        var newSession = {
          title: this.title,
          length: parseInt(this.length),
          abstract: this.abstract,
          userKey: $firebaseAuthService.$getAuth().uid,
          userSessionKey: ref.key(),
          userFirstName: this.userProfile.firstName,
          userLastName: this.userProfile.lastName,
          voteCount: 0
        }
        this.sessions.$add(newSession).then(function() {
          toastr.success('Success!');
        })
        
        this.title = "";
        this.length = null;
        this.abstract = "";
      }).bind(this))
    }
  }
})