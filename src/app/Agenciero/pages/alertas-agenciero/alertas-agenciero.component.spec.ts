import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasAgencieroComponent } from './alertas-agenciero.component';

describe('AlertasAgencieroComponent', () => {
  let component: AlertasAgencieroComponent;
  let fixture: ComponentFixture<AlertasAgencieroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertasAgencieroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertasAgencieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
