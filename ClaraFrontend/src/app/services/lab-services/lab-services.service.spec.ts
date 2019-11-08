import { TestBed } from '@angular/core/testing';

import { LabServicesService } from './lab-services.service';

describe('LabServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LabServicesService = TestBed.get(LabServicesService);
    expect(service).toBeTruthy();
  });
});
