import { Injectable } from '@angular/core';
import { Sessions } from "./sessions.service";
import { CurrentIdentity } from "../security/currentIdentity.service";

@Injectable()
export class UnreviewedSessionCount {
  value: number;

  constructor(private sessions: Sessions, private currentIdentity: CurrentIdentity) {
    this.value = 0;
  }

  updateUnreviewedSessionCount() {
    this.sessions.getUnreviewedCount(this.currentIdentity.currentUser.id)
        .then(response => {
      this.value = response.count;
    })
  }
}