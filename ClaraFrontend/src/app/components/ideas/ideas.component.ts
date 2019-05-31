import { Component, OnInit } from '@angular/core';

import { IdeasService } from 'src/app/services/ideas/ideas.service';
import { Post } from 'src/app/classes/post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})

export class IdeasComponent implements OnInit {

  // instance variables
  private posts: Post[];
  private filters: string[];
  private arrangedFilters: string[];
  private selectedFilter: string;

  private newPostForm: FormGroup;

  private toggleNewPostView: boolean;
  private newPostSubmitted: boolean;

  constructor(private _ideasService: IdeasService, private fb: FormBuilder) { }

  ngOnInit() {
    // instantiate instance variables
    this.newPostForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      filterSelect: ['None', Validators.required]
    });

    this.selectedFilter = "None"
    this.toggleNewPostView = false;
    this.newPostSubmitted = false;

    // get variables from service
    this.filters = this._ideasService.getFilters();
    this.arrangedFilters = this._ideasService.getArrangedFilters();
    this.posts = this._ideasService.getPosts();
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

  // adds a new idea post
  private submitPost() {
    this.newPostSubmitted = true;
  }

  /************************************
   * Form Getters
   ***********************************/

  // signup form getter
  get newPostF() {
    return this.newPostForm.controls;
  }
}
