import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacionAgencieroComponent } from './facturacion-agenciero.component';

describe('FacturacionAgencieroComponent', () => {
  let component: FacturacionAgencieroComponent;
  let fixture: ComponentFixture<FacturacionAgencieroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturacionAgencieroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturacionAgencieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
