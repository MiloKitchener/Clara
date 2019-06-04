import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialAPIDataComponent } from './official-apidata.component';

describe('OfficialAPIDataComponent', () => {
  let component: OfficialAPIDataComponent;
  let fixture: ComponentFixture<OfficialAPIDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficialAPIDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficialAPIDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
