import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasOperadorComponent } from './alertas-operador.component';

describe('AlertasOperadorComponent', () => {
  let component: AlertasOperadorComponent;
  let fixture: ComponentFixture<AlertasOperadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertasOperadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertasOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
