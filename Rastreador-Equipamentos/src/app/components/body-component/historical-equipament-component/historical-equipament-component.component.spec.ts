import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalEquipamentComponentComponent } from './historical-equipament-component.component';

describe('HistoricalEquipamentComponentComponent', () => {
  let component: HistoricalEquipamentComponentComponent;
  let fixture: ComponentFixture<HistoricalEquipamentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalEquipamentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalEquipamentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
