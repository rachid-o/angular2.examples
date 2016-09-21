import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/subject';
import 'rxjs/add/operator/toPromise';
// import { Observer } from 'rxjs/Observer';
// import 'rxjs/add/operator/fromPromise';
// import 'rxjs/add/operator/from';
// import 'rxjs/observable/fromPromise';

@Injectable()
export class SlowService {

  mediumCall(): Promise<string> {
    return this.step1().then(result => {
      console.log(result);
      return this.step2()
    }).then(result => {
      console.log(result);
      return this.step3()
    });

  }

  step1(): Promise<string> {
    return new Promise<string>(resolve => setTimeout(() => resolve('step 1'), 1000) );
  }

  step2(): Promise<string> {
    return new Promise<string>(resolve => setTimeout(() => resolve('step 2'), 1000) );
  }

  step3(): Promise<string> {
    return new Promise<string>(resolve => setTimeout(() => resolve('step 3'), 1000) );
  }


  observableCall1(): Observable<string> {
    return Observable.create((observer:any) => {
      setTimeout(() => {
        observer.next('step 1');
        observer.complete();
      }, 1000);
    });
  }

  observableCall2(): Observable<string> {
    return Observable.create((observer:any) => {
        setTimeout(() => {
            observer.next('step 2');
            observer.complete();
        }, 1000);
    });
  }
    observableCall3(): Observable<string> {
    return Observable.create((observer:any) => {
        setTimeout(() => {
            observer.next('step 3');
            observer.complete();
        }, 1000);
    });
  }
  
  // http://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/

  observableCall(): Observable<any> {

    let subject = new Subject<string>();

    this.observableCall1().subscribe((result1) => {
      console.log(result1);
      this.observableCall2().subscribe((result2) => {
        console.log(result2);
        this.observableCall3().subscribe((result3) => {
          console.log(result3);
          subject.next('final result: ' + result3);
        });
      });
    });

    return subject.asObservable();
  }

}