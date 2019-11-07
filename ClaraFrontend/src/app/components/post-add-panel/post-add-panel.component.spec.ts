import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAddPanelComponent } from './post-add-panel.component';

describe('PostAddPanelComponent', () => {
  let component: PostAddPanelComponent;
  let fixture: ComponentFixture<PostAddPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAddPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAddPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
