import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetsPage } from './datasets.page';

describe('DatasetsPage', () => {
  let component: DatasetsPage;
  let fixture: ComponentFixture<DatasetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
