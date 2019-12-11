import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IdeasService} from '../../services/ideas/ideas.service';

@Component({
  selector: 'app-post-add-panel',
  templateUrl: './post-add-panel.component.html',
  styleUrls: ['./post-add-panel.component.scss']
})
export class PostAddPanelComponent implements OnInit {

  newPostForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ideaService: IdeasService
  ) { }

  ngOnInit() {
    this.newPostForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      tags: ['None', Validators.required]
    });
  }

}
