import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AikoInfoComponentComponent } from './aiko-info-component.component';

describe('AikoInfoComponentComponent', () => {
  let component: AikoInfoComponentComponent;
  let fixture: ComponentFixture<AikoInfoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AikoInfoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AikoInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
