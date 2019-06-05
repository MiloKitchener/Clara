import { Component, OnInit } from '@angular/core';

import { IdeasService } from 'src/app/services/ideas/ideas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})

export class IdeasComponent implements OnInit {

  // instance variables
  private filters: string[];
  private arrangedFilters: string[];
  private selectedFilter: string;

  private newPostForm: FormGroup;

  private toggleNewPostView: boolean;
  private newPostSubmitted: boolean;

  constructor(
    private ideasService: IdeasService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
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

  /************************************
   * Form Getters
   ***********************************/

  // signup form getter
  get newPostF() {
    return this.newPostForm.controls;
  }
}
