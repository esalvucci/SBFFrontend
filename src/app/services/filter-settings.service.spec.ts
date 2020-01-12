import { TestBed } from '@angular/core/testing';

import { FilterSettingsService } from './filter-settings.service';

describe('FilterSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterSettingsService = TestBed.get(FilterSettingsService);
    expect(service).toBeTruthy();
  });
});
