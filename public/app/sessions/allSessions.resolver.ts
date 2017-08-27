import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Sessions } from "./sessions.service";

@Injectable()
export class AllSessionsResolver implements Resolve<any> {

  constructor(private sessions: Sessions) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.sessions.getAllSessions()
  }
}