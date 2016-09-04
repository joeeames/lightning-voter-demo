import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { TalkDurationPipe } from '../common/talkDuration.pipe';

@Component({
  selector: 'unreviewed-talk',
  templateUrl: '/home/unreviewedTalk.component.html',
})
export class UnreviewedTalkComponent {
  @Input() session: any;
  @Output() voteYes = new EventEmitter();
  @Output() voteNo = new EventEmitter();

  yes() {
    this.voteYes.emit(null);
  }
  
  no() {
    this.voteNo.emit(null);
  }
} 