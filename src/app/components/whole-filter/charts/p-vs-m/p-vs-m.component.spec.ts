import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PVsMComponent } from './p-vs-m.component';

describe('PVsMComponent', () => {
  let component: PVsMComponent;
  let fixture: ComponentFixture<PVsMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PVsMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PVsMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
