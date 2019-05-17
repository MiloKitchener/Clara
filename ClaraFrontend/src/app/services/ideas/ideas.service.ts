import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class IdeasService {
  constructor() { }

  // Returns a list of posts from the database
  getPosts() {
    return [
      {
        "title":"My Idea",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nulla at velit iaculis semper. Duis at mauris est. Vestibulum id efficitur diam. Nullam mattis consectetur ligula, et condimentum odio tempor at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi eget vestibulum augue. Curabitur et elementum urna. Nunc fermentum efficitur odio, venenatis consectetur nibh euismod sit amet.",
        "numComments": 0,
        "numVotes": 13,
        "imgSrc": "assets/images/avatar.png",
        "tag": "Community"
      }, {
        "title":"Her Idea",
        "description":"Aliquam cursus malesuada felis vitae pulvinar. Sed eu nulla id nisl gravida pretium eget eget sapien. Nullam congue quis nisi tincidunt vestibulum. Donec quis mi nec lorem maximus mollis et et metus. In vel ipsum ut tortor ultricies fermentum. Nulla mattis, diam eget imperdiet porttitor, diam risus aliquam tortor, at interdum diam sapien id justo. Morbi sem velit, venenatis sed ipsum et, aliquet consectetur sapien. Maecenas malesuada nibh sed ante consequat, eget hendrerit elit accumsan. Proin magna augue, ullamcorper vitae porttitor a, pulvinar et neque. Quisque molestie felis ut erat pellentesque, sed convallis lacus scelerisque. Vestibulum consectetur interdum dolor, at pretium urna fermentum ac. Pellentesque id commodo tellus. Aenean tempor nibh magna, vel pretium enim ultrices et. Nunc odio tellus, scelerisque et ullamcorper at, consectetur eleifend odio.",
        "numComments": 0,
        "numVotes": 13,
        "imgSrc": "assets/images/avatar.png",
        "tag": "Transportation"
      }, {
        "title":"His Idea",
        "description":"Proin molestie, dolor id dapibus dapibus, augue metus accumsan est, sit amet cursus diam orci pellentesque ligula. Cras id aliquam tortor. Phasellus elementum velit non sem fringilla, quis sagittis enim pellentesque. Maecenas a mattis lorem. Integer erat purus, posuere ac sodales et, egestas at velit. Nunc semper magna eu arcu blandit, nec ornare eros ullamcorper. Duis euismod a lorem ut posuere. Vivamus velit leo, porttitor ultricies auctor vitae, commodo eu purus. Ut ultricies tellus sit amet ex molestie ultrices. Duis eu lobortis massa. Ut vitae efficitur ex. Aenean condimentum justo non laoreet consectetur. Donec auctor efficitur sapien et lacinia. In tempor enim eget nulla porttitor eleifend. Nullam et enim a arcu porttitor ultricies et sit amet sapien.",
        "numComments": 0,
        "numVotes": 0,
        "imgSrc": "assets/images/avatar.png",
        "tag": "Waste"
      }, {
        "title":"His Idea",
        "description":"Proin molestie, dolor id dapibus dapibus, augue metus accumsan est, sit amet cursus diam orci pellentesque ligula. Cras id aliquam tortor. Phasellus elementum velit non sem fringilla, quis sagittis enim pellentesque. Maecenas a mattis lorem. Integer erat purus, posuere ac sodales et, egestas at velit. Nunc semper magna eu arcu blandit, nec ornare eros ullamcorper. Duis euismod a lorem ut posuere. Vivamus velit leo, porttitor ultricies auctor vitae, commodo eu purus. Ut ultricies tellus sit amet ex molestie ultrices. Duis eu lobortis massa. Ut vitae efficitur ex. Aenean condimentum justo non laoreet consectetur. Donec auctor efficitur sapien et lacinia. In tempor enim eget nulla porttitor eleifend. Nullam et enim a arcu porttitor ultricies et sit amet sapien.",
        "numComments": 0,
        "numVotes": -12,
        "imgSrc": "assets/images/avatar.png",
        "tag": "Environment"
      }
    ];
  }

  // Returns a list of filters from the database
  getFilters() {
    return ["Community", "Transportation", "Environment", "Government", "Information", "Records", "Parks and Rec", "Waste"];
  }

  // Returns a list of arrange filters from the database
  getArrangedFilters() {
    return ["Latest", "Oldest", "Popular", "Trending"];
  }
}
