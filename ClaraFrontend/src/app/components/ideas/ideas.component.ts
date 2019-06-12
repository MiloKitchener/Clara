import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { IdeaAnchorDirective } from '../../directives/idea-anchor.directive';
import { Post } from '../../classes/post';
import { IdeaNodeComponent } from '../idea-node/idea-node.component';
import { IdeasService } from 'src/app/services/ideas/ideas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})

export class IdeasComponent implements OnInit {

  // instance variables
  @ViewChild(IdeaAnchorDirective, { static: true }) ideaAnchor: IdeaAnchorDirective;

  private posts: Post[];
  private filters: string[];
  private arrangedFilters: string[];
  private selectedFilter: string;

  private newPostForm: FormGroup;

  private toggleNewPostView: boolean;
  private newPostSubmitted: boolean;

  constructor(
    private ideasService: IdeasService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    // load posts, add post updating
    this.loadPosts();
    this.ideasService.postUpdateEmitter.subscribe(() => {
      this.loadPosts();
    });

    // instantiate instance variables
    this.newPostForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      tag: ['None', Validators.required]
    });
    this.selectedFilter = 'None';
    this.toggleNewPostView = false;
    this.newPostSubmitted = false;

    // Get variables from service
    this.filters = this.ideasService.getFilters();
    this.arrangedFilters = this.ideasService.getArrangedFilters();
  }

  // selects a filter
  private selectFilter(name: string) {
    this.selectedFilter = name;
  }

  // makes the newPostPanel visible
  private viewNewPost() {
    this.toggleNewPostView = true;
  }

  // removes newPostPanel visibility
  private closeNewPost() {
    this.toggleNewPostView = false;
  }

  // Adds a new idea post
  private submitPost() {
    this.newPostSubmitted = true;
    this.ideasService.addPost(this.newPostForm.value);
  }

  // loads new posts
  loadPosts() {
    this.ideasService.getPostsObservable().subscribe((posts: Post[]) => {
      this.posts = posts;
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(IdeaNodeComponent);
      const viewContainerRef = this.ideaAnchor.viewContainerRef;
      viewContainerRef.clear();

      const componentRefs = [];
      this.posts.forEach((post) => {
        this.ideasService.getCommentsObservable(post).subscribe((comments: Comment[]) => {
          post.comments = comments || [];
          const componentRef = viewContainerRef.createComponent(componentFactory);
          componentRefs.push(componentRef);
          (componentRef.instance as IdeaNodeComponent).post = post;
        });
      });
    });
  }

  /************************************
   * Form Getters
   ***********************************/

  // signup form getter
  get newPostF() {
    return this.newPostForm.controls;
  }

}
