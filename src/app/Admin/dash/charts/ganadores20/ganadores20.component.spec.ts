import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ganadores20Component } from './ganadores20.component';

describe('Ganadores20Component', () => {
  let component: Ganadores20Component;
  let fixture: ComponentFixture<Ganadores20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ganadores20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ganadores20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
