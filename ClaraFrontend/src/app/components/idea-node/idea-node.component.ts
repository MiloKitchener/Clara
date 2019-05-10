import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-idea-node',
  templateUrl: './idea-node.component.html',
  styleUrls: ['./idea-node.component.scss']
})

export class IdeaNodeComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() numComments: number;
  @Input() numVotes: number;
  private voted: number;

  constructor() { }

  ngOnInit() {
    this.voted = 0 // 0 means no vote by user, 1 means upvote, 2 means downvote
  }

  upvote() {
    if(this.voted == 0) {
      this.numVotes++;
      this.voted = 1;
    }
    else if(this.voted == 2) { // if previously downvoted, add two to remove downvote and add upvote
      this.numVotes += 2;
      this.voted = 1;
    }
    else { // upvote again to remove upvote
      this.numVotes--;
      this.voted = 0;
    }
  }

  downvote() {
    if(this.voted == 0) {
      this.numVotes--;
      this.voted = 2;
    }
    else if(this.voted == 1) { // if previously upvoted, sub two to remove upvote and add downvote
      this.numVotes -= 2;
      this.voted = 2;
    }
    else { // downvote again to remove downvote
      this.numVotes++;
      this.voted = 0;
    }
  }
}
