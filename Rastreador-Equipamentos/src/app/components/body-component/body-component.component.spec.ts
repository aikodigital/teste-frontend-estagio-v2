import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComponentComponent } from './body-component.component';

describe('BodyComponentComponent', () => {
  let component: BodyComponentComponent;
  let fixture: ComponentFixture<BodyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
