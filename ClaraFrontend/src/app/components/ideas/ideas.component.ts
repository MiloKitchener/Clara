import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { IdeasService } from 'src/app/services/ideas/ideas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material';
import {PostAddPanelComponent} from '../post-add-panel/post-add-panel.component';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})

export class IdeasComponent implements OnInit {

  posts: Post[];
  filters: string[];
  arrangedFilters: string[];
  selectedFilter: string;

  searchDataForm: FormGroup;

  constructor(
    private ideasService: IdeasService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    // Load posts
    this.ideasService.getPosts().then((results) => {
      this.posts = results.items;
    });

    // Get variables from service
    this.filters = this.ideasService.getFilters();
    this.arrangedFilters = this.ideasService.getArrangedFilters();

    this.searchDataForm = this.fb.group({
      searchText: ['', Validators.required]
    });

    this.selectedFilter = 'None';
  }

  // Selects a filter
  selectFilter(name: string) {
    this.selectedFilter = name;
  }

  // Search function used by search form
  search() {
    const input = this.searchDataForm.get('searchText').value;
    const filter = input.toUpperCase();
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

  openAddPostDialog() {
    const dialogRef = this.dialog.open(PostAddPanelComponent, {
      width: '500px',
      maxHeight: '800px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== '') {
        result.votes = 0;
        // Create the post
        this.ideasService.addPost(result).then();
        this.posts.push(result);
      }
    });
  }
}
