import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CurrentIdentity } from "./currentIdentity.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class Auth {

  constructor(private http: Http, private currentIdentity: CurrentIdentity) {
  }

  getAuth() {
    return this.http.get('/api/currentIdentity')
    .map((rsp: Response) => {
      let data = rsp.json(); 
      return data;
    })
    .do(user => {
      this.currentIdentity.setUser(user);
    })
    
  }

  requireAdmin() {
    return this.getAuth()
    .map((user) => {
      return !!user && user.isAdmin;
    })
  }

  login(credentials) {
    var p = new Promise((resolve, reject) => {
      return this.http.post('/api/login', credentials)
      .map((rsp: Response) => {
        let data = rsp.json(); 
        return data;
      })
      .do(user => {
        if(!!user) {
          resolve()
          this.currentIdentity.setUser(user);
        }
      })
      .catch((err) => {
        if(err.status === 403) {
          reject("Invalid Credentials")
        } else {
          reject("Error " + err);
        }
        return Observable.of(null);
      })
      .subscribe();

    })
    return p;
  }
    
  logout() {
    return this.http.post('/api/logout', {})
    .do(response => {
      this.currentIdentity.clearUser();
    })
    .subscribe();
  }
    
}