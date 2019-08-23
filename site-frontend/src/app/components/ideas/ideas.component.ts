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

  posts: Post[];
  filters: string[];
  arrangedFilters: string[];
  selectedFilter: string;

  newPostForm: FormGroup;
  searchDataForm: FormGroup;

  toggleNewPostView: boolean;
  newPostSubmitted: boolean;

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

    // Get variables from service
    this.filters = this.ideasService.getFilters();
    this.arrangedFilters = this.ideasService.getArrangedFilters();

    // instantiate instance variables
    this.newPostForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      tag: ['None', Validators.required]
    });

    this.searchDataForm = this.fb.group({
      searchText: ['', Validators.required]
    });

    this.selectedFilter = 'None';
    this.toggleNewPostView = false;
    this.newPostSubmitted = false;
  }

  // selects a filter
  selectFilter(name: string) {
    this.selectedFilter = name;
  }

  // makes the newPostPanel visible
  viewNewPost() {
    this.toggleNewPostView = true;
  }

  // removes newPostPanel visibility
  closeNewPost() {
    this.toggleNewPostView = false;
  }

  // Adds a new idea post
  submitPost() {
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
        this.ideasService.getCommentsObservable(post).subscribe(res => {
          post.comments = res || [];
          const componentRef = viewContainerRef.createComponent(componentFactory);
          componentRefs.push(componentRef);
          (componentRef.instance as IdeaNodeComponent).post = post;
        });
      });
    });
  }

  // search function used by search form
  search() {
    var input = this.searchDataForm.get('searchText').value;
    var filter = input.toUpperCase();
    alert(filter);
    /*var ul = document.getElementById("datasetsList");
    var li = ul.getElementsByTagName('li');

    var txtValue: string;
    // Loop through all list items, and hide those that don't match the search query
    for (var i = 0; i < li.length; i++) {
      txtValue = li[i].innerHTML;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      }
      else {
        li[i].style.display = "none";
      }
    }*/
  }

  /************************************
   * Form Getters
   ***********************************/

  // signup form getter
  get newPostF() {
    return this.newPostForm.controls;
  }

}
