import { TestBed } from '@angular/core/testing';

import { CanJobService } from './can-job.service';

describe('CanJobService', () => {
  let service: CanJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
