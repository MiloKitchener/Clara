import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArUploadComponent } from './ar-upload.component';

describe('ArUploadComponent', () => {
  let component: ArUploadComponent;
  let fixture: ComponentFixture<ArUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
