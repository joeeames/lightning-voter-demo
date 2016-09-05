import { Component, Inject } from '@angular/core';

@Component({
  selector: 'logout',
  template: "<div></div>"
})
export class LogoutComponent { 

  constructor(
      @Inject('$location') private $location,
      @Inject('auth') private auth) {

  }

  ngOnInit() {
    this.auth.logout();
  
    this.$location.path('/login');
  }
}