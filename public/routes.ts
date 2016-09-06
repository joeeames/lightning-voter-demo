// import { provideRouter, RouterConfig, CanActivate } from '@angular/router';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Rx';

// import { AdminLoginComponent } from './admin/adminlogin.component';
// import { ResultsComponent } from './admin/results.component';
// import { UserDetailsComponent } from './admin/userDetails.component';
// import { UserListComponent } from './admin/userList.component';
// import { CreateUsersComponent } from './admin/createUsers.component';
// import { HomeComponent } from './home/home.component';
// import { CreateNewSessionComponent } from './home/createNewSession.component';
// import { ProfileComponent } from './profile/profile.component';
// import { LoginComponent } from './security/login.component';
// import { LogoutComponent } from './security/logout.component';
// import { Auth } from './security/auth.service';

// export class LoggedInGuard implements CanActivate {

//   constructor(private auth: Auth) {}

//   canActivate() {
//     return Observable.of(true);
//   }
// }

// export const appRoutes: RouterConfig = [
//   { path: 'profile', component: ProfileComponent },
//   { path: 'login', component: LoginComponent, canActivate: [LoggedInGuard] },
//   { path: 'logout', component: LogoutComponent },
//   { path: 'createsession', component: CreateNewSessionComponent },
//   { path: 'home', component: HomeComponent },
//   { path: 'admin/createusers', component: CreateUsersComponent },
//   { path: 'users', component: UserListComponent },
//   { path: 'admin/users/:id', component: UserDetailsComponent },
//   { path: 'admin/results', component: ResultsComponent },
//   { path: 'admin/login', component: AdminLoginComponent },
  
//   { path: '', redirectTo: "/home", pathMatch: "full"}
// ]





app.config(function($routeProvider) {
  var routeResolvers = {
    loggedIn: function(auth, $q) {
      return auth.requireLogin().toPromise();
    },
    waitForAuth: function(auth) {
      return auth.waitForAuth().toPromise();
    },
    requireAdmin: function(auth, $q) {
      return auth.requireAdmin().toPromise();
    },
    userSessions: function(sessions, currentIdentity, auth, $q) {
      return auth.requireLogin().toPromise().then(function() {
        return sessions
          .getSessionsByUser(currentIdentity.currentUser.id)
          .toPromise();
      });
    },
    allSessions: function(sessions, auth, $q) {
      return auth.requireLogin().toPromise().then(function() {
        return sessions.getAllSessions().toPromise();
      });
    },
    allUsers: function(users, auth, $q) {
      return auth.requireLogin().toPromise().then(function() {
        return users.getAllUsers().toPromise();
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
      template: '<results [all-sessions]="$resolve.allSessions"></results>',
      resolve: {
        admin: routeResolvers.requireAdmin,
        allSessions: routeResolvers.allSessions
      }
    })
    .when('/admin/users/:id', {
      template: '<user-details [all-users]="$resolve.allUsers"></user-details>',
      resolve: {
        admin: routeResolvers.requireAdmin,
        allUsers: routeResolvers.allUsers
      }
    })
    .when('/users', {
      template: '<user-list [all-users]="$resolve.allUsers"></user-list>',
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
      template: '<home [user-sessions]="$resolve.userSessions"></home>',
      resolve: {
        login:routeResolvers.loggedIn,
        userSessions: routeResolvers.userSessions
      }
    })
    .when('/profile', {
      template: '<profile user-profile="$resolve.userProfile"></profile>',
      resolve: {
        userProfile: routeResolvers.loggedIn,
      }
    })
    .when('/createsession', {
      template: '<create-new-session [user-sessions]="$resolve.userSessions"></create-new-user>',
      resolve: {
        userSessions: routeResolvers.userSessions,
      }
    })
    .when('/login', {
      template: '<login></login>',
      resolve: {
        currentAuth: routeResolvers.waitForAuth
      }
    })
    .when('/logout', {
      template: '<logout></logout>'
    })
    .otherwise('/home')
})