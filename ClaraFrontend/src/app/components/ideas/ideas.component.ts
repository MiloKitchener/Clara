import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { IdeasService } from 'src/app/services/ideas/ideas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  newPostForm: FormGroup;
  searchDataForm: FormGroup;

  toggleNewPostView: boolean;
  newPostSubmitted: boolean;

  constructor(
    private ideasService: IdeasService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    // Load posts
    this.ideasService.getPosts().then((results) => {
      this.posts = results.items;
    });

    // Get variables from service
    this.filters = this.ideasService.getFilters();
    this.arrangedFilters = this.ideasService.getArrangedFilters();

    this.newPostForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
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
    // Create the post object
    const newPost = this.newPostForm.value;
    newPost.votes = 0;

    // Create the post
    this.ideasService.addPost(newPost).then();
    this.posts.push(newPost);
  }

  // search function used by search form
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
}
