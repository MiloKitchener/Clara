export class Post {
  url: string;
  title: string;
  description: string;
  author: string;
  // tslint:disable-next-line:variable-name
  num_votes: number;
  tag: string;
  comments: Comment[];
}
