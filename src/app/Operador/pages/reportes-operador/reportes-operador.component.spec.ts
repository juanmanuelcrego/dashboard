import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesOperadorComponent } from './reportes-operador.component';

describe('ReportesOperadorComponent', () => {
  let component: ReportesOperadorComponent;
  let fixture: ComponentFixture<ReportesOperadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesOperadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
