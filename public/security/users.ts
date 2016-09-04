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


/*
import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class Users {
  
  constructor(private http: Http) { 
  }
  
  createNewUser(newUser) {
    return this.http.post('/api/users', newUser);
  }
  
  getAllUsers() {
    // replace this with an observable
    var dfd = this.$q.defer();
    
    this.http.get('/api/users').then(response => {
      dfd.resolve(response.data);
    })
    
    return dfd.promise;
  }
};
*/