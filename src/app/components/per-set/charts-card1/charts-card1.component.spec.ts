import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsCard1Component } from './charts-card1.component';

describe('ChartsCard1Component', () => {
  let component: ChartsCard1Component;
  let fixture: ComponentFixture<ChartsCard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsCard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
