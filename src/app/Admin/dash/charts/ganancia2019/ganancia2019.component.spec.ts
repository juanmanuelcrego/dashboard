import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ganancia2019Component } from './ganancia2019.component';

describe('Ganancia2019Component', () => {
  let component: Ganancia2019Component;
  let fixture: ComponentFixture<Ganancia2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ganancia2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ganancia2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
