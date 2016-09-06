import { Component, Inject } from '@angular/core';
import { CurrentIdentity } from './currentIdentity.service';
import { Observable } from 'rxjs/Rx';
import { Auth } from './auth.service';

@Component({
  selector: 'login',
  templateUrl: "/security/login.component.html"
})
export class LoginComponent { 
  email: string;

  constructor(
      @Inject('$location') private $location, 
      currentIdentity:CurrentIdentity, 
      private auth: Auth,
      @Inject('toastr') private toastr) {
      
    if(currentIdentity.authenticated()) {
      $location.path('/home');
    }
  }
    
  login() {
    this.auth.login({
      username: this.email,
      password: "pass"
    }).catch((error:any) => {
      this.toastr.error(error);
      return Observable.throw(error)
    }).subscribe(() => {
      this.$location.path('/home');
    })
  }
}
