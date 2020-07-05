import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaTotComponent } from './venta-tot.component';

describe('VentaTotComponent', () => {
  let component: VentaTotComponent;
  let fixture: ComponentFixture<VentaTotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaTotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaTotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
