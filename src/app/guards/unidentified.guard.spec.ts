import { TestBed } from '@angular/core/testing';

import { UnidentifiedGuard } from './unidentified.guard';

describe('UnidentifiedGuard', () => {
  let guard: UnidentifiedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnidentifiedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
