import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotCardsComponent } from './pilot-cards.component';

describe('PilotCardsComponent', () => {
  let component: PilotCardsComponent;
  let fixture: ComponentFixture<PilotCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
