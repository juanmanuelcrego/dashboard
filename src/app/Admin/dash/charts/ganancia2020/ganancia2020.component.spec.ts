import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ganancia2020Component } from './ganancia2020.component';

describe('Ganancia2020Component', () => {
  let component: Ganancia2020Component;
  let fixture: ComponentFixture<Ganancia2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ganancia2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ganancia2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
