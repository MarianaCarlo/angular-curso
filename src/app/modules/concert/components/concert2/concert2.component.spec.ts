import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Concert2Component } from './concert2.component';

describe('Concert2Component', () => {
  let component: Concert2Component;
  let fixture: ComponentFixture<Concert2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Concert2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Concert2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
