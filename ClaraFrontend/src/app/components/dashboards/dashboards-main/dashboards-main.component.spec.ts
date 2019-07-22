import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsMainComponent } from './dashboards-main.component';

describe('DashboardsMainComponent', () => {
  let component: DashboardsMainComponent;
  let fixture: ComponentFixture<DashboardsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
