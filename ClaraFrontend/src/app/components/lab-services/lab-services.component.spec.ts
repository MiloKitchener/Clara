import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabServicesComponent } from './lab-services.component';

describe('LabServicesComponent', () => {
  let component: LabServicesComponent;
  let fixture: ComponentFixture<LabServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
