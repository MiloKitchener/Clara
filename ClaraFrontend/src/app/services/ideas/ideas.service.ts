import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from '../../API.service';

@Injectable({
  providedIn: 'root'
})

export class IdeasService {
  private filters = ['Community', 'Transportation', 'Environment', 'Government', 'Information', 'Records', 'Parks and Rec', 'Waste'];
  private arrangedFilters = ['Latest', 'Oldest', 'Popular', 'Trending'];

  constructor(
    private http: HttpClient,
    private apiService: APIService
  ) { }

  public getPosts(): Promise<any> {
    // Pull posts from database
    return this.apiService.ListPosts();
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
  public addComment(commentInput) {
    return this.apiService.CreateComment(commentInput);
  }

  // Create an idea post
  public addPost(postInput): Promise<any> {
    return this.apiService.CreatePost(postInput);
  }
}
