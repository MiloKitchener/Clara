import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaNodeGenerateComponent } from './idea-node-generate.component';

describe('IdeaNodeGenerateComponent', () => {
  let component: IdeaNodeGenerateComponent;
  let fixture: ComponentFixture<IdeaNodeGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaNodeGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaNodeGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
