import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetAddPanelComponent } from './dataset-add-panel.component';

describe('DatasetAddPanelComponent', () => {
  let component: DatasetAddPanelComponent;
  let fixture: ComponentFixture<DatasetAddPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetAddPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetAddPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
