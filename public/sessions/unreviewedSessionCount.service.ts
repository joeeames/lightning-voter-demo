import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Session } from './session.model';
import { Sessions } from './sessions.service';
import { CurrentIdentity } from '../security/currentIdentity.service';

@Injectable()
export class UnreviewedSessionCount {
  value: number;
  
  constructor(private sessions: Sessions, 
    private currentIdentity:CurrentIdentity) {
      this.value = 0;
  }
  
  updateUnreviewedSessionCount(cb?) {
    this.sessions.getUnreviewedCount(this.currentIdentity.currentUser.id)
        .subscribe(response => {
          
      this.value = response.json().count;
      if(cb) {
        cb();
      }
    })
  }
}


