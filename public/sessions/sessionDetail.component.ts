import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'session-detail',
  templateUrl: '/sessions/sessionDetail.component.html'
})
export class SessionDetailComponent {
  @Input() session: any;
  @Input() initialCollapsed: any;
}
