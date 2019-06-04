import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexaHelpComponent } from './alexa-help.component';

describe('AlexaHelpComponent', () => {
  let component: AlexaHelpComponent;
  let fixture: ComponentFixture<AlexaHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlexaHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlexaHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
