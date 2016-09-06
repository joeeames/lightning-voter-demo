import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//remove this when this gets converted to ng2
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
    this.currentUser = null;
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
    this.http.put('/api/users/' + this.currentUser.id, newUserObj)
        .map((response:Response) => {
      this.currentUser.firstName = newUserObj.firstName;
      this.currentUser.lastName = newUserObj.lastName;
    })
    .subscribe()
  }
};