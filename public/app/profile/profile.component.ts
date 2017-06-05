import { Component, Inject } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent { 
  
  profile: any;
  currentIdentity: any;

  constructor(
    // private currentIdentity:any,
    // private $location:any,
    // private toastr:any
    ) {

    // this.currentIdentity = currentIdentity;
    this.currentIdentity = {currentUser: {firstName: 'joe', lastName: 'eames'}}
  }
    
      
  save(newProfile) {
    // this.currentIdentity.updateUser(newProfile);
    toastr.success('Profile Saved!');
  }
  
  cancel() {
    // this.$location.path('/home');
  }
  
}