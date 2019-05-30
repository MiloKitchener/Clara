import { Component, OnInit } from '@angular/core';

import { IdeasService } from 'src/app/services/ideas/ideas.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})

export class IdeasComponent implements OnInit {

  // instance variables
  private posts = [];
  private filters = [];
  private arrangedFilters = [];
  private selectedFilter: string;

  constructor(private _ideasService: IdeasService) {
    // instantiate instance variables
    this.posts = null;
    this.filters = null;
    this.arrangedFilters = null;
    this.selectedFilter = "None"
  }

  ngOnInit() {
    // get variables from service
    this.posts = this._ideasService.getPosts();
    this.filters = this._ideasService.getFilters();
    this.arrangedFilters = this._ideasService.getArrangedFilters();
  }

  // opens up new post panel
  newPost() {
    alert("New Post");
  }

  // selects a filter
  selectFilter(name: string) {
    this.selectedFilter = name;
  }
}