import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosOperadorComponent } from './usuarios-operador.component';

describe('UsuariosOperadorComponent', () => {
  let component: UsuariosOperadorComponent;
  let fixture: ComponentFixture<UsuariosOperadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosOperadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
