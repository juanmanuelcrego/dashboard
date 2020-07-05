import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jackpot20Component } from './jackpot20.component';

describe('Jackpot20Component', () => {
  let component: Jackpot20Component;
  let fixture: ComponentFixture<Jackpot20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jackpot20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jackpot20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
