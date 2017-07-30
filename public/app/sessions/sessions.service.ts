import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class Sessions {

  constructor(private http: Http) {
  }

  getSessionsByUser(userId) {
    return this.http.get('/api/sessions/user/' + userId)
      .map((rsp: Response) => {
        let data = rsp.json(); 
        return data;
      })
      .toPromise();
  }
  
  getAllSessions() {
    return this.http.get('/api/sessions')
      .map((rsp:Response) => {
        let data = rsp.json();
        return data;
      })
      .toPromise()
  }
  
  createNewSession(newSession) {
    return this.http.post('/api/sessions', newSession)
      .map((rsp:Response) => {
        let data = rsp.json();
        return data;
      })
      .toPromise();
  }
  
  getNextUnreviewedSession(userId) {
    return this.http.get(`/api/users/${userId}/randomUnreviewedSession`)
      .map((rsp:Response) => {
        let data = null;
        if(rsp.text() !== "") {
          data = rsp.json();
        }
        return data;
      })
      .toPromise();
  }
  
  addReviewedSession(userId, sessionId) {
    return this.http.post('/api/users/' + userId + '/reviewSession/' + sessionId, {})
      .toPromise();
  }
  
  incrementVote(sessionId) {
    return this.http.put('/api/sessions/' + sessionId + '/incrementVote/', {})
      .toPromise();
  }
  
  getUnreviewedCount(userId) {
    return this.http.get('/api/users/' + userId + '/unreviewedSessionCount')
      .map((rsp:Response) => {
        let data = rsp.json();
        return data;
      })
      .toPromise();
  }
}