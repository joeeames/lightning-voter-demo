import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',

  template: `
    <div class="ng-view"></div>
  `
  //<router-outlet></router-outlet>
})
export class AppComponent {
}