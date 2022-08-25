import { TestBed } from '@angular/core/testing';

import { ServiceprofileService } from './serviceprofile.service';

describe('ServiceprofileService', () => {
  let service: ServiceprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
