import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOperadorComponent } from './sidebar-operador.component';

describe('SidebarOperadorComponent', () => {
  let component: SidebarOperadorComponent;
  let fixture: ComponentFixture<SidebarOperadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarOperadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
