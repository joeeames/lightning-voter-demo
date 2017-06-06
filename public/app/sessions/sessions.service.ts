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
  
  // getAllSessions() {
  //   var dfd = this.$q.defer();
    
  //   this.$http.get('/api/sessions').then(function(response) {
  //     dfd.resolve(response.data);
  //   }, function() {
  //     dfd.reject();
  //   });
  //   return dfd.promise;
  // }
  
  // createNewSession(newSession) {
  //   return this.$http.post('/api/sessions', newSession);
  // }
  
  // getNextUnreviewedSession(userId) {
  //   return this.$http.get(`/api/users/${userId}/randomUnreviewedSession`);
  // }
  
  // addReviewedSession(userId, sessionId) {
  //   return this.$http.post('/api/users/' + userId + '/reviewSession/' + sessionId);
  // }
  
  // incrementVote(sessionId) {
  //   return this.$http.put('/api/sessions/' + sessionId + '/incrementVote/');
  // }
  
  // getUnreviewedCount(userId) {
  //   return this.$http.get('/api/users/' + userId + '/unreviewedSessionCount');
  // }
};