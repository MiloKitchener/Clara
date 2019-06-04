import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDatasetsComponent } from './open-datasets.component';

describe('DatasetsComponent', () => {
  let component: OpenDatasetsComponent;
  let fixture: ComponentFixture<OpenDatasetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpenDatasetsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDatasetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
