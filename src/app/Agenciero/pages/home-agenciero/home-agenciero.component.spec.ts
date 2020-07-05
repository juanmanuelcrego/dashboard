import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAgencieroComponent } from './home-agenciero.component';

describe('HomeAgencieroComponent', () => {
  let component: HomeAgencieroComponent;
  let fixture: ComponentFixture<HomeAgencieroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAgencieroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAgencieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
