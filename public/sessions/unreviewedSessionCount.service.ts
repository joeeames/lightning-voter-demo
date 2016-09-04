import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Session } from './session.model';
import { Sessions } from './sessions.service';

@Injectable()
export class UnreviewedSessionCount {
  value: number;
  
  constructor(private sessions: Sessions, 
    @Inject('currentIdentity') private currentIdentity:any) {
    this.value = 0;
  }
  
  updateUnreviewedSessionCount() {
    this.sessions.getUnreviewedCount(this.currentIdentity.currentUser.id)
        .subscribe(response => {
          
      this.value = response.json().count;
    })
  }
}


