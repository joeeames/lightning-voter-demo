// angular.module('app').factory('routeAuth', function($q, $firebaseObject, fbRef) {
//   return {
//     requireAdmin: function() {
//       var dfd = $q.defer();
      
//       var profile = $firebaseObject(fbRef.getUserRef()).$loaded().then(function(userData) {
//         if(userData.isAdmin) {
//           dfd.resolve();
//         } else {
//           dfd.reject('NOT_AUTHORIZED');
//         }  
//       })
      
//       return dfd.promise;
//     }
//   }
// })