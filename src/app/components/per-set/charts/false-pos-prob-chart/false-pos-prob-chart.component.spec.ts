import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FalsePosProbChartComponent } from './false-pos-prob-chart.component';

describe('FalsePosProbChartComponent', () => {
  let component: FalsePosProbChartComponent;
  let fixture: ComponentFixture<FalsePosProbChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FalsePosProbChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FalsePosProbChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
