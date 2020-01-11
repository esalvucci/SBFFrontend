import { TestBed } from '@angular/core/testing';

import { DataResultsService } from './data-results.service';

describe('DataResultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataResultsService = TestBed.get(DataResultsService);
    expect(service).toBeTruthy();
  });
});
