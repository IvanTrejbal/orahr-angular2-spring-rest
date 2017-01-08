/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmpBaseService } from './emp-base.service';

describe('EmpBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpBaseService]
    });
  });

  it('should ...', inject([EmpBaseService], (service: EmpBaseService) => {
    expect(service).toBeTruthy();
  }));
});
