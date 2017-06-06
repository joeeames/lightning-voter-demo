import { Component, Input, Inject } from '@angular/core';

@Component({
  selector: 'results',
  templateUrl: "./results.component.html"
})
export class ResultsComponent {
  @Input('allSessions') sessionsByVoteDesc;

  ngOnInit() {
    this.sessionsByVoteDesc.sort(function(session1, session2) {
      // reverse order
      return session2.voteCount - session1.voteCount;
    })
  }

}

