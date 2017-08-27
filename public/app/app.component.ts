import { Component } from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
    <div class="ng-view"></div>
  `
})
export class AppComponent {}