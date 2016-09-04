import { Component, Inject, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Sessions } from '../sessions/sessions.service';
import { CurrentUser } from '../security/currentUser.model';
import { UnreviewedSessionCount } from '../sessions/unreviewedSessionCount.service';

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
    private unreviewedSessionCount: UnreviewedSessionCount,
    private changeDetectorRef: ChangeDetectorRef) {

    this.currentUser = currentIdentity.currentUser;
    
    unreviewedSessionCount.updateUnreviewedSessionCount(function() {
      console.log(unreviewedSessionCount.value);
      changeDetectorRef.detectChanges();
    });
  }
  
}
