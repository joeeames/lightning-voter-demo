import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Sessions } from '../sessions/sessions.service';
import { Response } from '@angular/http';
import { Session } from '../sessions/session.model';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'create-new-session',
  templateUrl: '/home/createNewSession.component.html',
  directives: [NavComponent]
})
export class CreateNewSessionComponent {
  @Input() userSessions: Session[];
  title: string;
  length: string;
  abstract: string;

  constructor(
    @Inject('toastr') private toastr:any,
    @Inject('currentIdentity') private currentIdentity:any,
    private sessions: Sessions) {

  }

  create(newUserSession:Session) {
    newUserSession.userFirstName = this.currentIdentity.currentUser.firstName,
    newUserSession.userLastName = this.currentIdentity.currentUser.lastName,
    newUserSession.userId = this.currentIdentity.currentUser.id,
    
    this.sessions.createNewSession(newUserSession)
        .subscribe((data: Session) => {
      this.userSessions.push(data);
    })

  }
} 

