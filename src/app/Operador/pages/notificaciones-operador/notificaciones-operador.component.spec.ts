import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesOperadorComponent } from './notificaciones-operador.component';

describe('NotificacionesOperadorComponent', () => {
  let component: NotificacionesOperadorComponent;
  let fixture: ComponentFixture<NotificacionesOperadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionesOperadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionesOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
