import { Component, Inject } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
import { CurrentIdentity } from "../security/currentIdentity.service";
import { UnreviewedSessionCount } from "../sessions/unreviewedSessionCount.service";

@Component({
  selector: 'app-nav',
  templateUrl: "./nav.component.html"
})
export class NavComponent {
  currentUser: any;

  constructor(public currentIdentity: CurrentIdentity,
    public unreviewedSessionCount: UnreviewedSessionCount
) {
  }

  ngOnInit() {
    this.currentUser = this.currentIdentity.currentUser;
    
    this.unreviewedSessionCount.updateUnreviewedSessionCount();
  }
}