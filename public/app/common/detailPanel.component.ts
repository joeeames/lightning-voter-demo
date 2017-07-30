import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'detail-panel',
  templateUrl: './detailPanel.component.html'
})
export class DetailPanelComponent {
  @Input() title: string;
  @Input('collapsed') initialCollapsed;
  collapsed: boolean;

  ngOnChanges() {
    console.log('coll', this.initialCollapsed);
    this.collapsed = (this.initialCollapsed === 'true');
  }

  collapse() {
    this.collapsed = !this.collapsed;
  }
} 
