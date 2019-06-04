import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetsHowToComponent } from './datasets-how-to.component';

describe('DatasetsHowToComponent', () => {
  let component: DatasetsHowToComponent;
  let fixture: ComponentFixture<DatasetsHowToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetsHowToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetsHowToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
