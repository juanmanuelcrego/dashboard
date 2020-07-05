import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosAgencieroComponent } from './usuarios-agenciero.component';

describe('UsuariosAgencieroComponent', () => {
  let component: UsuariosAgencieroComponent;
  let fixture: ComponentFixture<UsuariosAgencieroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosAgencieroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosAgencieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
