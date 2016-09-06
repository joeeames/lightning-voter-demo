import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Sessions } from '../sessions/sessions.service';
import { UnreviewedTalkComponent } from './unreviewedTalk.component';
import { ZoomInDirective } from '../common/zoom-in.directive';
import { Session } from '../sessions/session.model';
import { CurrentUser } from '../security/currentUser.model';
import { NavComponent } from '../nav/nav.component';
import { UnreviewedSessionCount } from '../sessions/unreviewedSessionCount.service';
import { CurrentIdentity } from '../security/currentIdentity.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: '/home/home.component.html',
})
export class HomeComponent {
  @Input() userSessions: Session[];
  @Input() b: number;
  currentUser: CurrentUser;
  currentSessionToReview: Session;

  constructor(
    private currentIdentity: CurrentIdentity,
    private sessions : Sessions, 
    @Inject('toastr') private toastr, 
    private route: ActivatedRoute,
    private unreviewedSessionCount: UnreviewedSessionCount) {
      console.log('home');
      this.currentUser = currentIdentity.currentUser;
      this.setNextSessionToReview();

      this.route.data.subscribe(val => console.log('subscribe', val));
  }

  ngOnInit() {
    console.log(this.route.snapshot.data['userSessions'].length);
    this.userSessions = this.route.snapshot.data['userSessions'];
  }

  ngOnChanges() {
    console.log('changes', this.b, this.userSessions);
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
