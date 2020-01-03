import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APrioriSafeChartComponent } from './a-priori-safe-chart.component';

describe('APrioriSafeChartComponent', () => {
  let component: APrioriSafeChartComponent;
  let fixture: ComponentFixture<APrioriSafeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APrioriSafeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APrioriSafeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
