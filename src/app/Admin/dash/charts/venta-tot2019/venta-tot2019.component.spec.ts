import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaTot2019Component } from './venta-tot2019.component';

describe('VentaTot2019Component', () => {
  let component: VentaTot2019Component;
  let fixture: ComponentFixture<VentaTot2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaTot2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaTot2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
