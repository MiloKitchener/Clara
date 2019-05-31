import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexaFeedComponent } from './alexa-feed.component';

describe('AlexaFeedComponent', () => {
  let component: AlexaFeedComponent;
  let fixture: ComponentFixture<AlexaFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlexaFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlexaFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
