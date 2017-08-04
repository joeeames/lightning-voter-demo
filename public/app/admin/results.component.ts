import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'results',
  templateUrl: "./results.component.html"
})
export class ResultsComponent {
  sessionsByVoteDesc: any;
  sessions: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.forEach((data) => {
      this.sessionsByVoteDesc = data['sessions'];
    })
    this.sessionsByVoteDesc.sort(function(session1, session2) {
      // reverse order
      return session2.voteCount - session1.voteCount;
    })
  }

}