import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PVsKComponent } from './p-vs-k.component';

describe('PVsKComponent', () => {
  let component: PVsKComponent;
  let fixture: ComponentFixture<PVsKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PVsKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PVsKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
