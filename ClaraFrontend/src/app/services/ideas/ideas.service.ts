import { Injectable } from '@angular/core';
import { Post } from 'src/app/classes/post';

@Injectable({
  providedIn: 'root'
})

export class IdeasService {
  private posts: Post[];
  private filters: string[];
  private arrangedFilters: string[];

  constructor() {
    // initialize class variables
    this.filters = ["Community", "Transportation", "Environment", "Government", "Information", "Records", "Parks and Rec", "Waste"];
    this.arrangedFilters = ["Latest", "Oldest", "Popular", "Trending"];

    // pull posts from database
    this.posts = [
      {
        id: 0,
        title: "My Idea",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nulla at velit iaculis semper. Duis at mauris est. Vestibulum id efficitur diam. Nullam mattis consectetur ligula, et condimentum odio tempor at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi eget vestibulum augue. Curabitur et elementum urna. Nunc fermentum efficitur odio, venenatis consectetur nibh euismod sit amet.",
        numComments: 0,
        numVotes: 13,
        author: "John Smith",
        tag: "Community",
        comments: ["Great idea!", "Not sure how I feel about this", "Interesting concept"]
      }, {
        id: 1,
        title: "Her Idea",
        description: "Aliquam cursus malesuada felis vitae pulvinar. Sed eu nulla id nisl gravida pretium eget eget sapien. Nullam congue quis nisi tincidunt vestibulum. Donec quis mi nec lorem maximus mollis et et metus. In vel ipsum ut tortor ultricies fermentum. Nulla mattis, diam eget imperdiet porttitor, diam risus aliquam tortor, at interdum diam sapien id justo. Morbi sem velit, venenatis sed ipsum et, aliquet consectetur sapien. Maecenas malesuada nibh sed ante consequat, eget hendrerit elit accumsan. Proin magna augue, ullamcorper vitae porttitor a, pulvinar et neque. Quisque molestie felis ut erat pellentesque, sed convallis lacus scelerisque. Vestibulum consectetur interdum dolor, at pretium urna fermentum ac. Pellentesque id commodo tellus. Aenean tempor nibh magna, vel pretium enim ultrices et. Nunc odio tellus, scelerisque et ullamcorper at, consectetur eleifend odio.",
        numComments: 0,
        numVotes: 13,
        author: "John Smith",
        tag: "Transportation",
        comments: []
      }, {
        id: 2,
        title: "His Idea",
        description: "Proin molestie, dolor id dapibus dapibus, augue metus accumsan est, sit amet cursus diam orci pellentesque ligula. Cras id aliquam tortor. Phasellus elementum velit non sem fringilla, quis sagittis enim pellentesque. Maecenas a mattis lorem. Integer erat purus, posuere ac sodales et, egestas at velit. Nunc semper magna eu arcu blandit, nec ornare eros ullamcorper. Duis euismod a lorem ut posuere. Vivamus velit leo, porttitor ultricies auctor vitae, commodo eu purus. Ut ultricies tellus sit amet ex molestie ultrices. Duis eu lobortis massa. Ut vitae efficitur ex. Aenean condimentum justo non laoreet consectetur. Donec auctor efficitur sapien et lacinia. In tempor enim eget nulla porttitor eleifend. Nullam et enim a arcu porttitor ultricies et sit amet sapien.",
        numComments: 0,
        numVotes: 0,
        author: "John Smith",
        tag: "Waste",
        comments: []
      }, {
        id: 3,
        title: "His Idea",
        description: "Proin molestie, dolor id dapibus dapibus, augue metus accumsan est, sit amet cursus diam orci pellentesque ligula. Cras id aliquam tortor. Phasellus elementum velit non sem fringilla, quis sagittis enim pellentesque. Maecenas a mattis lorem. Integer erat purus, posuere ac sodales et, egestas at velit. Nunc semper magna eu arcu blandit, nec ornare eros ullamcorper. Duis euismod a lorem ut posuere. Vivamus velit leo, porttitor ultricies auctor vitae, commodo eu purus. Ut ultricies tellus sit amet ex molestie ultrices. Duis eu lobortis massa. Ut vitae efficitur ex. Aenean condimentum justo non laoreet consectetur. Donec auctor efficitur sapien et lacinia. In tempor enim eget nulla porttitor eleifend. Nullam et enim a arcu porttitor ultricies et sit amet sapien.",
        numComments: 0,
        numVotes: -12,
        author: "John Smith",
        tag: "Environment",
        comments: []
      }
    ];
  }

  // posts getter
  public getPosts(): Post[] {
    return this.posts;
  }

  // filters getter
  public getFilters(): string[] {
    return this.filters;
  }

  // arrangedFilters getter
  public getArrangedFilters(): string[] {
    return this.arrangedFilters;
  }

  // add a comment to a given idea
  public addComment(ideaID: number, commentText: any): void {
    // BACKEND FOR ADD COMMENT
    alert("adding comment: " + commentText.comment + " to idea post #" + ideaID);
    this.posts[ideaID].comments.push(commentText.comment);
  }
}
