import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IdeasService } from 'src/app/services/ideas/ideas.service';

@Component({
  selector: 'app-idea-node',
  templateUrl: './idea-node.component.html',
  styleUrls: ['./idea-node.component.scss']
})

export class IdeaNodeComponent implements OnInit {

  @Input() post: any;
  voted: number;
  viewComments: boolean;
  addCommentForm: FormGroup;

  constructor(
    private ideaService: IdeasService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.voted = 0; // 0 means no vote by user, 1 means upvote, 2 means downvote
    this.viewComments = false;

    this.addCommentForm = this.fb.group({
      content: ['']
    });
  }

  public upvote() {
    if (this.voted === 0) {
      this.post.votes++;
      this.voted = 1;
    } else if (this.voted === 2) { // if previously downvoted, add two to remove downvote and add upvote
      this.post.votes += 2;
      this.voted = 1;
    } else { // upvote again to remove upvote
      this.post.votes--;
      this.voted = 0;
    }

    this.ideaService.updatePost({id:this.post.id, votes:this.post.votes})
  }

  public downvote() {
    if (this.voted === 0) {
      this.post.votes--;
      this.voted = 2;
    } else if (this.voted === 1) { // if previously upvoted, sub two to remove upvote and add downvote
      this.post.votes -= 2;
      this.voted = 2;
    } else { // downvote again to remove downvote
      this.post.votes++;
      this.voted = 0;
    }
    this.ideaService.updatePost({id:this.post.id, votes:this.post.votes})
  }

  // Toggles comment view
  public toggleComments() {
    this.viewComments = this.viewComments === false;
  }

  // Adds a comment
  public submitComment() {
    // Create the comment object
    const newComment = this.addCommentForm.value;
    newComment.commentPostId = this.post.id;

    // Create the comment
    this.ideaService.addComment(newComment).then();
    this.post.comments.items.push(newComment);
  }
}
