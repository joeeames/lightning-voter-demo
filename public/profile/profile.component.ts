import { Component, Inject } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: '/profile/profile.html'
})
export class profileComponent { 
  
  //function($location, toastr, currentIdentity) {

  profile: any;

  constructor(
    @Inject('currentIdentity') private currentIdentity:any,
    @Inject('$location') private $location:any,
    @Inject('toastr') private toastr:any
    ) {

    this.profile = angular.copy(currentIdentity.currentUser);
    this.currentIdentity = currentIdentity;
  }
    
      
  save() {
    this.currentIdentity.updateUser(this.profile);
    toastr.success('Profile Saved!');
  }
  
  cancel() {
    this.$location.path('/home');
  }
  
}