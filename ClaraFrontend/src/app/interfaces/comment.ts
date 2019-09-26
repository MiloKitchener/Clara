import {Post} from './post';

export class Comment {
  id: string;
  post: Post;
  owner: string;
  content: string;
}
