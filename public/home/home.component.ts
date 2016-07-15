import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Sessions } from '../sessions/sessions.service';
import {  NG1_COMPONENTS } from '../upgradedNg1Components';
import { UnreviewedTalkComponent } from './unreviewedTalk.component';

@Component({
  selector: 'home',
  templateUrl: '/home/home.component.html',
  directives: [NG1_COMPONENTS, UnreviewedTalkComponent]
})
export class HomeComponent {
  @Input() userSessions: any;
  currentUser: any;
  currentSessionToReview: any;

  constructor(
    @Inject('currentIdentity') private currentIdentity,
    private sessions : Sessions, 
    @Inject('toastr') private toastr, 
    @Inject('unreviewedSessionCount') private unreviewedSessionCount) {
      this.currentUser = currentIdentity;
      this.setNextSessionToReview();
  }

  setNextSessionToReview() {
    this.sessions.getNextUnreviewedSession(this.currentIdentity.currentUser.id)
        .subscribe((data) => {
      this.currentSessionToReview = data;
    })
  }

  voteYes() {
    this.sessions.incrementVote(this.currentSessionToReview.id)
    .subscribe(() => {
      this.sessions.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id)
      .subscribe(() => {
        this.setNextSessionToReview();
        
        // pull updated value
        this.unreviewedSessionCount.updateUnreviewedSessionCount();
      })
    })
    
  }
  
  voteNo() {
    this.sessions.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id)
    .subscribe(() => {
      this.setNextSessionToReview();

      // pull updated value
      this.unreviewedSessionCount.updateUnreviewedSessionCount();
    })
  }
}
