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


  observableCall1(): Observable<string> {
    return Observable.create((observer:any) => {
      setTimeout(() => {
        observer.next('step 1');
        observer.complete();
      }, 500);
    });
  }

  observableCall2(): Observable<string> {
    return Observable.create((observer:any) => {
        setTimeout(() => {
            observer.next('step 2');
            observer.complete();
        }, 500);
    });
  }
    observableCall3(): Observable<string> {
    return Observable.create((observer:any) => {
        setTimeout(() => {
            observer.next('step 3');
            observer.complete();
        }, 500);
    });
  }
  

  observableCall(): Observable<any> {
    // TODO: not working as Promise 
    return this.observableCall1().map(result => {
      console.debug('result of call 1:', result);
      // return result
      return this.observableCall2();
      // .map(result => {
      //     console.debug('result of call 2:', result);
      //     return result
      //   });
    });


    // .map(result => {
    //   console.debug('result of call 2:', result);
    //   return this.observableCall3();
    //   // return result
    // })


    // return this.observableCall1().subscribe(
    //   (result:any) => console.log(result),
    //   (error:any) => console.log('Error occured:', error),
    //   () => { 
    //     console.log('Done, return new Observable.'
    //     return new Observable( (observer:any) => {
    //         // observer.next('completed');
    //         observer.complete();
    //     });

    //   });

  }


  observableCallOne(): Observable<any> {
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
  }


}