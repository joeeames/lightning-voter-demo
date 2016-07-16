import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'detail-panel',
  templateUrl: '/common/detailPanel.component.html'
})
export class DetailPanelComponent {
  @Input() title: string;
  @Input('collapsed') initialCollapsed;
  collapsed: boolean;

  ngOnChanges() {
    this.collapsed = (this.initialCollapsed === 'true');
  }

  collapse() {
    this.collapsed = !this.collapsed;
  }
} 
