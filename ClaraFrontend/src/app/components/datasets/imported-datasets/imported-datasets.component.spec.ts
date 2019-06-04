import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportedDatasetsComponent } from './imported-datasets.component';

describe('ImportedDatasetsComponent', () => {
  let component: ImportedDatasetsComponent;
  let fixture: ComponentFixture<ImportedDatasetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportedDatasetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportedDatasetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
