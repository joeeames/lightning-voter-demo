import { Component, Inject } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { CurrentIdentity } from '../security/currentIdentity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: '/profile/profile.component.html'
})
export class ProfileComponent { 
  
  profile: any;

  constructor(
    private currentIdentity:CurrentIdentity,
    private router: Router,
    @Inject('toastr') private toastr:any
    ) {

    this.currentIdentity = currentIdentity;
  }
    
      
  save(newProfile) {
    this.currentIdentity.updateUser(newProfile);
    toastr.success('Profile Saved!');
  }
  
  cancel() {
    this.router.navigate(['/home']);
  }
  
}