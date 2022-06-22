import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponentComponent } from './map-component.component';

describe('MapComponentComponent', () => {
  let component: MapComponentComponent;
  let fixture: ComponentFixture<MapComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
