import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

export interface Session {
  id: number;
  name: string;
  speaker?: Speaker;
  timeStart: Date;
}

export interface Speaker {
  name: string;
  bio?: string;
}

@Injectable()
export class SessionService {

  constructor(public http: Http) { }

  public getSessions(): Array<Session> {
    return this.createSessions();
  }

  public getSessionsFromFile(): Promise<Array<Session>> {
    return this.http.get('./app/json/schedule.json')
      .map((res: Response) => res.json()).toPromise();
  }

  private createSessions(): Array<Session> {
    let sessions: Array<Session> = [];
    sessions = <Array<Session>>[
      {
        id: 1,
        name: 'Welcome',
        speaker: { name: 'Hans' },
        timeStart: new Date()
      },
      {
        id: 2,
        name: 'Opening',
        speaker: { name: 'Klaas' },
        timeStart: new Date('2016-04-19T06:00:00')
      },
    ];
    return sessions;
  }
}
