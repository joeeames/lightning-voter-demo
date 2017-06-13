
app.config(function($stateProvider, $urlRouterProvider) {
  var routeResolvers = {
    loggedIn: function(auth) {
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

  $stateProvider
    .state('admin_login', {
      url: '/admin/login',
      template: '<admin-login></admin-login>',
      resolve: {
        currentAuth: routeResolvers.waitForAuth
      }
    })
    .state('admin_results', {
      url: '/admin/results',
      template: '<results all-sessions="$resolve.allSessions"></results>',
      resolve: {
        admin: routeResolvers.requireAdmin,
        allSessions: routeResolvers.allSessions
      }
    })
    .state('admin_user', {
      url: '/admin/users/:id',
      template: '<user-details all-users="$resolve.allUsers"></user-details>',
      resolve: {
        admin: routeResolvers.requireAdmin,
        allUsers: routeResolvers.allUsers
      }
    })
    .state('users', {
      url: '/users',
      template: '<user-list all-users="$resolve.allUsers"></user-list>',
      resolve: {
        admin: routeResolvers.requireAdmin,
        allUsers: routeResolvers.allUsers
      }
    })
    .state('admin_createusers', {
      url: '/admin/createusers',
      template: '<create-users></create-users>',
      resolve:  {
        admin: routeResolvers.requireAdmin
      }
    })
    .state('home', {
      url: '/home',
      template: '<home user-sessions="$resolve.userSessions"></home>',
      resolve: {
        login:routeResolvers.loggedIn,
        userSessions: routeResolvers.userSessions
      }
    })
    .state('profile', {
      url: '/profile',
      template: '<profile user-profile="$resolve.userProfile"></profile>',
      resolve: {
        userProfile: routeResolvers.loggedIn,
      }
    })
    .state('createsession', {
      url: '/createsession',
      template: '<create-new-session user-sessions="$resolve.userSessions"></create-new-user>',
      resolve: {
        userSessions: routeResolvers.userSessions,
      }
    })
    .state('login', {
      url: '/login',
      template: '<login></login>',
      resolve: {
        currentAuth: routeResolvers.waitForAuth
      }
    })
    .state('/logout', {
      url: '/logout',
      template: '<logout></logout>'
    });

    $urlRouterProvider.otherwise('/home')


})