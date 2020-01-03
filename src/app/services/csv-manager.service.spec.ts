import { TestBed } from '@angular/core/testing';

import { CsvManagerService } from './csv-manager.service';

describe('CsvManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CsvManagerService = TestBed.get(CsvManagerService);
    expect(service).toBeTruthy();
  });
});
