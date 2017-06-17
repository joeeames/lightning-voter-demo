import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'nav-wrapper'
})
export class NavWrapperComponent extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('nav-wrapper', elementRef, injector);
  }
}

declare var angular: angular.IAngularStatic;

angular.module('app').component('nav-wrapper', {
  template: '<my-nav></my-nav>',
  bindings: {
  },
  controller: function() {
    
  }
});