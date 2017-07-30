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
}