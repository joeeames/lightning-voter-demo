angular.module('app').factory('auth', function($q, $http, currentIdentity) {
  return {
    login: function(credentials) {
      var dfd = $q.defer();
      $http.post('/api/login', credentials).then(function(response) {
        currentIdentity.setUser(response.data.user);
        
        dfd.resolve();
      }, function(response) {
        dfd.reject("Invalid Credentials");
      })
      return dfd.promise;
    },
    logout: function() {
      var dfd = $q.defer();
      $http.post('/api/logout').then(function(response) {
        currentIdentity.clearUser();
        dfd.resolve();
      }, function(response) {
        dfd.reject("Error Logging Out");
      })
      return dfd.promise;
    },
    
    waitForAuth: function() {
      var dfd = $q.defer();
      $http.get('/api/currentIdentity').then(function(response) {
        if(!!response.data) {
          currentIdentity.setUser(response.data);
        }
        dfd.resolve(currentIdentity);
      })
      return dfd.promise;
    },
    
    requireLogin: function() {
      return this.waitForAuth().then(function() {
        if(currentIdentity.authenticated()) {
          return true;
        } else {
          return $q.reject('AUTH_REQUIRED');
        }
      })
    },
    
    requireAdmin: function() {
      return this.waitForAuth().then(function() {
        if(currentIdentity.authenticated() && currentIdentity.currentUser.isAdmin) {
          return true;
        } else {
          return $q.reject('AUTH_REQUIRED');
        }
      })
    }
  }
})