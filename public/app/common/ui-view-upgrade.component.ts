import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from "@angular/upgrade/static";


@Directive({
  selector: 'nav-wrapper'
})
export class UIViewComponent extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    console.log('here')
    super('ui-view', elementRef, injector);
  }
}