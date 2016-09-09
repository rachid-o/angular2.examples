import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/subject';
import 'rxjs/add/operator/toPromise';
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
  

  observableCall(): Observable<any> {
    // return Observable.fromPromise(this.mediumCall());
    // return null;
    return new Observable( (observer:any) => {
          setTimeout(() => {
              observer.next(21);
          }, 500);
          setTimeout(() => {
              observer.next(42);
          }, 1000);
          setTimeout(() => {
              observer.complete();
          }, 1500);
    });

    // let subject = new Subject<string>();
    // subject.next('1');
    // subject.complete();
    // return subject.asObservable();

    // return this.internalCall1().subscribe(result => {
    //   console.log(result);
    //   return this.internalCall2();
    // })
  }


  // private internalCall1(): Observable<any> {
  //   return new Observable(observer => {
  //     observer.next('internal call 1');
  //     setTimeout(() => {
  //       observer.complete();
  //     }, 500);
  //   });
  // }


  // private internalCall2(): Observable<any> {
  //   return new Observable(observer => {
  //     observer.next('internal call 2');
  //     setTimeout(() => {
  //       observer.complete();
  //     }, 500);
  //   });
  // }

}