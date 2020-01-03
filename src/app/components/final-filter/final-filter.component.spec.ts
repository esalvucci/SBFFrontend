import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalFilterComponent } from './final-filter.component';

describe('FinalFilterComponent', () => {
  let component: FinalFilterComponent;
  let fixture: ComponentFixture<FinalFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
