import { Component, Inject } from '@angular/core';
import { CurrentIdentity } from './currentIdentity.service';

@Component({
  selector: 'login',
  templateUrl: "/security/login.component.html"
})
export class LoginComponent { 
  email: string;

  constructor(
      @Inject('$location') private $location, 
      currentIdentity:CurrentIdentity, 
      @Inject('auth') private auth,
      @Inject('toastr') private toastr) {
      
    if(currentIdentity.authenticated()) {
      $location.path('/home');
    }
  }
    
  login() {
    this.auth.login({
      username: this.email,
      password: "pass"
    }).then(() => {
      this.$location.path('/home');
    }, (err) => {
      this.toastr.error(err);
    })
  }
}
