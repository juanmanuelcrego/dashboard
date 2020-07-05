import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabRepOperadorComponent } from './tab-rep-operador.component';

describe('TabRepOperadorComponent', () => {
  let component: TabRepOperadorComponent;
  let fixture: ComponentFixture<TabRepOperadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabRepOperadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabRepOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
