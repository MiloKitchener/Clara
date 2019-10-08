import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDataGraphPanelComponent } from './open-data-graph-panel.component';

describe('LiveDataGraphPanelComponent', () => {
  let component: LiveDataGraphPanelComponent;
  let fixture: ComponentFixture<LiveDataGraphPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveDataGraphPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveDataGraphPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
