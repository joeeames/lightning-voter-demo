angular.module('app').factory('routeAuth', function($q, $firebaseObject, fbRef) {
  return {
    requireAdmin: function() {
      var dfd = $q.defer();
      
      var profile = $firebaseObject(fbRef.getUserRef()).$loaded().then(function(userData) {
        if(userData.isAdmin) {
          console.log('authorized');
          dfd.resolve();
        } else {
          console.log('not authorized');
          dfd.reject('NOT_AUTHORIZED');
        }  
      })
      
      return dfd.promise;
    }
  }
})