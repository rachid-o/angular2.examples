import { Component, OnInit } from '@angular/core';
import { Session, SessionService } from './session.service';

@Component({
    templateUrl: 'app/json/json.component.html',
})

export class JSONComponent implements OnInit {

  private sessions: Array<Session>;

  constructor(private sessionService: SessionService) {
  }

  ngOnInit() {
    this.sessionService.getSessionsFromFile().then( (_sessions: Array<Session>) => {
      // console.log('getSessionsFromFile: ', _sessions);
      this.sessions = _sessions;
    });
  }
}
