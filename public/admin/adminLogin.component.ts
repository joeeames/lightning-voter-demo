
import { Component, Input, Inject } from '@angular/core';
import { NameParser } from './nameParser.service';
import { Users } from '../security/users.service';
import { Observable } from 'rxjs/Rx';
import { CurrentIdentity } from '../security/currentIdentity.service';
import { Auth } from '../security/auth.service';

@Component({
  selector: 'admin-login',
  templateUrl: "/admin/adminLogin.component.html"
})
export class AdminLoginComponent {
  email: string;
  password: string;
  
  constructor(
      @Inject('$location') private $location, 
      private currentIdentity: CurrentIdentity,
      private auth: Auth, 
      @Inject('toastr') private toastr) {

  }

  ngOnInit() {
    if(this.currentIdentity.authenticated()) {
      this.$location.path('/home');
    }
  }
   
  login() {
    this.auth.login({
      username: this.email,
      password: this.password
    }).catch((error:any) => {
      toastr.error(error);
      return Observable.throw(error)
    })
    .subscribe(() => {
      this.$location.path('/home');
    })
  }

}
    
    