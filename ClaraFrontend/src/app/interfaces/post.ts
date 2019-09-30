import {Comment} from './comment';

export class Post {
  id: string;
  title: string;
  content: string;
  votes: number;
  owner: string;
  comments: [Comment];
  tag: string;
}
