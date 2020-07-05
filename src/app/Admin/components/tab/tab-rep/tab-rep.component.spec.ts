import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabRepComponent } from './tab-rep.component';

describe('TabRepComponent', () => {
  let component: TabRepComponent;
  let fixture: ComponentFixture<TabRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
