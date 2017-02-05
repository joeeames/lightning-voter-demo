import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Session } from './sessions/session.model';
import { Sessions } from './sessions/sessions.service';
import { CurrentIdentity } from './security/currentIdentity.service';

@Injectable()
export class SessionResolver implements Resolve<Session[]> {
  
  constructor(private sessions: Sessions,
    private currentIdentity: CurrentIdentity) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    console.log('hi there', route, state);
    var o = this.sessions.getSessionsByUser(this.currentIdentity.currentUser.id)
    o.subscribe(val => {
      console.log('val', val);
    })
    return o;
  }
}