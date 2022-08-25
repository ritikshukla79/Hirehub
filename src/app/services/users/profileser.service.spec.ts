import { TestBed } from '@angular/core/testing';

import { ProfileserService } from './profileser.service';

describe('ProfileserService', () => {
  let service: ProfileserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
