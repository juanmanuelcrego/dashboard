import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAgencieroComponent } from './sidebar-agenciero.component';

describe('SidebarAgencieroComponent', () => {
  let component: SidebarAgencieroComponent;
  let fixture: ComponentFixture<SidebarAgencieroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarAgencieroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAgencieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
