
angular.module('app').config(function($routeProvider) {
  var routeResolvers = {
    loggedIn: function(routeResolvers) {
      return routeResolvers.requireLogin();
    },
    waitForAuth: function(routeResolvers) {
      return routeResolvers.waitForAuth();
    },
    requireAdmin: function(routeResolvers) {
      return routeResolvers.requireAdmin();
    },
    userSessions: function(sessions, currentIdentity, routeResolvers) {
      return routeResolvers.requireLogin().then(function() {
        return sessions.getSessionsByUser(currentIdentity.currentUser.id);
      });
    },
    allSessions: function(sessions, routeResolvers) {
      return routeResolvers.requireLogin().then(function() {
        return sessions.getAllSessions();
      });
    },
    allUsers: function(users, routeResolvers) {
      return routeResolvers.requireLogin().then(function() {
        return users.getAllUsers();
      });
    }
    
  }
  
  $routeProvider
    .when('/admin/login', {
      template: '<admin-login></admin-login>',
      resolve: {
        currentAuth: routeResolvers.waitForAuth
      }
    })
    // .when('/admin/results', {
    //   template: '<results [all-sessions]="$resolve.allSessions"></results>',
    //   resolve: {
    //     admin: routeResolvers.requireAdmin,
    //     allSessions: routeResolvers.allSessions
    //   }
    // })
    .when('/admin/users/:id', {
      template: '<user-details all-users="$resolve.allUsers"></user-details>',
      resolve: {
        admin: routeResolvers.requireAdmin,
        allUsers: routeResolvers.allUsers
      }
    })
    .when('/users', {
      template: '<user-list all-users="$resolve.allUsers"></user-list>',
      resolve: {
        admin: routeResolvers.requireAdmin,
        allUsers: routeResolvers.allUsers
      }
    })
    .when('/admin/createusers', {
      template: '<create-users></create-users>',
      resolve:  {
        admin: routeResolvers.requireAdmin
      }
    })
    .when('/home', {
      template: '<home user-sessions="$resolve.userSessions"></home>',
      resolve: {
        login:routeResolvers.loggedIn,
        userSessions: routeResolvers.userSessions
      }
    })
    .when('/profile', {
      template: '<profile></profile>',
      resolve: {
        userProfile: routeResolvers.loggedIn,
      }
    })
    .when('/createsession', {
      template: '<create-new-session user-sessions="$resolve.userSessions"></create-new-user>',
      resolve: {
        userSessions: routeResolvers.userSessions,
      }
    })
    // .when('/login', {
    //   template: '<login></login>',
    //   resolve: {
    //     currentAuth: routeResolvers.waitForAuth
    //   }
    // })
    .when('/logout', {
      template: '<logout></logout>'
    })
    .when('/', {
      redirectTo: '/home'
    })
})