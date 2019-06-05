import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedHowToComponent } from './shared-how-to.component';

describe('SharedHowToComponent', () => {
  let component: SharedHowToComponent;
  let fixture: ComponentFixture<SharedHowToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedHowToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedHowToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
