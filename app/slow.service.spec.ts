/* tslint:disable:no-unused-variable */
import { SlowService } from './slow.service';

import {
  expect, it, iit, xit,
  describe, ddescribe, xdescribe,
  beforeEach, beforeEachProviders, withProviders,
  async, inject
} from '@angular/core/testing';

import { By }             from '@angular/platform-browser';
import { provide }        from '@angular/core';
import { ViewMetadata }   from '@angular/core';
import { PromiseWrapper } from '@angular/core/src/facade/promise';

////////  SPECS  /////////////

describe('Tests on SlowService', () => {
    let service:SlowService; // = new SlowService();

    // beforeEach(() => {
    //   // init before each test?
    //   service = new SlowService();
    // });
 
    // it('This test should terminate after Promise is resolved', function(done) {
    //   console.log('BEGIN body of test for service;', service);
    //   service.mediumCall().then(result => { 
    //     console.log('result:', result);
    //     expect(result).toContain('step 3');
    //     console.log('Test is finished.');
    //     done();
    //   });
    //   console.log('END body of test');

    // }, 10000);  //       jasmine.DEFAULT_TIMEOUT_INTERVAL should be 10 secs here

});

