import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class Sessions {

  constructor(private http: Http,
    @Inject('sessions_ng1') private sessions_ng1: any ) {
  }

  getSessionsByUser(userId) {
    return this.http.get('/api/sessions/user/' + userId)
      .map((rsp: Response) => {
        return rsp.json(); 
      });
  }
  
  createNewSession(newSession) {
    return this.http.post('/api/sessions', newSession)
      .map((rsp: Response) => {
        return rsp.json();
      });
    //return this.$http.post('/api/sessions', newSession);
  }
  
  getNextUnreviewedSession(userId) {
    return this.sessions_ng1.getNextUnreviewedSession(userId);
  }
  
  addReviewedSession(userId, sessionId) {
    return this.sessions_ng1.addReviewedSession(userId, sessionId);
  }
  
  incrementVote(sessionId) {
    return this.sessions_ng1.incrementVote(sessionId);
  }
  
  getUnreviewedCount(userId) {
    return this.sessions_ng1.getUnreviewedCount(userId);
  }
};