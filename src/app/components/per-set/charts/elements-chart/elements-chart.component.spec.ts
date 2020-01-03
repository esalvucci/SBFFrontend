import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsChartComponent } from './elements-chart.component';

describe('ElementsChartComponent', () => {
  let component: ElementsChartComponent;
  let fixture: ComponentFixture<ElementsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
