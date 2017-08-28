angular.module('app').service('routeResolvers', class Auth {

  constructor(private $q, private $http, private currentIdentity) {
  }
  
  waitForAuth() {
    var dfd = this.$q.defer();
    this.$http.get('/api/currentIdentity').then(response => {
      if(!!response.data) {
        this.currentIdentity.setUser(response.data);
      }
      dfd.resolve(this.currentIdentity);
    })
    return dfd.promise;
  }
    
  requireLogin() {
    return this.waitForAuth().then(() => {
      if(this.currentIdentity.authenticated()) {
        return true;
      } else {
        return this.$q.reject('AUTH_REQUIRED');
      }
    })
  }
    
  requireAdmin() {
    return this.waitForAuth().then(() => {
      if(this.currentIdentity.authenticated() && this.currentIdentity.currentUser.isAdmin) {
        return true;
      } else {
        return this.$q.reject('AUTH_REQUIRED');
      }
    })
  }

})