import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[zoom-in]',
})
export class ZoomInDirective {
  private el: HTMLElement;
  
  constructor(el: ElementRef) {
    this.el = el.nativeElement;

    this.el.addEventListener('mouseenter', e => {
      this.el.style.transform="scale(1.1,1.1)";
    })
    this.el.addEventListener('mouseleave', e => {
      this.el.style.transform="scale(1,1)";
    })

  }
} 
