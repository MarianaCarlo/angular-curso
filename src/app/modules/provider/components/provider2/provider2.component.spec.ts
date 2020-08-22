import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Provider2Component } from './provider2.component';

describe('Provider2Component', () => {
  let component: Provider2Component;
  let fixture: ComponentFixture<Provider2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Provider2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Provider2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
