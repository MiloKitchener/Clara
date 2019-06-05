import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/classes/post';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IdeasService } from 'src/app/services/ideas/ideas.service';

@Component({
  selector: 'app-idea-node',
  templateUrl: './idea-node.component.html',
  styleUrls: ['./idea-node.component.scss']
})

export class IdeaNodeComponent implements OnInit {
  @Input() post: Post;
  private voted: number;
  private viewComments: boolean;
  private addCommentForm: FormGroup;

  constructor(
    private ideaService: IdeasService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.voted = 0; // 0 means no vote by user, 1 means upvote, 2 means downvote
    this.viewComments = false;

    this.addCommentForm = this.fb.group({
      comment: ['']
    });
  }

  public upvote() {
    if (this.voted === 0) {
      this.post.num_votes++;
      this.voted = 1;
    } else if (this.voted === 2) { // if previously downvoted, add two to remove downvote and add upvote
      this.post.num_votes += 2;
      this.voted = 1;
    } else { // upvote again to remove upvote
      this.post.num_votes--;
      this.voted = 0;
    }
  }

  public downvote() {
    if (this.voted === 0) {
      this.post.num_votes--;
      this.voted = 2;
    } else if (this.voted === 1) { // if previously upvoted, sub two to remove upvote and add downvote
      this.post.num_votes -= 2;
      this.voted = 2;
    } else { // downvote again to remove downvote
      this.post.num_votes++;
      this.voted = 0;
    }
  }

  // Toggles comment view
  public toggleComments() {
    this.viewComments = this.viewComments === false;
  }

  // Adds a comment
  public submitComment() {
    this.ideaService.addComment(this.post, this.addCommentForm.value);
  }
}
