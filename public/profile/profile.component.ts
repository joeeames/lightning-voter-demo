import { Component, Inject } from '@angular/core';
import { NG1_COMPONENTS } from '../upgradedNg1Components';

@Component({
  selector: 'profile',
  templateUrl: '/profile/profile.html',
  directives: [NG1_COMPONENTS]
})
export class ProfileComponent { 
  
  profile: any;

  constructor(
    @Inject('currentIdentity') private currentIdentity:any,
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