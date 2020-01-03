import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellsChartComponent } from './cells-chart.component';

describe('CellsChartComponent', () => {
  let component: CellsChartComponent;
  let fixture: ComponentFixture<CellsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
