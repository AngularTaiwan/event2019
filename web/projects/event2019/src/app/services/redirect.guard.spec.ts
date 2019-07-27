import { TestBed } from '@angular/core/testing';

import { RedirectGuard } from './redirect.guard';

describe('RedirectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedirectGuard = TestBed.get(RedirectGuard);
    expect(service).toBeTruthy();
  });
});
