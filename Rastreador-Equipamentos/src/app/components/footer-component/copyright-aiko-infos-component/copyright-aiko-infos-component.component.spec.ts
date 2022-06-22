import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightAikoInfosComponentComponent } from './copyright-aiko-infos-component.component';

describe('CopyrightAikoInfosComponentComponent', () => {
  let component: CopyrightAikoInfosComponentComponent;
  let fixture: ComponentFixture<CopyrightAikoInfosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyrightAikoInfosComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyrightAikoInfosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
