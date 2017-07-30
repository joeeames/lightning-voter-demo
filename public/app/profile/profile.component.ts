import { Component, Inject } from '@angular/core';
// import { TOASTR_TOKEN, Toastr } from "../toastr/toastr.service";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent { 
  currentIdentity: any;

  constructor(/*$location, toastr, currentIdentity*/) {
    this.currentIdentity = {currentUser: {firstName: 'joe', lastName: 'eames'}}    
  }

  // this.profile = angular.copy(currentIdentity.currentUser);
      
  save() {
    // this.currentIdentity.updateUser(this.profile);
    // toastr.success('Profile Saved!');
  }
  
  cancel() {
    // this.$location.path('/home');
  }
}