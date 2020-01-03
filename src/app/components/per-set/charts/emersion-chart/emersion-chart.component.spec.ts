import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmersionChartComponent } from './emersion-chart.component';

describe('EmersionChartComponent', () => {
  let component: EmersionChartComponent;
  let fixture: ComponentFixture<EmersionChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmersionChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmersionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
