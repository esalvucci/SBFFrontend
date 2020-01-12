import { TestBed } from '@angular/core/testing';

import { WholeFilterService } from './whole-filter.service';

describe('WholeFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WholeFilterService = TestBed.get(WholeFilterService);
    expect(service).toBeTruthy();
  });
});
