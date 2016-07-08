import { Injectable } from '@angular/core';

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
  
}