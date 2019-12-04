import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabServicesOptionsComponent } from './lab-services-options.component';

describe('LabServicesOptionsComponent', () => {
  let component: LabServicesOptionsComponent;
  let fixture: ComponentFixture<LabServicesOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabServicesOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabServicesOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
