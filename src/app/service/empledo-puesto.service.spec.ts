import { TestBed } from '@angular/core/testing';

import { EmpledoPuestoService } from './empledo-puesto.service';

describe('EmpledoPuestoService', () => {
  let service: EmpledoPuestoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpledoPuestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
