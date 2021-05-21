import { TestBed } from '@angular/core/testing';

import { MockDBService } from './mock-db.service';

describe('MockDBService', () => {
  let service: MockDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
