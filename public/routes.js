
app.config(function($routeProvider) {
  var routeResolvers = {
    loggedIn: function(auth) {
      // console.log(auth)
      // var a = new auth();
      // console.log(a);
      return auth.requireLogin();
    },
    waitForAuth: function(auth) {
      return auth.waitForAuth();
    },
    requireAdmin: function(auth) {
      return auth.requireAdmin();
    },
    userSessions: function(sessions, currentIdentity, auth) {
      return auth.requireLogin().then(function() {
        return sessions.getSessionsByUser(currentIdentity.currentUser.id);
      });
    },
    allSessions: function(sessions, auth) {
      return auth.requireLogin().then(function() {
        return sessions.getAllSessions();
      });
    },
    allUsers: function(users, auth) {
      return auth.requireLogin().then(function() {
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
    .when('/admin/results', {
      template: '<results all-sessions="$resolve.allSessions"></results>',
      resolve: {
        admin: routeResolvers.requireAdmin,
        allSessions: routeResolvers.allSessions
      }
    })
    .when('/admin/users/:id', {
      // controller: 'userDetailsCtrl',
      // templateUrl: 'admin/userDetails.html',
      // controllerAs: 'vm',
      template: '<user-details all-users="$resolve.allUsers"></user-details>',
      resolve: {
        admin: routeResolvers.requireAdmin,
        allUsers: routeResolvers.allUsers
      }
    })
    .when('/users', {
      // controller: 'userListCtrl',
      // templateUrl: 'admin/userlist.html',
      // controllerAs: 'vm',
      template: '<user-list all-users="$resolve.allUsers"></user-list>',
      resolve: {
        admin: routeResolvers.requireAdmin,
        allUsers: routeResolvers.allUsers
      }
    })
    .when('/admin/createusers', {
      // controller: 'createUsersCtrl',
      // templateUrl: 'admin/createUsers.html',
      // controllerAs: 'vm',
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
      // controller: 'profileCtrl',
      // templateUrl: 'profile/profile.html',
      // controllerAs: 'vm',
      template: '<profile user-profile="$resolve.userProfile"></profile>',
      resolve: {
        userProfile: routeResolvers.loggedIn,
      }
    })
    .when('/createsession', {
      // controller: 'createNewSessionCtrl',
      // templateUrl: 'home/createNewSession.html',
      // controllerAs: 'vm',
      template: '<create-new-session user-sessions="$resolve.userSessions"></create-new-user>',
      resolve: {
        userSessions: routeResolvers.userSessions,
      }
    })
    .when('/login', {
      // controller: 'loginCtrl',
      // templateUrl: 'security/login.html',
      // controllerAs: 'vm',
      template: '<login></login>',
      resolve: {
        currentAuth: routeResolvers.waitForAuth
      }
    })
    .when('/logout', {
      // controller: 'logoutCtrl',
      // controllerAs: 'vm',
      template: '<logout></logout>'
    })
    .otherwise('/home')
})