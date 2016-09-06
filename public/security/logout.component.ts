import { Component, Inject } from '@angular/core';
import { Auth } from './auth.service';

@Component({
  selector: 'logout',
  template: "<div></div>"
})
export class LogoutComponent { 

  constructor(
      @Inject('$location') private $location,
      private auth: Auth) {

  }

  ngOnInit() {
    this.auth.logout();
  
    this.$location.path('/login');
  }
}