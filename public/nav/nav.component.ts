import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Sessions } from '../sessions/sessions.service';
import { CurrentUser } from '../security/currentUser.model';

@Component({
  selector: 'nav',
  templateUrl: '/nav/nav.component.html'
})
export class NavComponent {

  currentUser: CurrentUser;
  
  constructor(
    @Inject('currentIdentity') private currentIdentity,
    private sessions : Sessions, 
    @Inject('toastr') private toastr, 
    @Inject('unreviewedSessionCount') private unreviewedSessionCount) {

    this.currentUser = currentIdentity.currentUser;
    
    unreviewedSessionCount.updateUnreviewedSessionCount();
  }
  
}
// angular.module('app').component('nav', {
//   templateUrl: '/nav/nav.html',
//   bindings: {
//   },
//   controller: function(currentIdentity, sessions, unreviewedSessionCount) {
    
//     this.currentUser = currentIdentity.currentUser;
    
//     unreviewedSessionCount.updateUnreviewedSessionCount();
//     this.unreviewedSessionCount = unreviewedSessionCount;
    
//   }
// });