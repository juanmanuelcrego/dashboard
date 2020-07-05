import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carton2020Component } from './carton2020.component';

describe('Carton2020Component', () => {
  let component: Carton2020Component;
  let fixture: ComponentFixture<Carton2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carton2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carton2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
