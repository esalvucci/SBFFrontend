import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PVsNComponent } from './p-vs-n.component';

describe('PVsNComponent', () => {
  let component: PVsNComponent;
  let fixture: ComponentFixture<PVsNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PVsNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PVsNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
