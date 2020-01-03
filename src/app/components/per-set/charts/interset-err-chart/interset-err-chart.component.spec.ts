import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntersetErrChartComponent } from './interset-err-chart.component';

describe('IntersetErrChartComponent', () => {
  let component: IntersetErrChartComponent;
  let fixture: ComponentFixture<IntersetErrChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntersetErrChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntersetErrChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
