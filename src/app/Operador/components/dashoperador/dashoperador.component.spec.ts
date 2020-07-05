import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashoperadorComponent } from './dashoperador.component';

describe('DashoperadorComponent', () => {
  let component: DashoperadorComponent;
  let fixture: ComponentFixture<DashoperadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashoperadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashoperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
