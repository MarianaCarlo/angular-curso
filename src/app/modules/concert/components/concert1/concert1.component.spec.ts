import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Concert1Component } from './concert1.component';

describe('Concert1Component', () => {
  let component: Concert1Component;
  let fixture: ComponentFixture<Concert1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Concert1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Concert1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
