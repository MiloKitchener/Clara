import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idea-node',
  templateUrl: './idea-node.component.html',
  styleUrls: ['./idea-node.component.scss']
})

export class IdeaNodeComponent implements OnInit {
  title = "";
  description = "";
  numComments = 0;
  numVotes = 0;
  voted = 0; // 0 means no vote by user, 1 means upvote, 2 means downvote

  constructor() { }

  ngOnInit() {
    this.title = "Example Title";
    this.description = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at lorem tincidunt, congue quam et, rhoncus elit. Nulla facilisi. Praesent ultrices nulla a libero congue varius. Praesent vitae molestie quam, in porta ipsum. Nulla at ex eu urna blandit imperdiet a quis sapien. Praesent vitae nibh libero. Donec eleifend neque ac semper efficitur. Praesent malesuada purus est, quis pellentesque leo venenatis nec. Suspendisse in ornare tellus, eu sagittis ante. Nam pretium imperdiet rutrum. Suspendisse consectetur tempus felis non sollicitudin. Quisque in elementum nunc, id ultricies urna. Nam malesuada lectus vitae tellus fringilla euismod. Aliquam vel lectus lorem. Mauris eget sapien sed lacus sodales interdum. Nam congue diam et nisi pellentesque interdum. Sed iaculis lacus ac sodales faucibus. Quisque non ullamcorper urna, eget varius dui. Aliquam a odio iaculis, suscipit libero tempus, condimentum ex. Pellentesque vestibulum ornare tincidunt. Nam mollis arcu metus, id tempor turpis venenatis ut. Curabitur id augue vel tellus venenatis rutrum sit amet vel tortor. Integer pellentesque nunc est, eu hendrerit ante porttitor malesuada. Pellentesque euismod tortor ante, nec finibus ipsum eleifend at. ";
    this.numVotes = 17;
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
