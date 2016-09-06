import { Component, Inject } from '@angular/core';
import { Auth } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'logout',
  template: "<div></div>"
})
export class LogoutComponent { 

  constructor(
      private router: Router,
      private auth: Auth) {

  }

  ngOnInit() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}