import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/subject';
import 'rxjs/add/operator/toPromise';
// import { Observer } from 'rxjs/Observer';
// import 'rxjs/add/operator/fromPromise';
// import 'rxjs/add/operator/from';
// import 'rxjs/observable/fromPromise';

const SLEEPTIME = 1000;

@Injectable()
export class ObservableService {

  // http://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/
  // private missionAnnouncedSource = new Subject<string>();

  public behaviorSubject(): Observable<any> {
    // let BehaviourSubject = new BehaviorSubject(initialState);
    let subject = new Subject<string>();

    this.createObservable('step 1').subscribe((result1) => {
      console.debug(result1);
          subject.next(result1);
          subject.complete();
    });

    return subject.asObservable();

  }



  private createObservable(name: string): Observable<string> {
    return Observable.create((observer: any) => {
      console.debug('emit "' + name + '", after ' + SLEEPTIME + ' ms');
      setTimeout(() => {
        observer.next(name);
        observer.complete();
      }, SLEEPTIME);
    });
  }


}
