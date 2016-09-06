import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Auth } from './security/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private auth: Auth, 
    private router: Router) {}

  canActivate() {
    var o = this.auth.requireLogin();

    o.subscribe(loggedIn => {
        if(!loggedIn) {
          this.router.navigate(['/login'])
        }
    });
    return o;
  }
} 