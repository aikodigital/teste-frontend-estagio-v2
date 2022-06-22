import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponentComponent } from './footer-component.component';

describe('FooterComponentComponent', () => {
  let component: FooterComponentComponent;
  let fixture: ComponentFixture<FooterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
