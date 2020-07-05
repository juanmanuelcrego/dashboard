import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAgencieroComponent } from './dash-agenciero.component';

describe('DashAgencieroComponent', () => {
  let component: DashAgencieroComponent;
  let fixture: ComponentFixture<DashAgencieroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashAgencieroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashAgencieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
