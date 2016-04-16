angular.module('app').factory('users', function($http, $q) {
  return {
    createNewUser: function(newUser) {
      return $http.post('/api/users', newUser);
    },
    getAllUsers: function() {
      var dfd = $q.defer();
      
      $http.get('/api/users').then(function(response) {
        dfd.resolve(response.data);
      })
      
      return dfd.promise;
    }
  }
});