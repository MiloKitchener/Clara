export class Post {
  url: string;
  title: string;
  description: string;
  author: string;
  num_votes: number;
  tag: string;
  comments: Comment[];
}
