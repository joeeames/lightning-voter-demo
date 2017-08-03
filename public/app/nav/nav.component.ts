import { Component, Inject } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Component({
  selector: 'app-nav',
  templateUrl: "./nav.component.html"
})
export class NavComponent {
  currentUser: any;

  constructor(@Inject('currentIdentity') private currentIdentity,
    @Inject('unreviewedSessionCount') private unreviewedSessionCount
) {
  }

  ngOnInit() {
    this.currentUser = this.currentIdentity.currentUser;
    
    this.unreviewedSessionCount.updateUnreviewedSessionCount();
  }
}