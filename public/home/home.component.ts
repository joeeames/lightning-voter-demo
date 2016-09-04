import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Sessions } from '../sessions/sessions.service';
import { UnreviewedTalkComponent } from './unreviewedTalk.component';
import { ZoomInDirective } from '../common/zoom-in.directive';
import { Session } from '../sessions/session.model';
import { CurrentUser } from '../security/currentUser.model';
import { NavComponent } from '../nav/nav.component';
import { UnreviewedSessionCount } from '../sessions/unreviewedSessionCount.service';

@Component({
  selector: 'home',
  templateUrl: '/home/home.component.html',
})
export class HomeComponent {
  @Input() userSessions: Session[];
  currentUser: CurrentUser;
  currentSessionToReview: Session;

  constructor(
    @Inject('currentIdentity') private currentIdentity,
    private sessions : Sessions, 
    @Inject('toastr') private toastr, 
    private unreviewedSessionCount: UnreviewedSessionCount) {
      this.currentUser = currentIdentity.currentUser;
      this.setNextSessionToReview();
  }

  setNextSessionToReview() {
    this.sessions.getNextUnreviewedSession(this.currentIdentity.currentUser.id)
        .subscribe((session:Session) => {
      this.currentSessionToReview = session;
    })
  }

  voteYes() {
    this.sessions.incrementVote(this.currentSessionToReview.id)
      .flatMap(() => this.sessions.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id))
      .subscribe(() => {
        this.setNextSessionToReview();
        
        // pull updated value
        this.unreviewedSessionCount.updateUnreviewedSessionCount();
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
