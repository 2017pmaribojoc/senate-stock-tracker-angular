import { TestBed } from '@angular/core/testing';

import { StockTrackerService } from './stock-tracker.service';

describe('StockTrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockTrackerService = TestBed.get(StockTrackerService);
    expect(service).toBeTruthy();
  });
});
