import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabUsrComponent } from './tab-usr.component';

describe('TabUsrComponent', () => {
  let component: TabUsrComponent;
  let fixture: ComponentFixture<TabUsrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabUsrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
