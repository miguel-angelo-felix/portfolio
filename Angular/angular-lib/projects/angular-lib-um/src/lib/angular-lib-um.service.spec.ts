import { TestBed } from '@angular/core/testing';

import { AngularLibUmService } from './angular-lib-um.service';

describe('AngularLibUmService', () => {
  let service: AngularLibUmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularLibUmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
