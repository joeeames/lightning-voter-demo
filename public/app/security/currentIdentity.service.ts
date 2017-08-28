import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

export interface CurrentUser {
  firstName: string;
  lastName: string;
  id: number;
  isAdmin: boolean;
}

@Injectable()
export class CurrentIdentity {
  currentUser: CurrentUser;

  constructor(private http: Http) {
  }

  setUser(user) {
    this.currentUser = user;
  }
  
  clearUser() {
    this.currentUser = null;
  }
  
  authenticated() {
    return !!this.currentUser;
  }
  
  updateUser(newUserObj) {
    let o = this.http.put('/api/users/' + this.currentUser.id, newUserObj)
    .do(() => {
      this.currentUser.firstName = newUserObj.firstName;
      this.currentUser.lastName = newUserObj.lastName;
    });
    o.subscribe();
    return o;
  }
}