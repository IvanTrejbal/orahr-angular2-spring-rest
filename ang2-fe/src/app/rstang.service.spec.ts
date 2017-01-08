/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RstangService } from './rstang.service';

describe('RstangService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RstangService]
    });
  });

  it('should ...', inject([RstangService], (service: RstangService) => {
    expect(service).toBeTruthy();
  }));
});
