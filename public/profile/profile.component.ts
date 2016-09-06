import { Component, Inject } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { CurrentIdentity } from '../security/currentIdentity.service';

@Component({
  selector: 'profile',
  templateUrl: '/profile/profile.component.html'
})
export class ProfileComponent { 
  
  profile: any;

  constructor(
    private currentIdentity:CurrentIdentity,
    @Inject('$location') private $location:any,
    @Inject('toastr') private toastr:any
    ) {

    this.currentIdentity = currentIdentity;
  }
    
      
  save(newProfile) {
    this.currentIdentity.updateUser(newProfile);
    toastr.success('Profile Saved!');
  }
  
  cancel() {
    this.$location.path('/home');
  }
  
}