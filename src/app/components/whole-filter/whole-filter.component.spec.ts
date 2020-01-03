import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeFilterComponent } from './whole-filter.component';

describe('WholeFilterComponent', () => {
  let component: WholeFilterComponent;
  let fixture: ComponentFixture<WholeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
