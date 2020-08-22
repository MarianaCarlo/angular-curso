import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Provider1Component } from './provider1.component';

describe('Provider1Component', () => {
  let component: Provider1Component;
  let fixture: ComponentFixture<Provider1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Provider1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Provider1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
