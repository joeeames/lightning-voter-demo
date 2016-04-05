angular.module('app').factory('currentUser', function() {
  return {
    isAdmin: false,
    email: null,
    firstName: null,
    lastName: null,
    uid: null
  }
})