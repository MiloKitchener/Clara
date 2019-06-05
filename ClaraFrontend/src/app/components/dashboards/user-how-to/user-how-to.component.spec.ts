import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHowToComponent } from './user-how-to.component';

describe('UserHowToComponent', () => {
  let component: UserHowToComponent;
  let fixture: ComponentFixture<UserHowToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHowToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHowToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
