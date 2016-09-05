import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class Users {
  
  constructor(private http: Http) { 
  }
  
  createNewUser(newUser) {
    return this.http.post('/api/users', newUser);
  }
  
  getAllUsers() {
    return this.http.get('/api/users').map((response: Response) => {
      return response.json();
    })
  }
};
