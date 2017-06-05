import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'nav'
})
export class NavComponent extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('nav', elementRef, injector);
  }
}