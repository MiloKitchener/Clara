import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSplashComponent } from './dashboard-splash.component';

describe('DashboardSplashComponent', () => {
  let component: DashboardSplashComponent;
  let fixture: ComponentFixture<DashboardSplashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSplashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
