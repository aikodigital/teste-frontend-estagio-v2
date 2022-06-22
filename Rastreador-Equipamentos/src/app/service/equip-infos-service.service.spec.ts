import { TestBed } from '@angular/core/testing';

import { EquipInfosServiceService } from './equip-infos-service.service';

describe('EquipInfosServiceService', () => {
  let service: EquipInfosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipInfosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
