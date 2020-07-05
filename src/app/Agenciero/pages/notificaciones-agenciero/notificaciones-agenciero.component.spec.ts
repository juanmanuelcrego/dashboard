import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesAgencieroComponent } from './notificaciones-agenciero.component';

describe('NotificacionesAgencieroComponent', () => {
  let component: NotificacionesAgencieroComponent;
  let fixture: ComponentFixture<NotificacionesAgencieroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionesAgencieroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionesAgencieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
