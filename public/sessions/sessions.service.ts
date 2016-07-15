import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class Sessions {

  constructor(private http: Http) {
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
  }
  
  getNextUnreviewedSession(userId) {
    return this.http
      .get(`/api/users/${userId}/randomUnreviewedSession`)
      .map((rsp: Response) => {
        if(rsp.text() !== "")
          return rsp.json();
        else
          return null;
      });
  }
  
  addReviewedSession(userId, sessionId) {
    return this.http.post('/api/users/' + userId + '/reviewSession/' + sessionId, null);
  }

  getAllSessions() {
    return this.http.get('/api/sessions/')
      .map((rsp: Response) => {
        return rsp.json(); 
      });
  }
  
  incrementVote(sessionId) {
    return this.http.put('/api/sessions/' + sessionId + '/incrementVote/', null);
  }
  
  getUnreviewedCount(userId) {
    return this.http.get('/api/users/' + userId + '/unreviewedSessionCount');
  }
};