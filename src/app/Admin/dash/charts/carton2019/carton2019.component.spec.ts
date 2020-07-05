import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carton2019Component } from './carton2019.component';

describe('Carton2019Component', () => {
  let component: Carton2019Component;
  let fixture: ComponentFixture<Carton2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carton2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carton2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
