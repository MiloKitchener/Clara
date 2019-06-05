import {EventEmitter, Injectable} from '@angular/core';
import { Post } from 'src/app/classes/post';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IdeasService {
  private posts: Post[];
  private filters: string[];
  private arrangedFilters: string[];
  public postUpdateEmitter = new EventEmitter();

  constructor(private http: HttpClient) {
    // Initialize class variables
    this.filters = ['Community', 'Transportation', 'Environment', 'Government', 'Information', 'Records', 'Parks and Rec', 'Waste'];
    this.arrangedFilters = ['Latest', 'Oldest', 'Popular', 'Trending'];
  }

  public getPostsObservable(): Observable<Post[]> {
    // Pull posts from database
    return this.http.get<Post[]>(environment.backendIP + 'posts/');
  }

  public getCommentsObservable(post: Post): Observable<Comment[]> {
    // Pull comments for post from database
    return this.http.post<Comment[]>(environment.backendIP + 'comments/post_comments/', post);
  }

  // Filters getter
  public getFilters(): string[] {
    return this.filters;
  }

  // ArrangedFilters getter
  public getArrangedFilters(): string[] {
    return this.arrangedFilters;
  }

  // Add a comment to a given idea
  public addComment(post: Post, comment: any): void {
    comment.post = post.url;
    this.http.post(environment.backendIP + 'comments/', comment).subscribe(() => {
      post.comments.push(comment);
      // this.postUpdateEmitter.emit(this.posts);
    });
  }

  // Create an idea post
  public addPost(postForm: any): void {
    this.http.post(environment.backendIP + 'posts/', postForm).subscribe(() => {
      this.postUpdateEmitter.emit();
    });
  }
}
