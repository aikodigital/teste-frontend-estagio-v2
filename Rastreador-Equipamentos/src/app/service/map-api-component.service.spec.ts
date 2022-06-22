import { TestBed } from '@angular/core/testing';

import { MapAPIComponentService } from './map-api-component.service';

describe('MapAPIComponentService', () => {
  let service: MapAPIComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapAPIComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
