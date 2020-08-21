import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shared1Component } from './shared1.component';

describe('Shared1Component', () => {
  let component: Shared1Component;
  let fixture: ComponentFixture<Shared1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shared1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shared1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
