import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaNodeComponent } from './idea-node.component';

describe('IdeaNodeComponent', () => {
  let component: IdeaNodeComponent;
  let fixture: ComponentFixture<IdeaNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
