import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabUsrOperadorComponent } from './tab-usr-operador.component';

describe('TabUsrOperadorComponent', () => {
  let component: TabUsrOperadorComponent;
  let fixture: ComponentFixture<TabUsrOperadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabUsrOperadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabUsrOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
