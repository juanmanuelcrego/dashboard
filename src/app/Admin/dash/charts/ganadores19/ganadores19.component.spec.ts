import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ganadores19Component } from './ganadores19.component';

describe('Ganadores19Component', () => {
  let component: Ganadores19Component;
  let fixture: ComponentFixture<Ganadores19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ganadores19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ganadores19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
