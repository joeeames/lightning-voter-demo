import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { CurrentIdentity } from './currentIdentity.service'

@Injectable()
export class Auth {

  constructor(private http: Http, 
      private currentIdentity: CurrentIdentity) {
  }
  
  login(credentials) {
    return this.http.post('/api/login', credentials)
    .catch((error:any) => {
      return Observable.throw("Invalid Credentials");
    })
    .map((response:Response) => {
      this.currentIdentity.setUser(response.json().user);
      return this.currentIdentity;
    });
  }
    
  logout() {
    this.http.post('/api/logout', {})
    .catch(() => Observable.throw("Error Logging Out"))
    .subscribe((response: Response) => {
      this.currentIdentity.clearUser();
    })
  }
    
  waitForAuth() {
    return this.http.get('/api/currentIdentity')
    .map((response: Response) => {
      if(!!response.text()) {
        this.currentIdentity.setUser(response.json());
      }
      return this.currentIdentity;
    })
  }
    
  requireLogin() {
    return this.waitForAuth().flatMap((a:any) => {
      if(this.currentIdentity.authenticated()) {
        return Observable.of(true);
      } else {
        return Observable.throw('AUTH_REQUIRED');
      }
    })
  }
    
  requireAdmin() {
    return this.waitForAuth().flatMap(() => {
      if(this.currentIdentity.authenticated() && this.currentIdentity.currentUser.isAdmin) {
        return Observable.of(true);
      } else {
        return Observable.throw('AUTH_REQUIRED');
      }
    })
  }
}