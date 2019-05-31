import { Component, OnInit } from '@angular/core';

import { IdeasService } from 'src/app/services/ideas/ideas.service';
import { Post } from 'src/app/classes/post';

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

  constructor(private _ideasService: IdeasService) { }

  ngOnInit() {
    // instantiate instance variables
    this.selectedFilter = "None"

    // get variables from service
    this.posts = this._ideasService.getPosts();
    this.filters = this._ideasService.getFilters();
    this.arrangedFilters = this._ideasService.getArrangedFilters();
  }

  // selects a filter
  selectFilter(name: string) {
    this.selectedFilter = name;
  }
}