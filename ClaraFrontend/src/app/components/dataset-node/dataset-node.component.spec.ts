import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetNodeComponent } from './dataset-node.component';

describe('DatasetNodeComponent', () => {
  let component: DatasetNodeComponent;
  let fixture: ComponentFixture<DatasetNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
