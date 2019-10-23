import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGraphDialogComponent } from './add-graph-dialog.component';

describe('AddGraphDialogComponent', () => {
  let component: AddGraphDialogComponent;
  let fixture: ComponentFixture<AddGraphDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGraphDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGraphDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
