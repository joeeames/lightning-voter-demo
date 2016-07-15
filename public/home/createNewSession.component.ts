import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { NG1_COMPONENTS } from '../upgradedNg1Components';
import { Sessions } from '../sessions/sessions.service';
import { Response } from '@angular/http';

@Component({
  selector: 'create-new-session',
  templateUrl: '/home/createNewSession.component.html',
  directives: [NG1_COMPONENTS]
})
export class CreateNewSessionComponent {
  @Input() userSessions: any;
  title: string;
  length: string;
  abstract: string;

  constructor(
    @Inject('toastr') private toastr:any,
    @Inject('currentIdentity') private currentIdentity:any,
    private sessions: Sessions) {

  }

  create(newUserSession) {
    newUserSession.userFirstName = this.currentIdentity.currentUser.firstName,
    newUserSession.userLastName = this.currentIdentity.currentUser.lastName,
    newUserSession.userId = this.currentIdentity.currentUser.id,
    
    this.sessions.createNewSession(newUserSession)
        .subscribe((data: any) => {
      this.userSessions.push(data);
    })

  }
} 

