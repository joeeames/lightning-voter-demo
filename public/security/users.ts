angular.module('app').service('users', class Users {
  $http: any;
  $q: any
  
  constructor($http, $q) { 
    this.$http = $http;
    this.$q = $q;
  }
  
  createNewUser(newUser) {
    return this.$http.post('/api/users', newUser);
  }
  
  getAllUsers() {
    var dfd = this.$q.defer();
    
    this.$http.get('/api/users').then(response => {
      dfd.resolve(response.data);
    })
    
    return dfd.promise;
  }
});
