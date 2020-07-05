import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesAgencieroComponent } from './reportes-agenciero.component';

describe('ReportesAgencieroComponent', () => {
  let component: ReportesAgencieroComponent;
  let fixture: ComponentFixture<ReportesAgencieroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesAgencieroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesAgencieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
