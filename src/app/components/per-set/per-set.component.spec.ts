import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerSetComponent } from './per-set.component';

describe('PerSetComponent', () => {
  let component: PerSetComponent;
  let fixture: ComponentFixture<PerSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
