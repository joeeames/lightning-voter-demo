angular.module('app').directive('nav', function() {
  
  return {
    templateUrl: '/nav/nav.html',
    scope: {
      sessions: '=',
      reviewedSessions: '='
    },
    controllerAs: "vm",
    controller: function($scope, $firebaseAuthService, $firebaseObject, fbRef) {
      
      this.currentUser = $firebaseObject(fbRef.getUserRef());
      
      this.getUnreviewedSessionsCount = function() {
        
        return $scope.sessions.getUnreviewedCount($firebaseAuthService.$getAuth().uid, 
          $scope.reviewedSessions);
      }
    }
  }

});