import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeVsFppComponent } from './safe-vs-fpp.component';

describe('SafeVsFppComponent', () => {
  let component: SafeVsFppComponent;
  let fixture: ComponentFixture<SafeVsFppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeVsFppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeVsFppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
