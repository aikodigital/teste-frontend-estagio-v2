import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideFilterListComponentComponent } from './aside-filter-list-component.component';

describe('AsideFilterListComponentComponent', () => {
  let component: AsideFilterListComponentComponent;
  let fixture: ComponentFixture<AsideFilterListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideFilterListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideFilterListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
