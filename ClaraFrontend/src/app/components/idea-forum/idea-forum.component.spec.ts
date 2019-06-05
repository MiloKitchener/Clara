import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaForumComponent } from './idea-forum.component';

describe('IdeaForumComponent', () => {
  let component: IdeaForumComponent;
  let fixture: ComponentFixture<IdeaForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
